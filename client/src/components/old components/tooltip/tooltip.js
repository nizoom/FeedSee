import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../wordcloud/wordcloud.css"




const ToolTip = (props) => {

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
            borderRadius: "15px"
        },
    }))(Tooltip);


    return (

        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">
                        <i>{props.word} </i> {`is used ${props.frequency} times`}

                    </Typography>

                </React.Fragment>
            }
        >
            <div style={{ fontSize: `${props.frequency * 9.5}px`, fontWeight: "700", paddingLeft: "2px", paddingRight: "2px" }}
            >{props.word}</div>
        </HtmlTooltip>




    )
}

export default ToolTip;




{/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
{"It's very engaging. Right?"} */}





 //const tTip = <ToolTip frequency={droplet.frequency} word={droplet.word} />

    //     <ToolTip placement="right" trigger={['click']} overlay={<span>tooltip</span>}>
    //     {droplet.word} is used {droplet.frequency}times
    // </ToolTip>





// import "./styles.css";
// import React from "react";

// export default function App() {
//   const numberOfHeadings = 
//   [{num : 1, value: "tip1"}, {num : 2, value: "tip2"}, {num : 4, value : "tip3" }, 
//   {num: 5, value : "tip4"}, {num : 6, value: "tip6"}];

//   const handleClick = () => {
//     console.log("show tip");
//     setDisplay(!display);
//   };
//   const [display, setDisplay] = React.useState(false);

//   const headings = numberOfHeadings.map((num) => (
//     <div
//       className="clickable"
//       key={numberOfHeadings.indexOf(num) + Math.random() * 10}
//     >
//       <h2 onClick={handleClick}>Start editing to see some magic happen!</h2>
//       <div>
//         {display ? (
//           <span
//             style={{
//               backgroundColor: "gray",
//               padding: "10px"
//             }}
//           >
//             {num.value}
//           </span>
//         ) : null}
//       </div>
//     </div>
//   ));
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>

//       {headings}
//     </div>
//   );
// }
