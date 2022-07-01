import { useContext } from "react";
import "./Cart.css";
import CartContext from "../../context/cart/CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" , background:'red'}}>
            <p
              style={{ cursor: "pointer", color:'black' }}
              aria-hidden='true'
              onClick={showHideCart}
            >0-2</p>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItems key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {cartItems.reduce((amount, item) => item.price + amount, 0)
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;