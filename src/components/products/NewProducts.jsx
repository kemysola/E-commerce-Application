import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Service from "../../services/Service";

function NewProducts(props) {
  const [product, setProduct] = useState({})
  const {id} = useParams();

  const retrieveProducts = async() => {
    await Service.getProductsById(id).then((res) => {
      console.log(res.data)
      setProduct(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }

  useEffect( () =>{
    retrieveProducts()
    console.log(id)
    
  },[id])
  
 

  

  return (
    <div className="container">
      <div class="row align-items-start container gx-5">
    <div class="col">
      <img src={product.image} alt='image' height='350px'/>
      <p style={{fontWeight: 'bold', margin:'5px'}}> PRICE :₦{product.price}</p>
    </div>
    <div class="col">
    <h1 className="text-danger">hello you {id}</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
    </div>
    </div>
    
  )
}

export default NewProducts
