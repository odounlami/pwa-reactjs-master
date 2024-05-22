import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRouter from './Pages/public/PublicRouter';
import axios from 'axios';
import { AuthContext } from './helpers/appContext';

function App() {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState([]);

    const userInfo = async () => {
        if (localStorage.getItem('token')) {
            try {
                const response = await axios.get('http://localhost:8000/api/user', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUser(response.data.data); // Mettre à jour l'utilisateur
                setLogged(true); // Définir logged à true si l'utilisateur est récupéré avec succès
            } catch (err) {
                console.error(err);
            }
        }
    };

    useEffect(() => {
        userInfo();
    }, []);

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            console.log('Données utilisateur chargées :', user);
        }
    }, [user]);

    useEffect(() => {
        console.log('Logged state has changed:', logged);
    }, [logged]);

    return (
        <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<PublicRouter />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
