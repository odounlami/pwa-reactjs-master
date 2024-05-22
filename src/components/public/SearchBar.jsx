// import ListClubs from "./AddClub";
import { useContext } from "react"
import { AuthContext } from "../../helpers/appContext"

export default function SearchBar({style}){
    const {user} = useContext(AuthContext)
    // for( let club in ListClubs){

    // }
    
   return <div>
         <h1 className="welcolme"> Welcolme <span style={style}>{`${user.nom} ${user.prenom}`}</span></h1> 
         <div className="divParentSearchBar">
                <input type="text" name="InputClub" id="InputClub" className="divSearchBar" placeholder="Search for events or clubs"/>
                <button className="btn btn-warning btnSearchBar" style={{color:"black"}}>Search</button>
        </div>
    </div>

}