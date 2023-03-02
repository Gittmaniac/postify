import { Link } from "react-router-dom"
import { auth } from "../config/firebase";
import { Auth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);
    
    const logOut = async() => {
       await signOut(auth);
    };

    return ( <div className="navbar">
        <h1> postify </h1>
        <div className="links">
        <Link to={"/"}>HOME</Link>
       { !user ?  < Link to={"/login"}>LOGIN</Link> :
        <Link to={"/createpost"}>CREATE POST</Link> }
        </div>
        <div className="user">
            { user && (
            <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} width="100" height="100" />
            <button onClick={logOut} className="logoutbutt"> Log Out</button>
            </>
            )}</div>
    </div>

    );
};