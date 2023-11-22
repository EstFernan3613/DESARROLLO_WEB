import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../contexts/UserProvider';
import { LoginPage } from '../pages/LoginPage';
import Logged from './Logged';
import { PrivateRoutes } from '../Components/PrivateRoutes';

function MainApp() {
  return (
    <UserProvider>
      <Router>
        <Routes path="/login" component={LoginPage} />
        <PrivateRoutes path="/dashboard" component={Logged} />
        {/* other routes */}
      </Router>
    </UserProvider>
  );
}

export default MainApp;