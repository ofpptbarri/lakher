import React from "react";
import data1 from "../Data/spectacle.json"
import Marquee from "react-fast-marquee";
export default function Sl(){
    return(
        <>
        <div className="cntmsl">
            <div className="WR">
                <h1 className="DCA" >Les nouveaux spectacles </h1>
                <Marquee className="marque">
                    <div className="MG">
                        {
                            data1.map((x)=>
                            <div className='imagegrp'>
                                <img  className="imagedrb"src={x.img} />
                            </div>
                            )
                        }
                    </div>
                </Marquee>

            </div>
        </div>
        
        
        
        </>
    )
} 