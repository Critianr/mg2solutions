import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DesktopNavigation } from "../../components/DesktopNavigation";
import { ProductCard } from "../../components/cardproducto/ProductCard";
function Medallas() {
    return (
      <div className="medallas">
        
      <div className="wrp-pages">
      <DesktopNavigation />
        <div className="gallery-page">
        <Header />
        <h2>MEDALLAS</h2>
        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
         "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
        <ProductCard />
        <Footer />
        </div>
      </div>
    </div>
    );
  }
  
  export default Medallas;