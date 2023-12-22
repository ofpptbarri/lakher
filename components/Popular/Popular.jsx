import React from "react";
import data1 from "../Data/popular.json"
import Marquee from "react-fast-marquee";
export default function Matchsl(){
    return(
        <>
        <div className="cntmsl" style={{marginTop:'80px'}}>
            <div className="WR">
                
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