import React, { useState } from 'react';
import '../App.css';
import Footer from "../src/Footer.jsx";
import Header from "../src/Header.jsx";
import AuthForm from "../src/AuthForm.jsx";
import { useNavigate } from 'react-router-dom';
import HomePage from "../src/HomePage.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (login, password) => {
        if (login === 'Admin' && password === 'pswrd') {
            setIsAuthenticated(true);
            navigate('/home');
        } else {
            alert('Неверный логин или пароль');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <div className="inner-padding">
                        <h1 className="text-3xl font-bold underline mb-6"></h1>
                        {isAuthenticated ? (
                            <HomePage onLogout={handleLogout}/>
                        ) : (
                            <AuthForm onLogin={handleLogin}/>
                        )}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;