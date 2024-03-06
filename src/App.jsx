import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import HomePage from './components/HomePage.jsx';
import { Routes, Route, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}
const NotFound = () => <h1> 404 Page Not Found</h1>;

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  console.log(document.cookie)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={ <LoginForm/>} />
          <Route path="game" element={<HomePage />} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
      {/* {showLoginForm ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegisterForm onToggleForm={toggleForm} />
      )} */}
    </div>
    // <div>
    //   <HomePage />
    // </div>

  );
}

export default App;
