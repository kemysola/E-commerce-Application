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
      <div class="container mt-2">
        <div class="card-group">
          <div class="card">
            <img class="" src={shoe1} alt="Card image cap" height="230px" />
            <h5 class="card-title text-center">Heels</h5>

          </div>
          <div class="card">
            <img
              class="card-img-top"
              src={shoe2}
              alt="Card image cap"
              height="230px"
            />
              <h5 class="card-title text-center">Heels</h5>

          </div>
          <div class="card">
            <img class="" src={heels} alt="Card image cap" height="230px" />
            <h5 class="card-title text-center">Sneakers</h5>

          
          </div>
          <div class="card">
            <img class="" src={heels} alt="Card image cap" height="230px" />
            <h5 class="card-title text-center">Heels</h5>

            
          </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default CardsCategory;
