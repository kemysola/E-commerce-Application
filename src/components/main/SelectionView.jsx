import React from "react";
import { Stack } from "react-bootstrap";
import discount from "../../data/discount.png";
import CardsCategory from "./CardsCategory";

function SelectionView() {
  return (
    <React.Fragment>
      <br />
      <br />
      <div className="row my-3">
        <div className="col my-3 pt-3">
          <h1 className="text-center">SALES OFF!</h1>
          <h4
            className="text-center text-danger"
            style={{ fontWeight: "bold" }}
          >
            Up To 30%
          </h4>
          <p className="pr-3" style={{ margin: "15px", padding: "15px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <div className="d-flex justify-content-around">
            <button className="btn-dark btn py-2">Shop Now</button>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <img src={discount} className="rounded-circle img-fluid" />
          </div>
        </div>
      </div>
      <CardsCategory />
    </React.Fragment>
  );
}

export default SelectionView;
