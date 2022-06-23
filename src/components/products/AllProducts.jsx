import React, { useEffect, useState } from "react";
import services from "../../services/Service";
import {
  Container,
  Row,
  Col,
  Stack,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function AllProducts() {
  // *****************************      Store State using a useState hook             *******************************//
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([])
  useEffect(() => {
    // **************************       Axios Get All Request                            *****************************//

    services
      .getAllProducts()
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].rating.rate)
        setRatings(response.data.rat)
        setProducts(response.data);

      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  // *****************************   Declare the maximu height for images and the max length for text descriptions ******//
  const MAX_LENGTH = 21;
  const Max_Height = '100px';

  return (
    <React.Fragment>
      <div className="container-fluid row justify-content-center gx-2  ">
        {/* <div class='col'></div> */}
        {products.map((product) => (
          <div
            key={product.id}
            className="  col-lg-3 col-sm-6  col-md-4 align-self-end my-1 gx-3 border "
            style={{ margin: "15px 10px" }}
          >
            <div className=" gx-5   p-3">
              <img
                src={product.image}
                alt="image"
                className=""
                style={{ height: "100px", width: "100px" }}
              />
              <br />
              <br />
              <div className="">
                {product.title.length > MAX_LENGTH ? (
                  <div>
                    {/********* check title character and limit it to max_length declared above the jsx  ***********/}

                    {`${product.title.substring(0, MAX_LENGTH)}...`}
                    <div>
                      <br />
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        $ {product.price}
                      </p>
                      <button style={{}}>View</button>{" "}
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>{product.title}</p>
                    <br />
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      $ {product.price}
                      
                    </p>{product.rating.count}
                    <br/>
                   
                    <button style={{}}>View</button>
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
