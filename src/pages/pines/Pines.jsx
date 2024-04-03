import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DesktopNavigation } from "../../components/DesktopNavigation";
import { ProductCard } from "../../components/cardproducto/ProductCard";
import data from '../../pages/home/data.json';
function Pines() {
    return (
    <div className="pines">
      <div className="wrp-pages">
        <DesktopNavigation />
          <div className="gallery-page">
          <Header />
          <h2>Pines</h2>
          <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
           "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
           <div className="wrp-product"> 
          {data.pines.map(product => (
          
          <ProductCard 
                key={product.id}
                title={product.title}
                img={product.img}
                detailsProduct={product.detailproduct} // Ajusta la key según tu estructura JSON
                description={product.description}
          />
          
          ))}
          </div>
          <Footer />
          </div>
        </div> 
    </div>
    );
  }
  
  export {Pines};