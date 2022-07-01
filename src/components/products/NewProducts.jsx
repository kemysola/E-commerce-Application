import React, { useRef, useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import Service from "../../services/Service";
import CartContext from "../../context/cart/CartContext";
import ProCarts from "../productCarts/ProCarts";



function NewProducts(props) {
  const {addToCart} = useContext(CartContext)
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
  
  console.log(product)
 

  

  return (
    <div className="container">
      <div class="row align-items-start container gx-5">
    <div class="col">
      <img src={product.image} alt='image' height='350px'/>
      <p style={{fontWeight: 'bold', margin:'5px'}}> PRICE :₦{product.price}</p>
      <button onClick={() => addToCart(product) } >Add</button>
										

    </div>
    <div class="col">
    {/* <h1 className="text-danger">hello you {id}</h1> */}
      <p style={{fontWeight:'bold'}}>{product.title}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product) 										
} >Add</button>
    </div>
    </div> 
<ProCarts/>
    </div>
    
  )
}

export default NewProducts
