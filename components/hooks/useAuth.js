import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";



export const useAuth = ()=> {
    const {auth, setAuth} = useContext(AuthContext);

    return {auth, setAuth}
}