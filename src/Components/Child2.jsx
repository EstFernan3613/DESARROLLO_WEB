import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Child2 = () => {
    const { setUser } = useContext(UserContext);

    const onLogin = () => {
        setUser({
            id: 313,
            name: "Juan Esteban",
            email: "juan_est.fernandez@uao.edu.co"
        })
    }

    return (
        <>
            <div>Child Component 2</div>
            <button
                className="btn btn-primary"
                onClick={() => onLogin()}
            >
                Set User Info
            </button>
        </>
    )
}