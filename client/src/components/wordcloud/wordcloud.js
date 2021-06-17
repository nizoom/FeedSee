import React from "react";
import Typography from '@material-ui/core/Typography';
import "./wordcloud.css"
import gif from "./../../media/tweetgifv7.gif"
import Grid from '@material-ui/core/Grid';
import ToolTip from "./../tooltip/tooltip"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const MyCloud = (props) => {

    const theme = createMuiTheme();

    theme.typography.h2 = {
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
    };

    const [clicked, setClick] = React.useState(false)

    const activateToolTip = () => {
        setClick(!clicked)
    }

    const determineFrequency = (frequency) => {
        return (frequency > 10 ? 10 : frequency)
    }


    const setFontSize = (frequency) => {

        const width = window.innerWidth

        const small = 500 //px
        const medium = 700
        const large = 1000
        let currentSize = 0;

        //if frequency over 10 then it will stil get sized with a frequency of 10

        const freq = determineFrequency(frequency)
        //console.log("freq " + freq)
        if (width > large) { //if large 
            currentSize = large;

            const fontSize = currentSize / 130 * freq
            //console.log(`${fontSize} , ${freq}`)
            return `${fontSize}px`

        }
        if (width > medium && width < large) { //if medium  (btw 700 and 1000)
            currentSize = medium;
            const fontSize = currentSize / 300 * freq
            //console.log(`rendered ${fontSize} , ${freq}`)
            return `${fontSize}px`
        }

        if (width < medium) { //if small 
            currentSize = small;
            const fontSize = currentSize / 600 * (freq / 2)
            //console.log(`rendered ${fontSize} , ${freq}`)
            return `${fontSize}px`
        }

    }

    // setFontSize(droplet.frequency)

    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        };
    }




    //RERENDERING FOR WINDOW CHANGE

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })



    let counter = 0


    const checkForShove = () => {
        console.log(counter)
        // console.log("hook " + dimensions.width)
        // console.log("vanilla " + window.innerWidth)
        //let styles = {};
        if (counter > 260) { // A ton of repeated words like when trying Bill Gates 
            console.log("BIG SHOVED!") //change to rectangle 

            //styles = Object.assign(styles, bigShoveStyles)
            return "cloudBigShove"
        }
        console.log(window.screen.width)
        if (counter > 235 && window.screen.width < 650) { //if critical mass of words and if screen size small enough
            console.log("----SHOVED!----") //change to rectangle 
            return "cloudRegularShove"
            const regularShove = {
                marginTop: "100vh", height: "800px", borderRadius: "5px",
                paddingBottom: "20px"
            }
            //styles = Object.assign(styles, regularShove)

        }
        //console.log(styles)
        return "cloud";
    }

    //{checkForShove}

    const droplets = props.text.map((droplet) => (

        //setCounter(counter + droplet.frequency),
        counter += droplet.frequency,

        < div key={props.text.indexOf(droplet)} >
            <ToolTip word={droplet.word} frequency={droplet.frequency}

            >
                <div key={props.text.indexOf(droplet)} className="droplet"
                    style={{
                        fontSize: setFontSize(droplet.frequency), fontWeight: "700", paddingLeft: "2px",
                        paddingRight: "2px",
                    }}
                    onClick={activateToolTip}

                >  {droplet.word}
                </div>

            </ToolTip>



        </div >


    ))

    // console.log(props.text)



    return (
        <Grid container direction="column" spacing={1} justify="center">
            <div className="cloudWrapper" >

                <div className="cloudTitle">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2"> Word Cloud of what {props.authorName} sees </Typography>
                    </ThemeProvider>
                </div>


                <div className="outerContainer">

                    <img src={gif} alt="tweetGif" style={{ borderRadius: "16px", float: "left" }} />



                    <div className="cloud" className={checkForShove()} >

                        {droplets}

                    </div>
                </div>



            </div >
        </Grid >
    );

}
// {droplets}

export default MyCloud;

