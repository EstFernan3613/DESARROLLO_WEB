import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const LoginPage = () => {
  const { user, login, logout } = useContext(UserContext);

  const handleLogin = () => {
    const fakeUser = { name: 'Juan Esteban Fernandez Cuervo' };
    login(fakeUser);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};