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
      <div className="item-content">
      <img className="img-home" src={InsigniasMilitaress} alt="Imagen 1" />
      <div className="text-content">
          <h3 className='item-title'>Insignias Militares</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>  
      </div>
      <div className="item">
      <Link to="/empresarial" className="image-link">
      <div className="item-content">
        <img className="img-home" src={Empresarial} alt="Imagen 2" />
        <div className="text-content">
          <h3 className='item-title'>Empresarial</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>
    </div>  

      <div className="item">
      <Link to="/joyeria" className="image-link">
      <div className="item-content">
      <img className="img-home" src={Joyeria} alt="Imagen 3" />
      <div className="text-content">
          <h3 className='item-title'>Joyeria</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>
      </div>

      <div className="item">
      <Link to="/medallas" className="image-link">
      <div className="item-content">
      <img className="img-home" src={Medallas} alt="Imagen 4" />
      <div className="text-content">
          <h3 className='item-title'>Medallas</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>
      </div>

      <div className="item full-width">
      <Link to="/pines" className="image-link">
      <div className="item-content">
      <img className="img-home" src={Pines} alt="Imagen 5" />
      <div className="textfull-width">
          <h3 className='item-title'>Pines</h3>
          <p>Descripción corta del servicio digital</p>
        </div>
        </div>
        
      </Link>
      </div>
      <div className="item full-width">
      <Link to="/servicios-digitales" className="image-link">
      <div className="item-content">
        <img className="img-home" src={ServiDigaimge} alt="Imagen 5" />
        
        <div className="textfull-width">
          <h3 className='item-title'>Servicios Digitales</h3>
          <p>Descripción corta del servicio digital</p>
        </div>
       </div>
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