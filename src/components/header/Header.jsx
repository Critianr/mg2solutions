import hdlogo from '../../assets/mdmlogo.png';
import Menu from '../menu/Menu';
import Intam from '../../assets/instam-icons.svg'; 
import Fb from '../../assets/fb-icons.svg'; 
import Whatp from '../../assets/whatsapp-icons.svg'; 
import './header.css';


function Header() {
  return (
    <>
    <header>
     <div className='offer'>Si te gusta lo mejor, ¡nosotros lo fabricamos! </div>
     <div className='wrp-header'>
        <div className='wrp-logo'>
        <img className="logo-init" src={hdlogo} alt="Mi Imagen" />
        </div>
        <div className='wrp-title'>
          <h1 className='title'>2MG SOLUTIONS</h1>
          <span>Somos los cacaos de la joyería</span>
        </div>
        <div className='wrp-follow'>
          <li><a href="#"><img src={Intam} alt="facebook" /></a></li>
          <li><a href="#"><img src={Fb} alt="facebook" /></a></li>
          <li><a href="#"><img src={Whatp} alt="facebook" /></a></li>
          <span className='menu'> 
          <Menu />
          </span>
          
        </div>
      </div>
      </header>
      </>
  );
}

export {Header}