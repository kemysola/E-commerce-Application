import React from "react";
import { Stack } from "react-bootstrap";
import fash1 from "../../data/fash1.jpg";
import wristwatch from "../../data/wristwatch.jpg";
import coat from "../../data/coat.jpg";
import {BsMinecart} from 'react-icons/bs'
import { minWidth } from "@mui/system";
import SelectionView from "./SelectionView";
import discount from '../../data/discount.png';


function MainHero() {
  return (
    <React.Fragment className="mt-3">
      <div className="row ">
        <div className="col ">
          <br/>
          <div className="container-fluid d-flex justify-content-center">
            <img
              src={fash1}
              alt=""
              className=" "
              width="500px"
              height="450px"
            />
          </div>
        </div>
        <div className="col" style={{margin:'10px'}}>
          <div className="container-fluid">
            <Stack style={{ fontWeight: "bold" }} >
              <h1>Fashion Up Your Look</h1>
            </Stack>
            <div style={{ fontWeight: "light", fontSize: "18px" }}>
              <p>Every Purchase would be made with pleasure.</p>
            </div>
            <Stack>
              <h4 className="">Clothing Categories</h4>
            </Stack>
            <div className="container pt-3 pb-2 bg-light text-success rounded">
              <div className="row mt-2">
                <div className="col">
                  <div class="card" >
                    <img
                      class="card-img-top "
                      height='115px'
                      src={coat}
                      alt="Card image cap"
                      
                    />
                    
                    <div class="card-body">
                      <p class="card-text text-right">FEIY'S Beauty Coats and Jackets</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card">
                    <img
                      class="card-img-top"
                      height='115px'
                      src={wristwatch}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-text text-center">FEIY'S Wrist Watches</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={wristwatch}
                      height='115px'
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-text text-center">FEIY'S Wrist Watches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Stack>
              <h5 className="text-center">At FEIY'S, Buying is made Simple.</h5>
              <br></br>
              {/* <div>
                <img src={fash1} className='img-circle rounded-circle mr-2' height='100px' width='100px'/> 
                <img src={fash1} className='img-circle rounded-circle mr-2' height='100px' width='100px'/> 
                <img src={fash1} className='img-circle rounded-circle' height='100px' width='100px'/>


              </div> */}
              <div className="btn btn-dark text-light " style={{marginRight:'16px', marginLeft:'16px'}}>Start Shopping <span> <BsMinecart/></span></div>
            </Stack>
          </div>
        </div>

        
        
      </div>
      
<br/>
<br/>
<SelectionView/>
    </React.Fragment>
  );
}

export default MainHero;
