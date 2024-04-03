import Carousel from 'react-bootstrap/Carousel';
// import images from '../assets/notimg.jpeg';
// import Pines from '../../assets/Pinesporvenircamisetanegra.jpg';
import Joyeria from '../assets/anillo2.jpg';
// import InsigniasMilitaress from '../../assets/10.jpg';
import Medallas from '../assets/1.jpg';
import Empresarial from '../assets/tarjetasmetalicas.jpg'
// import ServiDigaimge from '../../assets/Estatuillas.jpg';

function UncontrolledExample() {
  
  return (
    
    <Carousel className='mod-carosel'>
      <Carousel.Item>
        <img src={Joyeria} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Medallas}  text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Empresarial} text="Third slide" />
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