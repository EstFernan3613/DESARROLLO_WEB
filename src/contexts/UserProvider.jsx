import React, { useReducer } from 'react';
import { UserContext, initialState } from '../contexts/UserContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (user) => dispatch({ type: 'LOGIN', payload: user });
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <UserContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};