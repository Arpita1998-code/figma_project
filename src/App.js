import React from "react";
import Navbar from "./component/inc/Navbar";
import Image from "./component/Image";
import Price from "./component/Price";
import UnderPrice from "./component/UnderPrice";
// import UnderPrice2nd from "./component/UnderPrice2nd";----------
import LatestFeaturs from "./component/LatestFeaturs";
import Net from "./component/Net";
import Contact from "./component/Contact";
function App() {
  return (
    <div>
      <Navbar/> 
      <Image/> 
      <Price/>  
      <UnderPrice/>
      {/* <UnderPrice2nd/>---------- */}
      <LatestFeaturs/>
      <Net/>
      <Contact/>
    </div>
  );
}

export default App;
