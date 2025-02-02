import { useState } from 'react';
import './App.css';
import Footer from "./src/Footer.jsx";
import AuthForm from "./src/AuthForm.jsx";
import Header from "./src/Header.jsx";
import { useNavigate } from 'react-router-dom';


function App() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const handleLogin = (login, password) => {
        // Логика авторизации
        navigate('/home'); // Использовать функцию navigate для перехода на страницу /home
    };


    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h1 className="text-3xl font-bold underline mb-6"></h1>
                    <AuthForm onLogin={handleLogin} />
                </div>
            </main>
        </div>
    );
}

export default App;