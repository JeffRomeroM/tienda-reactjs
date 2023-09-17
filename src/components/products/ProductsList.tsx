import { useEffect, useState } from "react";
import { Product } from "./Product.interfaces";
import './styles.css'
import { ProductForm } from "./ProductForm";
import { ProductListItem } from "./ProductListItem";
import { getProducts } from "../../api/products.api";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  if (products.length === 0) {
    return <div>
      <span className="loader"></span>
      <h1 className="cargando">Cargando los productos</h1>
    </div>;
  }

  return (
    <div>
      {showForm && (
        <ProductForm setShowForm={setShowForm} fetchProducts={fetchProducts} />
      )}

     
      <h1 className="containerT-title">Productos</h1>
        
      <div className="agregar">
      <button onClick={handleClick} >Agregar</button>  
      </div>
      <div className="containerP">
        
          {products.map((product) => (
            <ProductListItem key={product.id} {...product} />
          ))}
      </div>
       
      
    </div>
  );
};
