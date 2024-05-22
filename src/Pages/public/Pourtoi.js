import React from "react";
import img1 from "../../images/1.png";
import img2 from "../../images/4.jpg";
import img3 from "../../images/11.jpg";
import img4 from "../../images/12.jpg";

const Pourtoi = () => {
    return(
        <div className="Pourtoi">
            <h1>It's my Home Page</h1>
            <div className="container">
                    <div className="row">
                             <div className="col-xs-12">
                                <div className="row" >
                                        <div className="col-md-3 Pimg ">
                                                <img src={img1} alt="" className="img-fluid clubsRecommandation"/>        
                                                <h3>technology club</h3>
                                                <h5>2 events this week</h5>
                                        </div>
                                        <div className="col-md-3 Pimg ">
                                                <img src={img2} alt="" className="img-fluid clubsRecommandation"/>
                                                <h3>Design club</h3>
                                                <h5>1 event this week</h5>
                                        </div>
                                        <div className="col-md-3 Pimg ">
                                                <img src={img3} alt="" className="img-fluid clubsRecommandation"/>
                                                <h3>Yoga club</h3>
                                                <h5>3 events this week</h5>
                                        </div>
                                        <div className="col-md-3 Pimg ">
                                                <img src={img4} alt="" className="img-fluid clubsRecommandation"/>
                                                <h3>Book club</h3>
                                                <h5>1 events this week</h5>
                                        </div>
                                </div>
                            </div>

                    </div>
            </div>
        </div>
    )
}

export default Pourtoi;