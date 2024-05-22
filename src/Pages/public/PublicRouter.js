import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom"
import { PublicLayout } from "./PublicLayout"
import Pourtoi from "./Pourtoi";
import Forums from "./Forums";
import Clubs from "./Clubs";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "../../helpers/appContext";
import Accueil from "../../components/public/Accueil";



const PublicRouter = () => {
    const {logged, user} = useContext(AuthContext)
    return ( 
        <div>
            <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route index element={<Login/>}/>
                <Route element={<PublicLayout/>}>
                    <Route path="/pourtoi" element={logged && user.role==='membre' ? <Pourtoi/>: <Accueil/>}/>
                    <Route path="/clubs" element={<Clubs/>}/>
                    <Route path="/forums" element={<Forums/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default PublicRouter;