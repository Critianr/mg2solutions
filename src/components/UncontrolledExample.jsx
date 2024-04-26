import Carousel from 'react-bootstrap/Carousel';
// import images from '../assets/notimg.jpeg';
// import Pines from '../../assets/Pinesporvenircamisetanegra.jpg';
import Joyeria from '../assets/img-home/anillos1.jpg'
// import InsigniasMilitaress from '../../assets/10.jpg';
import Medallas from '../assets/notimg.png';
import Empresarial from '../assets/img-home/pulsera2.jpg'
// import ServiDigaimge from '../../assets/Estatuillas.jpg';
import './unCarrosuel.css'

function UncontrolledExample() {
  
  return (
    
    <Carousel className='mod-carosel'>
      <Carousel.Item>
        <img src={Joyeria} className="carousel-image" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Medallas} className="carousel-image"  text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Empresarial} className="carousel-image" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;