import React, { useState , useEffect } from "react"
import { createProduct } from "../../fetching/products.fetching";
import "./FormularioCrearProducto.css"
const FormularioCrearProducto = () => {
const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigo, setCodigo] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const productData = {
    
      titulo,
      precio,
      stock,
      descripcion,
      codigo,
    };

    try {
      const nuevoProducto = await createProduct(productData);
      
      console.log("Producto creado:", nuevoProducto)
      alert('Producto creado con éxito , recargar la pagina');
      
      setTitulo("");
      setPrecio("");
      setStock("");
      setDescripcion("");
      setCodigo("");
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };  
  return (
    <form   onSubmit={handleSubmit} className="forma" >
      <label >TITULO :</label>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />

      <label>PRECIO :</label>
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />

      <label>STOCK :</label>
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />

      <label>DESCRIPCIÓN :</label>
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />

      <label>CODIGO :</label>
      <input
        type="number"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        required
      />
  
      <button type="submit">Crear Producto</button>
    </form>
  
  );
};

export default FormularioCrearProducto
