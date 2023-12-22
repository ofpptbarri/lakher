import React from "react";
import Navbar from "../Nav/Nav";
import data from "../Data/match.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card , Button } from 'react-bootstrap';
import { CiMapPin } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import Matchsl from "./matchsl";

import { Link } from "react-router-dom";


export default function Sport(){
  
   
   return (<>
        
        <Navbar />
        <Matchsl />
        <h1 className='d-flex align-items-center justify-content-center'>À ne pas manquer</h1>
        <h6 className='d-flex align-items-center justify-content-center'>Agenda exceptionnel</h6>
        <div className='container-fluid d-flex justify-content-between'>
        {data.map((item)=>{
          
            return (
                <Container>
                    
      <Row >
    
      <Col>
          <Card>
            <Card.Img variant="top" src={item.img}  style={{height:'175px'}}/>
            <Card.Body>
              <Card.Title id='CD' className="d-flex align-items-center justify-content-center"> {item.titre} </Card.Title>
              
              <Card.Text >
                {item.date} <br /> <CiMapPin /> {item.emplacement}<br /> <div className="d-flex align-items-center justify-content-center"> <IoIosTime /> {item.heure} </div>
              </Card.Text>
              <Card.Text >
              <p id="apd">À partir de :</p>
                 <span id="price">{item.price}</span>MAD
              </Card.Text>
            <Button className='w-100 ' id="button-by" >
              <Link  className="ACHETERM"to={`/achat/${item.titre}`}>ACHETER MAINTENANT</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
    
        
      </Row>
    </Container>
            )
        })}
    </div></>
        
    )
}