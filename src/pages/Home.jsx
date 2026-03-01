import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";



export default function Home(){
    const products=getProducts();
    return (

        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">
                    ShopSky
                </h1>
                <p className="home-subtitle">Discover Your Vision</p>
            </div>
            <div className="container">
                <h1 className="page-title"> Our Porducts</h1>
                <div className="product-grid">
                    {products.map((product)=>(
           <ProductCard product={product} key={product.id}/>

                    ))}
                </div>
            </div>
        </div>
    );
}