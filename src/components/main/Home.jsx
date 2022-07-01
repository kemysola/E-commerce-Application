import React from "react";
import Navbar from "../../navbar/Navbar";
import MainHero from "./MainHero.jsx";
import AllProducts from "../products/AllProducts";
import wristwatch from "../../data/wristwatch.jpg";
import fash1 from "../../data/fash1.jpg";
import Login from "../auth/Login";
import Navigation from "../Navigation";
function Home() {
  return (
    <React.Fragment>
      <Navigation />

      {/* <Login /> */}
      {/* <Navbar/> */}
      {/* <MainHero/> */}

      {/* <AllProducts/> */}

      <br />
      <br />
      {/* <AllProducts /> */}
    </React.Fragment>
  );
}

export default Home;
