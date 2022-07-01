import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext';
import {FaShoppingCart} from 'react-icons/fa'


export default function ProCarts() {
    const { showCart, cartItems, showHideCart, removeItem } =useContext(CartContext)


  return (
    <div>
        {showCart && (<div>
            <div>
                <i onclick={showHideCart}><FaShoppingCart/></i>

            </div>
            <div>
                {/* check length and map through */}
                {
                    cartItems.length === 0 ? (
                        <div>
                            <h2>Your Cart is Empty</h2>
                        </div>
                    ):(
                        <div>
                            <ul>
                                {/* map through  */}
                                {
                                    cartItems.map((item) => (
                                        <div key={item.id}>
                                            <p>{item.title}</p>
                                            <p>{item.price}</p>
                                            <button className='CartItem__button' onClick={() => removeItem(item._id)}>
        Remove
      </button>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
            <div>
                <p>Total:</p>
                {cartItems.reduce((amount, item) => item.price + amount, 0)
                }
            </div>
        </div>)}
    </div>
  )
}
