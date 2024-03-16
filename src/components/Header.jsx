import hdlogo from '../assets/mdmlogo.png';
import ExamOffcan from './ExamOffcan'
import menuimg from '../assets/menu.svg';
import Menu from './menu/Menu';
function Header() {


  return (
    <>
     <div className='offer'>Visita nuestra última colección.</div>
      <header className='wrp-header'>
        <div className='wrp-logo'>
        <img src={hdlogo} alt="Mi Imagen" />
        </div>
        <div className='wrp-title'>
          <h1 className='title'>2MG SOLUTIONS</h1>
          <span>ACCESORIOS DE JOYERIA</span>
        </div>
        <div className='wrp-follow'>
          {/* <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li> */}
          <span className='menu'> 
          <Menu />
          </span>
          
        </div>
      </header>
      </>
  );
}

export {Header}