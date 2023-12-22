import React, { useState } from "react"
import './Pdf.css'
import { useRef } from "react"
import logo from "../img/logo2.png"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import qrcode from "../img/OIP.jpg"
import data2 from "../Data/match.json"
import { useParams } from "react-router-dom"
import Navbar from "../Nav/Nav";

 export default function Pdf(){
    
    const {titre} = useParams();
    const pdfref=useRef()
    function downloadpdf(){
        const input = pdfref.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p','mm','a4',true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio =Math.min(pdfWidth /imgWidth,pdfHeight/imgHeight);
            const imgX = (pdfWidth - imgWidth *ratio)/2;
            const imgY=30;
            pdf.addImage(imgData ,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
            pdf.save('GUICHET');
        }
        )
    } 
  
    return (
        <>
         <Navbar />
        <div id="cn" className="container ">
        <div  ref={pdfref}>
        {data2.filter(item =>item.titre === titre).map((item)=>(
           <> <div className="pdftitre">
                <div><img className="logo-pdf"src={logo}/>
                <h3>{item.titre}</h3>
                <h3>{item.date}</h3>
                
                <p>Price :{item.price} MAD</p></div>
                
            <div className="right">
                <img className="QRCODE" src={qrcode} alt="" />
                <h3> {Math.random()*100000000000000000} </h3>
            </div>
            </div>
            <h2 className="impo">Important:</h2>
            <ul className="listeimpo">
                <li>Obligation de présenter la Carte Nationale physique (non photocopiée) aux guichets</li>
                <li>Obligation de presenter la récépissé d'achat effectué via le site</li>
                <li>Obligation d'acheter un tickets pour les mineurs</li>
            </ul></>))}
            
            
        </div>
        <button className="btnpdf"onClick={downloadpdf}>Get your PDF</button></div>
        </>
    )
 }