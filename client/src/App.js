import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login'
// eslint-disable-next-line
import Register from './components/Register'
import Users from './components/Users'

function App() {
  return (
    // <div className="App">
    <>
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={Users} path="/" />
    </>
  );
}

export default App;
