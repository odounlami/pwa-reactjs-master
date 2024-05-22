import React, { useState, useEffect } from "react";
import img1 from "../../images/1.png";
import img2 from "../../images/4.jpg";
import img3 from "../../images/11.jpg";
import img4 from "../../images/12.jpg";
import MultiCarousel from "./Multicarousel";
import { PublicationForm } from "./Publish";

const Accueil = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [images, setImages] = useState([img1, img2, img3, img4]);
    const [titles, setTitles] = useState(["Technology Club", "Design Club", "Yoga Club", "Book Club"]);
    const [events, setEvents] = useState(["2 events this week", "1 event this week", "3 events this week", "1 event this week"]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setImages((prevImages) => {
                    const [first, ...rest] = prevImages;
                    return [...rest, first];
                });
                setTitles((prevTitles) => {
                    const [first, ...rest] = prevTitles;
                    return [...rest, first];
                });
                setEvents((prevEvents) => {
                    const [first, ...rest] = prevEvents;
                    return [...rest, first];
                });
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div className="Accueil">
            <h1>It's my Home Page</h1>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {/* Utilisez le composant Carousel avec les données */}
                        <MultiCarousel images={images} titles={titles} events={events} />
                    </div>
                </div>
            </div>
            <PublicationForm/>
        </div>
    );
};



export default Accueil;
