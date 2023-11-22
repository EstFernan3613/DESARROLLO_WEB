import React, { useState } from 'react'
import { UserContext } from '../contexts/UserContext'

const user = {}

export const UserProvider = ({ children }) => {


    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}