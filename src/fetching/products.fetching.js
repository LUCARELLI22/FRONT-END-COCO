import { HTTP , URL } from "./http"

const PRODUCTS_ROUTE = '/api/products'
const getProducts = async () => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE)
    return response.productos 
}





const CREATE_PRODUCT_ROUTE = '/api/products'; 
const createProduct = async (productData) => {
    const response = await HTTP.POST(URL.URL_API + CREATE_PRODUCT_ROUTE, productData);
    return response.data;
}




    const DELETE_PRODUCT_ROUTE = '/api/products/:id';
    const deleteProduct = async (productId) => {
        const response = await HTTP.DELETE(URL.URL_API + DELETE_PRODUCT_ROUTE.replace(':id', productId));
        return response.data; 
    }

const UPDATE_PRODUCT_ROUTE = '/api/products/:id';
const updateProduct = async ( productId, productData) => {
    console.log(productData , productId);
if (!productId || !productData) {
        throw new Error('Falta ID de producto o datos de producto');
    }
    const numericProductId = parseInt(productId);
    if (isNaN(numericProductId)) {
        throw new Error('Invalid product ID');
    }  
    const response = await HTTP.PUT(`${URL.URL_API}${UPDATE_PRODUCT_ROUTE.replace( ':id',  productId)}`, productData);
return response.data;
} 




export {getProducts, createProduct, deleteProduct , updateProduct}  
