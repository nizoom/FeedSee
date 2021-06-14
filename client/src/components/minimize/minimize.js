import React from "react";
import "./minimize.css"

const CollapseButton = (props) => {

    // document.querySelector('.circle').addEventListener('click', () => {
    //     document.querySelector('.vertical').classList.toggle('open');
    //     document.querySelector('.line-wrapper').classList.toggle('open');
    //     document.querySelector('.content').classList.toggle('open');
    //   });

    // toggle class hook from customName to customName.open




    return (
        <div>
            <button className="circle" onClick={props.btnClicked}>
                <div className={props.status ? "line-wrapperOpen" : "line-wrapper"}>
                    <div className="horizontal"></div>
                    <div className={props.status ? "verticalOpen" : "vertical"}></div>
                </div>
            </button>
        </div>
    )
}

export default CollapseButton;