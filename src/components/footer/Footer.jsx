
import imageslogo from '../../assets/logofooter.svg'
import Intam from '../../assets/instam-icons.svg'; 
import Fb from '../../assets/fb-icons.svg'; 
import Whatp from '../../assets/whatsapp-icons.svg'; 
import './footer.css'; 
function Footer(){
    return(
        <>
 <footer>  
  <div className='grid-container'>
    <div className='container-logo'>
    <img className="logo-footer" src={imageslogo} alt="" />
    </div>
  <div className="footer-contacto">
    
    <p>Cra. 110 Bis #64d-64, Engativa, Bogotá <br />
      Correo: comercial@2mgsolutions.com <br />
      Telefono: 3214298999
    </p>
    {/* <p>Correo: comercial@2mgsolutions.com</p>
    <p>Telefono: 3214298999</p> */}
      <div className='follows'>
        <img className='svg-follows' src={Intam} alt="" />
        <img className='svg-follows' src={Fb} alt="" />
        <img className='svg-follows' src={Whatp} alt="" />
      </div>
      
  </div>
  <div className='copyright'>
     <p>
      2MG Solutions © Todos los derechos reservados 2022
     </p>
      </div>
  </div>
  <div><p>Gracias por apoyar la industria colombiana</p></div>
</footer>
        </>
    )
}

export {Footer};