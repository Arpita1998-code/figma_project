import React from "react";
import './LatestFeaturs.css';

// const box3 = {
//     position: "absolute",
//     top: '90px',
//     width: '50%',
//     color: "white",
//     textShadow: "2px 2px 4px #000000",
//     fontWeight: "bold",
//     fontSize: '35px',
//     padding: '20px',
//     left: '520px',
// }

function LatestFeaturs(){
    return(

        <div>
        <div className="image-container3">
            <img className="container1_image3" src="./image/solar2.jpg" alt="" height={800} width={1519}/>
            {/* <img className="container1_image2" src="./image/carabiner 1FIGMA.jpg" alt="" />
            <img className="container1_image3" src="./image/5575120 3FIGMA.jpg" alt="" /> */}
        </div>

        {/* <div className="image-container2">
            <img className="container2_image4" src="./image/Group 13FIGMA.jpg" alt="" />
            <img className="container2_image5" src="./image/Group 14FIGMA.jpg" alt="" />
            <img className="container2_image6" src="./image/Standard Solar-Style Roof AttachmentsFIGMA.jpg" alt="" />
            <img className="container2_image7" src="./image/Available for sloped or flat roof surfaces with tile, composition shingles, or metal roofingFIGMA.jpg" alt="" />
        </div> */}
    </div>

        // <div>
        // <div className="parent1">
        //     <img className="img1" src="./image/solar2.jpg" alt="" />
        //     <img className="img2" src="./image/Latest Features Figma.jpg" alt=""/>
        //     <img className="img3" src="./image/Mask groupFIGMA-2.jpg" alt=""/>
        //     <img className="img4" src="./image/Group28Figma.jpg" alt="" height={480} />

        //     <div style={box3}>
        //         <p>Solar GolfNet Features</p>
        //     </div>
        // </div>
        // </div>
    )
}
export default LatestFeaturs;