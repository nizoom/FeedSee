import React from "react";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const HomeBtn = (props) => {
    return (
        <div>
            <button style={{
                padding: "8px", borderRadius: "16px 0px 0px 16px", float: "right", left: "101%",
                backgroundColor: "#32BDB7"
            }}>
                <a href="https://www.nissimram.com">
                    <HomeOutlinedIcon style={{}} />
                </a>


            </button >
        </div >
    )
}

export default HomeBtn;