
import maslcaro from '../assets/maslcaro-removebg-preview.png'
import Intam from '../assets/instam-icons.svg'; 
import Fb from '../assets/fb-icons.svg'; 
import Whatp from '../assets/whatsapp-icons.svg'; 
function Footer(){
    return(
        <>
 <footer>  
  <div className='grid-container'>
    <div>
    <img src={maslcaro} alt="" />
    </div>
  <div className="footer-contacto">
    
    <p>Cra. 110 Bis #64d-64, Bogotá</p>
    <p>Correo: comercial@2mgsolutions.com</p>
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
</footer>
        </>
    )
}

export {Footer};