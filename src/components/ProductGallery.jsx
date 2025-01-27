import ProductCard from './ProductCard';
import NikeAirMax from '../assets/nike-airMax.png';
import AdidasUltraBoost from '../assets/adidas-ultraboost.png';
import PumaRSX from '../assets/puma-rsx.png';
import NewBalance574 from '../assets/newBalance-574.png';

function ProductGallery() {
    const products = [
        { 
            id: 1,
            name: "Nike Air Max",
            price: 120, 
            available: true,
            picture: NikeAirMax
        },
        { 
            id: 2, 
            name: "Adidas UltraBoost", 
            price: 180, 
            available: false,
            picture: AdidasUltraBoost
        },
        { 
            id: 3, 
            name: "Puma RS-X", 
            price: 110, 
            available: true,
            picture: PumaRSX
        },
        { 
            id: 4, 
            name: "New Balance 574", 
            price: 100, 
            available: true,
            picture: NewBalance574
        },
      ];
    return (
        <div className="grid grid-cols-4 gap-4 p-2">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ProductGallery;