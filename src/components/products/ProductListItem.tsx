
import { deleteProduct } from '../../api/products.api';
import './styles.css'

interface ProductListItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  user_id: number;
  categoria_id: number;
  proveedor_id: number;
}

export const ProductListItem = ({
  id,
  name,
  description,
  price,
  stock,
  user_id,
  categoria_id,
  proveedor_id,

}: ProductListItemProps) => {
 
  
  return (
    <div key={id} className="containerP--product" >
      <p>{name}</p>
      <p>Decripción: {description}</p>
      <p>Precio: {price}</p>
      <p> Stock: {stock}</p>
      <p> Usuario: {user_id}</p>
      <p> Categoria: {categoria_id}</p>
      <p>Proveedor: {proveedor_id}</p>
      <div>
        
        <button onClick={deleteProduct}>Eliminar</button>
      </div>
      
    </div>
  );
};
