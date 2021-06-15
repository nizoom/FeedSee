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

    // const setFontSize = (frequency) => {
    //     console.log("fired size")
    //     const fontSize = window.innerWidth / 120 * frequency
    //     return `${fontSize}px`
    // }
    // window.addEventListener('resize', setFontSize);

    //setFontSize(droplet.frequency)

    const droplets = props.text.map((droplet) => (
        <div key={props.text.indexOf(droplet)}>
            <ToolTip word={droplet.word} frequency={droplet.frequency}>
                <div key={props.text.indexOf(droplet)} className="droplet"
                    style={{ fontSize: `${.5 * droplet.frequency}vw`, fontWeight: "700", paddingLeft: "2px", paddingRight: "2px" }}
                    onClick={activateToolTip}

                >  {droplet.word}
                </div>

            </ToolTip>



        </div >


    ))

    console.log(props.text)

    return (
        <Grid container direction="column" spacing={2} justify="center">
            <div className="cloudWrapper" >

                <div className="cloudTitle">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2"> Word Cloud of what {props.authorName} sees </Typography>
                    </ThemeProvider>
                </div>


                <div className="outerContainer">

                    <img src={gif} alt="tweetGif" style={{ borderRadius: "16px", float: "left" }} />



                    <div className="cloud">

                    </div>
                </div>



            </div >
        </Grid>
    );

}
// {droplets}

export default MyCloud;

//{droplets}

// <img src={gif} alt="tweetGif" />

//<img src={gif} alt="tweetGif">  </img>

//border: "solid", borderColor: "black", borderWidth: ".5px",



