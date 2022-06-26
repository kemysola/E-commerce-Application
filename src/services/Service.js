import axios from '../http-common';

const getAllProducts = (data) =>{
    return axios.get("products", data)
}


const getProductsById = async (id) => { 
    return await axios.get(`products/${id}`);
};

const updateProduct = async (id, data) => {
    return await axios.put(`products/${id}`, data);
}  

const addProduct = data => { // register new staff
    return axios.post("products", data);
};



export default {
    getAllProducts,
    getProductsById,
    updateProduct
};
