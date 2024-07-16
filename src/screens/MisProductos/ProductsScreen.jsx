import React, {useEffect , useState} from 'react' 
import './ProductsScreen.css'
import { getProducts , updateProduct } from '../../fetching/products.fetching'
import FormularioCrearProducto from '../../screens/crearProducto/FormularioCrearProducto'
import FormularioEditarProducto from '../../screens/edicionProductos/FormularioEditarProducto'

const ProductsScreen = () => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState (true)
const [editMode, setEditMode] = useState(false);
const [editingProduct, setEditingProduct  ] = useState(null);

useEffect(
    () =>{
    getProducts()
    .then((products)=> {
        console.log(products)  
        setLoading(false)
        setProducts(products)
    })
    .catch((error)=>{
        console.error("algo ocurrio mal")
    })
    },
    []
)



const handleEditProduct = (productId) => {
if (typeof productId !== 'number') {
console.error('productId debe ser un número');
return ;  
}
setEditMode(true);
setEditingProduct(productId);
};

const handleCancelEdit = ( ) => {
    setEditMode(false);
    setEditingProduct(null);
};

const handleUpdateProduct = async (updatedProduct ) => {
    try {
        await updateProduct(editingProduct, updatedProduct);
        
        const updatedProducts = products.map((product) =>
        
            product.id === editingProduct ? { ...product, ...updatedProduct } : product 
            
        );
        setProducts(updatedProducts);
        setEditMode(false);
        setEditingProduct(null);
        alert('Producto actualizado exitosamente');
    } catch (error)
    {}
};
async function deleteProduct(productId) {
    const response = await fetch(`http://localhost:3030/api/products/${productId}`, {
    method: 'DELETE',
    })
    if (response.ok) {
    console.log(`Product with ID ${productId} deleted`);
    setProducts(products.filter((product) => product._id !== productId));
    alert('Producto eliminado con éxito , recargar la pagina');
    }

    const data = await response.json()
    console.log(data)
} 

return (
    <div className='products-screen'>


<h1>GESTION DE PRODUCTOS </h1>
{ <FormularioCrearProducto/> } 

    <h1 className='title'>LISTA DE PRODUCTOS DISPONIBLES</h1>
    <a className='bthome' href="/home">HOME</a>
    {loading ? <p>cargando productos...</p> 
    : 
    <div className='products'>

    {products.map(product  =>{
    return (
        <div  key={product.id}>
        <label htmlFor="">TITULO : </label><p>{product.titulo}</p>
        <label htmlFor="">DESCRIPCION :</label><p>{product.descripcion}</p>
        <label htmlFor="">PRECIO :</label><span>{product.precio}</span>
        <label htmlFor="">STOCK : </label><span>{product.stock}</span>
    <button className='btn' onClick={() => deleteProduct(product.id)}>Eliminar</button> 
        <button className='btn' onClick={() => handleEditProduct(product.id)}>Editar</button>
        </div>
        )

} )}
</div> 
}
{editMode && (
                <FormularioEditarProducto
                productId={editingProduct}
                productoInicial={products.find((product) => product.id === editingProduct)}
                onUpdate={handleUpdateProduct}
                onCancel={handleCancelEdit}
            />
                
            )}

    </div>

)
}

export default ProductsScreen
