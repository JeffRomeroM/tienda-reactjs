import { useState } from "react";
import './Form.css'
import 'animate.css';
import { postProduct } from "../../api/products.api";

export const ProductForm = ({
  setShowForm,
  fetchProducts,
}: {
  setShowForm: (value: boolean) => void;
  fetchProducts: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    user_id: "",
    categoria_id: "",
    proveedor_id: "",
  });

  const onChange = (e: any) => {
    const newState = {
      [e.target.name]: e.target.value,
    };

    setForm({ ...form, ...newState });
  };



  const onSubmit = (e:any) => {
    setIsLoading(true);
    e.preventDefault();

    postProduct({ ...form }).then((resp) => {
      setIsLoading(false);
      setShowForm(false);
      fetchProducts();
    });
  };

  return (
    <div className="container animate__animated animate__slideInLeft">

      <form onSubmit={onSubmit} className="container--form">

        <h2>Nuevo producto</h2>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Nombre del producto 
          </label>
          <input
            value={form.name}
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <input
            value={form.description}
            onChange={onChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Pega el enlace de la imagen"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            value={form.price}
            onChange={onChange}
            type="number"
            className="form-control"
            id="price"
            name="price"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            value={form.stock}
            onChange={onChange}
            type="number"
            className="form-control"
            id="stock"
            name="stock"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="user_id" className="form-label">
            ID Usuario
          </label>
          <input
            value={form.user_id}
            onChange={onChange}
            type="number"
            className="form-control"
            id="user_id"
            name="user_id"
          />

          {/* <select name="tags" id="tags" multiple onChange={onChangeSelect}>
            <option value="smart">Smart</option>
            <option value="phones">phones</option>
            <option value="promo">promo</option>
            <option value="summer">Summer</option>
            <option value="tech">tech</option>
          </select> */}
        </div>

        <div className="container--form-input">
          <label htmlFor="categoria_id" className="form-label">
            ID Categoría
          </label>
          <input
            value={form.categoria_id}
            onChange={onChange}
            type="number"
            className="form-control"
            id="categoria_id"
            name="categoria_id"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="proveedor_id" className="form-label">
            ID Proveedor
          </label>
          <input
            value={form.proveedor_id}
            onChange={onChange}
            type="number"
            className="form-control"
            id="proveedor_id"
            name="proveedor_id"
          />
        </div>


        

        <div className="container--form-input">
        <input
          type="submit"
          value={isLoading ? "Guardando..." : "Guardar"}
          disabled={isLoading}
        />

        <button onClick={() => setShowForm(false)} className="btn-cancelar">Cancelar</button>
        </div>

        
      </form>
    </div>
  );
};
