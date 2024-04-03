import {Header} from '../../components/Header';
import { Footer } from '../../components/Footer';
import foundimg from '../../assets/notimg.png';
import Pines from '../../assets/Pinesporvenircamisetanegra.jpg';
import Joyeria from '../../assets/anillo2.jpg';
import InsigniasMilitaress from '../../assets/10.jpg';
import Medallas from '../../assets/1.jpg';
import Empresarial from '../../assets/tarjetasmetalicas.jpg'
import ServiDigaimge from '../../assets/Estatuillas.jpg';
import UncontrolledExample from '../../components/UncontrolledExample';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { Link } from 'react-router-dom';
function Home(){

    return(
      
        <>
        
        <div className='wrp'>
        <DesktopNavigation />
        <div className='gallery'>
        <Header />

      <UncontrolledExample />
      
      <div className='description'>
      <p> We design durable travel apparelasd th a conscience — 100% made in America. dasroducts 
        by United By Blue. Video by Seth Morrisey.
      </p>
      </div>
      <h2>NUESTRO PRODUCTOS</h2> 
      <div className='wrp-productos'>
            
      <div className="grid-container">
      
      <div className="item">
      <Link to="/insignias-militares" className="image-link">
      <img className="img-home" src={InsigniasMilitaress} alt="Imagen 1" />
      <p className="image-title">Insignias Militares</p>
      </Link>  
      </div>
      <div className="item">
      <Link to="/empresarial" className="image-link">
        <img className="img-home" src={Empresarial} alt="Imagen 2" />
        <p className="image-title">Empresarial</p>
      </Link>
    </div>  

      <div className="item full-width">
      <Link to="/joyeria" className="image-link">
      <img className="img-home" src={Joyeria} alt="Imagen 3" />
      <p className="image-title">Joyeria</p>
      </Link>
      </div>

      <div className="item">
      <Link to="/medallas" className="image-link">
      <img className="img-home" src={Medallas} alt="Imagen 4" />
      <p className="image-title">Medallas</p>
      </Link>
      </div>

      <div className="item">
      <Link to="/pines" className="image-link">
      <img className="img-home" src={Pines} alt="Imagen 5" />
      <p className="image-title">Pines</p>
      </Link>
      </div>
      <div className="item">
      <Link to="/servicios-digitales" className="image-link">
      <img className="img-home" src={ServiDigaimge} alt="Imagen 5" />
      <p className="image-title">Servicios Digitales</p>
      </Link>
      </div>
      
      </div>
    </div>
    
    
    {/*  */}
    <Footer />
    </div>
    </div>  
    
    
        </>
    );
}
export {Home};