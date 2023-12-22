import React from "react"; 
import data3 from "../Data/spectacle.json"

import { Link, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Navbar from "../Nav/Nav";
export default function PaymentS(){
    const {titre} = useParams();
    return(
        <>
        <Navbar />
        {data3.filter(item =>item.titre === titre).map((item)=>(
            <><h1 className="titreaa">{item.titre}</h1>
            <div className="achatdv">
                <img  className="imageaa" src={item.img}/>
                <div className="achatinfo">
                    <h3 className="AchatDate">{item.date}</h3>
                    <h5 className="AchatEmplacement">{item.emplacement}</h5>
                   <p className="achatpr"><span className="achattckt">Ticket</span>{item.price} MAD</p>
                   <button className="btnachat"><Link className="ACHETERM" to={`/pdfTH/${item.titre}`}>Acheter maintenant</Link> </button>
                   <p className="vt">Vite !! Achetez rapidement vos tickets</p>
                </div>
                
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>{item.description}</p>
            </div>
            
            
            </>
            
        ))}
        
        
        
        </>
    )
}