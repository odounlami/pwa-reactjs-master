import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/public/Navbar";
import Header from "../../components/public/Header";
import FirstImage from "../../components/public/FirstImage";
import Recommandations from "../../components/public/Recommandation";
import SearchBar from "../../components/public/SearchBar";

export const PublicLayout = () => {
    return ( 
        <div className="PublicLayout">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-column align-items-center"> {/* Utilisation de flexbox pour aligner les éléments au centre */}
                            <FirstImage/>
                            <SearchBar  style={{color: "red"}}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar/>
                    </div>
                </div>                               
                <div className="row">
                    <div className="col-md-3">
                        <Recommandations/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Outlet/>          
                    </div>
                </div>
            </div>
        </div>
    );
};
