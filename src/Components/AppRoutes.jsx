import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { PrivateRoutes } from './PrivateRoutes'
import { UserRoutes } from './UserRoutes'

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={ <LoginPage/>}/>
                <Route path='/*' element={
                    <PrivateRoutes>
                        <UserRoutes/>
                    </PrivateRoutes>
                }/>
            </Routes>
        </>
    )
}