// import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RegisterCard from './components/Signup';
import LoginCard from './components/Login';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const login = (credentials) => {
  //   // Add your login logic here
  //   if (credentials.username === 'user' && credentials.password === 'pass') {
  //     setIsAuthenticated(true);
  //   }
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginCard  />} />
        <Route path="/register" element={<RegisterCard />} />
        {/* {isAuthenticated && (
          <Route path="/dashboard" element={<Dashboard />} />
        )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
