import React from "react";
import Goo from 'gooey-react'
import "./blob.css"

const BlobLoader = () => {
    return (
        <Goo instenity="weak" style={{ animation: 'left 10s linear infinite' }}>
            <svg width="192" height="192">

                <g id="parent">
                    <circle cx="37%" cy="37%" fill="#16AE89" r="32" style={{ animation: 'right 3s linear infinite' }} />
                    <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />


                </g>

            </svg>

        </Goo>
    )
}

export default BlobLoader




{/* 


    width: "450px", height: "600px",
                    overflow: "hidden"



                          <Goo instenity="weak" style={{ animation: 'left 4s linear infinite' }}>
                    <svg width="192" height="192">

                        <g id="parent">
                            <circle cx="37%" cy="37%" fill="orchid" r="32" style={{ animation: 'right 1s linear infinite' }} />
                            <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />
                          

                        </g>

                    </svg>

                </Goo>
                        */}
