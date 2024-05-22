import React from "react";
import myImage from '../../images/7.jpg';
// eslint-disable-next-line no-unused-vars
import FImg from '../../Pages/styles/FImg.css';
const FirstImage =()=>{
    return(
           
                <div className="fImage">
                        <img src={myImage} alt="" className="img-fluid"/>
                </div>
    )
}

export default FirstImage;