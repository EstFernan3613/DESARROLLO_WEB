import React from 'react';
import { UserProvider } from './contexts/UserProvider';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <UserProvider>
      <LoginPage />
    </UserProvider>
  );
}

export default App;