import React, { useEffect, useState, useContext } from "react";
import Service from "../../services/Service";
import { FiEdit } from "react-icons/fi";
import Navbar from "../../navbar/Navbar";
import CartContext from "../../context/cart/CartContext";

import {
  Container,
  Row,
  Col,
  Stack,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

function AllProducts() {
  //********************************* Cart CONTEXT ************************* */
  const { addToCart } = useContext(CartContext);

  // *****************************      Store State using a useState hook             *******************************//
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([]);
  var history = useHistory();
  const id = useParams();
  useEffect(() => {
    //**************************       Axios Get All Request                            *****************************//

    Service.getAllProducts()
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].rating.rate);
        setRatings(response.data.rat);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  // **********  Declare the maximu height for images and the max length for text descriptions ******//
  const MAX_LENGTH = 20;
  const Max_Height = "100px";

  return (
    <React.Fragment>
      <div className="card-group container-fluid row justify-content-center gx-2 bg-light pt-3 ">
        <products />
        {/* <div class='col'></div> */}
        {products.map((product) => (
          <div
            key={product.id}
            className="  col-lg-3 col-sm-6  col-md-4 align-self-end my-1 gx-2 border "
            style={{ margin: " 5px" }}
          >
            <div
              className=" gx-1 p-2"
              style={{ height: "380px", width: "200px" }}
            >
              <img
                src={product.image}
                alt="image"
                className=""
                height="200px"
                width="150px"
              />
              <br />
              <br />
              <div className="">
                {product.title.length > MAX_LENGTH ? (
                  <div>
                    {/********* check title character and limit it to max_length declared above the jsx  ***********/}

                    <p>{`${product.title.substring(0, MAX_LENGTH)}...`}</p>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        $ {product.price}
                      </p>
                      {/* <button style={{}}>View</button>{"" } */}

                      <span
                        className="icon__wrapper"
                        style={{
                          background: "black",
                          color: "white",
                          padding: "5px",
                          margin: "0 10px",
                        }}
                        onClick={() =>
                          (window.location.href = `/view_products/${product.id}`)
                        }
                      >
                        view
                      </span>
                      <button onClick={() => addToCart(product)}>Add</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <p>{product.title}</p>
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        $ {product.price}
                      </p>
                      {/* <button style={{}}>View</button>{""} */}
                      <span
                        className="icon__wrapper"
                        style={{
                          background: "blue",
                          color: "white",
                          padding: "5px",
                        }}
                        onClick={() =>
                          (window.location.href = `/view_products/${product.id}`)
                        }
                      >
                        view
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default AllProducts;
