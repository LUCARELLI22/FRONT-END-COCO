import React, { useState, useEffect  } from 'react';
import { updateProduct } from '../../fetching/products.fetching';
import './FormularioEditarProductos.css';
const FormularioEditarProducto = ({ productId, productoInicial, setEditMode, setProducts }) => {
    const [productoEditado, setProductoEditado] = useState({ ...productoInicial });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoEditado({ ...productoEditado, [name]: value });
    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        try 
        {   
            await updateProduct(productId , productoEditado);
            setEditMode(false); 
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === productId ? { ...product, ...productoEditado } : product
                )
            );
            alert('Producto actualizado exitosamente');
        } catch (error) {}
        alert('Producto actualizado exitosamente');
    }; 

    return (
        <form  className='editar' onSubmit={handleSubmit}>
            <h2>Editar Producto</h2>
            <label htmlFor="id">ID:</label>
            <input type="text" name="id" value={productoEditado.id} onChange={handleChange} readOnly />
            <label htmlFor="titulo">Título:</label>
            <input type="text" name="titulo" value={productoEditado.titulo} onChange={handleChange} />
            <label htmlFor="descripcion">Descripción:</label>
            <textarea name="descripcion" value={productoEditado.descripcion} onChange={handleChange} />
            <label htmlFor="precio">Precio:</label>
            <input type="number" name="precio" value={productoEditado.precio} onChange={handleChange} />
            <label  htmlFor="stock">Stock  : </label>
            <input  type="number" name="stock" value={productoEditado.stock} onChange={handleChange} />
            <button  type="submit"  >Guardar cambios</button>
        </form>
    );
};

export default FormularioEditarProducto;
