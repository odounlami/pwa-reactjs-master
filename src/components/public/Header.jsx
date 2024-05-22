import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img7 from "../../images/10.jpg";
import { AuthContext } from "../../helpers/appContext";

const Header = () => {
    const { logged, setLogged, user, setUser} = useContext(AuthContext);
    console.log(logged);
    const navigate = useNavigate();
    const Logout = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            localStorage.removeItem('token');
            setLogged(false);
            setUser([]);
            navigate('/'); // Redirige vers la page d'accueil après déconnexion
          }
        } catch (error) {
          console.error('Erreur lors de la déconnexion :', error);
        }
      };
    return (
    
        <div className="header" style={{ backgroundColor: "var(--blackMarquette)", color: "white" }}>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand navbar-light col-xs-12" style={{ backgroundColor: "var(--blackMarquette)" }}>
                        {/* Part with the smiley and ESGIS text */}
                        <div className="d-flex align-items-center col-md-2">
                            <Link className="navbar-brand" to="#" style={{ color: "white", marginLeft: "20px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow" className="bi bi-emoji-smile" viewBox="0 0 16 16" style={{ marginRight: "10px" }}>
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                </svg>
                                ESGIS
                            </Link>
                            <Link className="nav-link" to="#" style={{ position: "relative" }}>
                                <img src={img7} alt="profil" className="img-fluid profil" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
                                <div style={{ position: "absolute", top: "-5px", right: "-5px", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "green" }}></div>
                            </Link>
                        </div>
                        {/* Other icons */}
                        <div className="col-md-8"></div>
                        <div className="col-md-2" style={{ float: "right" }}>
                            <ul className="navbar-nav ml-auto align-items-center navIcones">
                            <style>
                                {`
                                .nav-link-gold {
                                    color: gold;
                                }

                                .nav-link-gold:hover {
                                    color: #ffd700; /* Une nuance plus claire de doré pour l'effet hover */
                                    text-decoration: underline; /* Soulignement au survol */
                                }
                                `}
                            </style>
                            {logged && user && (
                                <li className="nav-item ms-4">
                                {user.role === 'responsable' ? (
                                    <Link to="/Admin" className="nav-link nav-link-gold mx-2">
                                    Espace responsable
                                    </Link>
                                ) : (
                                    <Link to="/membre" className="nav-link nav-link-gold mx-2">
                                    Espace Membre
                                    </Link>
                                )}
                                </li>
                            )}  
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell iconeNotif" viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gear iconeSetting" viewBox="0 0 16 16">
                                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                        </svg>
                                    </Link>
                                </li>
                                <button className="nav-item" onClick={Logout} >
                                    <Link className="nav-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-x-circle iconeLogout" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </Link>
                                </button>
                               
                            </ul>
                        </div>
                    </nav>
                </div>
                <hr style={{ border: "white 1.5px solid" }} />
            </div>
        </div>
    );
}

export default Header;
