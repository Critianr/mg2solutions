import {Header} from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

import Pines from '../../assets/img-home/Pinespersonalizadosqueen.jpg';
import Joyeria from '../../assets/img-home/anillos1.jpg';
import InsigniasMilitaress from '../../assets/img-home/47.jpg';
import Medallas from '../../assets/notimg.png';
import Empresarial from '../../assets/img-home/fichero2.jpg'
import ServiDigaimge from '../../assets/img-home/Estatuillas 1.jpg';
import UncontrolledExample from '../../components/UncontrolledExample';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { Link } from 'react-router-dom';
function Home(){

    return(
      
        <>
        
        <div className='wrp'>
        
        <DesktopNavigation />
        <Header />
        <div className='gallery'>
        

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
      <div className="item full-width">
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