import React from "react";
import './Image.css';

const box = {
    position: "absolute",
    top: '200px',
    width: '80%',
    color: "white",
    textShadow: "2px 2px 4px #000000",
    fontWeight: "bold",
    fontSize: '50px',
    padding: '20px',
    left: '60px'
}

const box1 = {
    position: "absolute",
    top: '400px',
    width: '80%',
    color: "white",
    textShadow: "2px 2px 4px #000000",
    fontWeight: "bold",
    fontSize: '20px',
    padding: '20px',
    left: '60px'
}

function Image(){
    return(
        <div className="parent">
            <img className="image1" src="./image/Rectangle 1FIGMA.jpg" alt="" height={700}/>
            <img className="image2" src="./image/Mask groupFIGMA-1.jpg" alt="" height={700}/>
            <img className="image3" src="./image/Frame 1FIGMA.jpg" alt="" />
            <div style={box}>
                <p>Solar GolfNet Protecting</p> 
                <p>your solar investment</p>
            </div>
            <div style={box1}>
                <p>Solar GolfNet from SunnyCal Solar are the perfect</p> 
                <p>addition to tour solar system investment.</p>
            </div>
        </div>
    )
}
export default Image;