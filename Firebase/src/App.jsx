import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Login from './Login';
import Signup from './Signup';
import Nav from './Nav';
import Updown from './Updown';
import BMI from './BMI';
import Expense from './Expense';
import Stop from './Stop';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/nav" /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/nav" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/nav" element={user ? <Nav /> : <Navigate to="/login" />} />
        <Route path="/game" element={user ? <Updown /> : <Navigate to="/login" />} />
        <Route path="/tracker" element={user ? <Expense /> : <Navigate to="/login" />} />
        <Route path="/BMI" element={user ? <BMI/> : <Navigate to="/BMI"/>}></Route>
        <Route path="/Stop" element = {user ? <Stop/>: <Navigate to = "/Stop"/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
