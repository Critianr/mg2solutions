import {Header} from '../../components/Header';
import { Footer } from '../../components/Footer';
import foundimg from '../../assets/notimg.png';

import UncontrolledExample from '../../components/UncontrolledExample';
import { DesktopNavigation } from '../../components/DesktopNavigation';
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
      <a href="#" className="image-link">
      <img src={foundimg} alt="Imagen 1" />
      <p className="image-title">Título de la imagen 1</p>
      </a>  
      </div>
      <div className="item">
      <a href="#" className="image-link">
        <img src={foundimg} alt="Imagen 2" />
        <p className="image-title">Título de la imagen 1</p>
      </a>
    </div>  

      <div className="item full-width">
      <a href="#" className="image-link">
      <img src={foundimg} alt="Imagen 3" />
      <p className="image-title">Título de la imagen 1</p>
      </a>
      </div>

      <div className="item">
      <a href="#" className="image-link">
      <img src={foundimg} alt="Imagen 4" />
      <p className="image-title">Título de la imagen 1</p>
      </a>
      </div>

      <div className="item">
      <a href="#" className="image-link">
      <img src={foundimg} alt="Imagen 5" />
      <p className="image-title">Título de la imagen 1</p>
      </a>
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