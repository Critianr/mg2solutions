import hdlogo from '../assets/mdmlogo.png';
import menuimg from '../assets/menu.svg';

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
          <span className='menu'><img src={menuimg} alt="" /></span>
        </div>
      </header>
      </>
  );
}

export {Header}