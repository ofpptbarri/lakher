import React from "react";
import data1 from "../Data/Derby.json"
import Marquee from "react-fast-marquee";
export default function Matchsl(){
    return(
        <>
        <div className="cntmsl">
            <div className="WR">
                <h1 className="DCA" >Derby Casablanca</h1>
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