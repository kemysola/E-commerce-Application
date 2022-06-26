import React from "react";
import heels from "../../data/heels.jpg";
import heels1 from "../../data/heels1.jpg";
import coat from "../../data/coat.jpg";
import wristwatch from "../../data/wristwatch.jpg";
import shoe1 from "../../data/shoe1.png";
import shoe2 from "../../data/shoe2.png";
import shoe3 from "../../data/shoe3.png";






function CardsCategory() {
  return (
    <React.Fragment>
      <div class="container-fluid mt-2">
        <div class="card-group">
          <div class="card">
            <img class="" src={shoe1} alt="Card image cap" height="230px" />
            <h5 class="card-title text-center">Heels</h5>

            {/* <div class="card-body"> */}
            {/* <h5 class="card-title">Heels</h5> */}
            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
            {/* </div> */}
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src={shoe2}
              alt="Card image cap"
              height="230px"
            />
              <h5 class="card-title text-center">Heels</h5>

            {/* <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div> */}
          </div>
          <div class="card">
            <img class="" src={shoe3} alt="Card image cap" height="230px" />
            <h5 class="card-title text-center">Sneakers</h5>

            {/* <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div> */}
          </div>
          <div class="card">
            <img class="" src={heels} alt="Card image cap" height="230px" />
            <h5 class="card-title text-center">Heels</h5>

            {/* <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div> */}
          </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default CardsCategory;
