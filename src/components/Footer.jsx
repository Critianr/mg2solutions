
import maslcaro from '../assets/maslcaro-removebg-preview.png'
import Intam from '../assets/instam-icons.svg'; 
import Fb from '../assets/fb-icons.svg'; 
import Whatp from '../assets/whatsapp-icons.svg'; 
function Footer(){
    return(
        <>
        <footer>  
  <div className='grid-container'>
    <img src={maslcaro} alt="" />
  </div>
  <div className="footer-contacto">
    <p>Don't miss out Subscribe to our mailing list for 
      insider news, product launches, and more.</p>
      <div className='follows'>
        <img className='svg-follows' src={Intam} alt="" />
        <img className='' src={Fb} alt="" />
        <img className='' src={Whatp} alt="" />
      </div>
  </div>
</footer>
        </>
    )
}

export {Footer};