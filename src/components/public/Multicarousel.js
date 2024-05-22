import React from "react";
import '@/Pages/styles/Accueil.css'
const MultiCarousel = ({ images, titles, events }) => {
    return (
        <div className="lightbox" data-mdb-lightbox-init>
            <div className="multi-carousel" data-mdb-multi-carousel-init>
                <div className="multi-carousel-inner row">
                    {images.map((image, index) => (
                        <div key={index} className="multi-carousel-item col-3">
                            <div className="row">
                                <div className="col">
                                    <img
                                        src={image}
                                        data-mdb-img={image}
                                        alt={titles[index]}
                                        className="w-100"
                                    />
                                    <h3>{titles[index]}</h3>
                                    <h5>{events[index]}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MultiCarousel;
