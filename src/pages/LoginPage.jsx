import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { UserProvider } from "../contexts/UserProvider";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onLogin = () => {
        setUser({
            id: 313,
            name: 'Juan Esteban',
            email: 'juanfernandez12@hotmail.com'
        })

        const lasPath = localStorage.getItem('lastPath') || '/';
        navigate(lasPath, { 
          replace: true 
        })
      }   
      
      return (
        <>

            <div>Login Page</div>
            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ () => onLogin() }
            >
                Login
            </button>
        </>
      )
}