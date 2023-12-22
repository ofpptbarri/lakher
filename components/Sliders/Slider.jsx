import Carousel from 'react-bootstrap/Carousel';
import {  Button } from 'react-bootstrap';
import './slider.css'
function Slider() {
  return (
    <div  id='carousel' className='d-flex justify-content-center'>

        <Carousel className='w-75 '>
          <Carousel.Item>
            <img class="d-block w-100" src="https://gcdn.imgix.net/events/hassan-el-fad-who-is-kabour-a-marrakech-2.png" alt="" />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="d-block w-100" src="https://gcdn.imgix.net/events/les-inqualifiables-sia-moi-ya-toi-a-meknes-1.jpeg" alt="" />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="d-block w-100" src="https://gcdn.imgix.net/events/pauscine-film-al-ikhwan.png" alt="" />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="d-block w-100" src="https://gcdn.imgix.net/events/piece-theatrale-allah-islah-a-casablanca-3.jpeg" alt="" />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img class="d-block w-100" src="https://gcdn.imgix.net/events/cafe-theatre-1ere-edition.jpeg" alt="" />
 
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
         
         
        </Carousel>
        
    </div>
  );
}

export default Slider;