import { Dropdown } from "bootstrap";
import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
function Navbar() {
  const { cartItems, showHideCart, removeItem } = useContext(CartContext);

  return (
    <div className="container" style={{}}>
      <nav class="navbar navbar-expand-lg  navbar-light ">
        <a
          className="navbar-brand "
          href="/"
          style={{
            fontWeight: "bold",
            paddingRight: "5px",
            marginRight: "5px",
          }}
        >
          FEIY'S
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav " >
            <li class="nav-item active" >
              <a class="nav-link " href="/home" style={{ fontWeight: "bold" , padding:'0 .5rem !important'}}>
                Home
              </a>
            </li>
            <li class="nav-item" >
              <a
                class="nav-link"
                href="/products"
                style={{ fontWeight: "bold" }}
              >
                Products
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/" style={{ fontWeight: "bold",}}>
                Category
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/new_arrivals"
                style={{ fontWeight: "bold" }}
              >
                New-Arrivals
              </a>
            </li>

            {/* <li className='cart__icon'> */}
            {/* <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          >+</i> */}
            {/* {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>

            </div>
          )}
        </li> */}
          </ul>
          <div className="mr-3 " >
            <button
              type="button"
              class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split mr-3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">
                Cart <span>{cartItems.length}</span>
              </span>
            </button>
            <div class="dropdown-menu" style={{ width: "250px" }}>
              {cartItems.map((items) => (
                <div key={items.id} className="row gx-1">
                  <div class="col my-1">
                    <div className="row ml-1 ">
                      <div className="col-6 ">
                        <img src={items.image} width="50px" />
                        <p>{items.title}</p>
                      </div>
                      <div className="col-6">
                        <p className="text-center">$ {items.price}</p>
                        {/* <button className='CartItem__button' onClick={() => removeItem(items._id)}>
        Remove
      </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <p>
                Total :${" "}
                {cartItems.reduce((amount, item) => item.price + amount, 0)}
              </p>

              <button className="btn-light bg-dark text-light">
                View Cart
              </button>
            </div>
          </div>
        </div>
        {/* <Dropdown>{cartItems.length}</Dropdown> */}
      </nav>
    </div>
  );
}

export default Navbar;
