import React from 'react';
import foundimg from './assets/notimg.jpeg';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import UncontrolledExample from './components/UncontrolledExample';
import './App.css'

function App() {
  
    return (
    <>
     <Header />
      {/* banner */}
      <div className='gallery'>
      <UncontrolledExample />
      </div>
      <div className='description'>
      <p> We design durable travel apparelasd th a conscience — 100% made in America. dasroducts 
        by United By Blue. Video by Seth Morrisey.
      </p>
      </div>
      <h2>NUESTRO PRODUCTOS</h2> 
      <div className='wrp-productos'>
            
      <div className="grid-container">
      
      <div className="item">
      <img src={foundimg} alt="Imagen 1" />
      </div>
      <div className="item">
      <img src={foundimg} alt="Imagen 2" />
      </div>

      <div className="item full-width">
      <img src={foundimg} alt="Imagen 3" />
      </div>

      <div className="item">
      <img src={foundimg} alt="Imagen 4" />
      </div>

      <div className="item">
      <img src={foundimg} alt="Imagen 5" />
      </div>

      </div>
    </div>
    {/*  */}
    <Footer />

 </>
   

  );
}

export default App;

