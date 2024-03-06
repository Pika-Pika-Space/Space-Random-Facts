import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
// import HomePage from './components/HomePage.jsx';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  console.log(document.cookie)

  return (
    <div className="App">
      {showLoginForm ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegisterForm onToggleForm={toggleForm} />
      )}
    </div>
    // <div>
    //   <HomePage />
    // </div>

  );
}

export default App;
