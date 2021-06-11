import React from "react";
//import Tooltip from 'rc-tooltip';

const ToolTip = (props) => {
    return (

        <span style={{ backgroundColor: "gray", color: "black", border: "solid black", fontSize: "20px", float: "right" }}>
            {props.word} is used {props.frequency}times
        </span>


    )
}

export default ToolTip;

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
