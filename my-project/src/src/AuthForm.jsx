import React, { useState } from 'react';
import Button from '../Button.jsx';
import InputField from '../InputField.jsx';

const AuthForm = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(login, password);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
         <h2 className="text-2xl font-bold mb-4">Авторизация</h2>
            <label htmlFor="login">Логин</label>
            <div className="mb-4">
                <InputField
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    backgroundColor="bg-white"
                    textColor="text-black"
                />
            </div>
            <label htmlFor="password">Пароль</label>
            <div className="mb-4">
                <InputField
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    backgroundColor="bg-white"
                    textColor="text-black"
                />
            </div>
            <Button
                text="Войти"
                backgroundColor="bg-blue-500"
                textColor="text-white"
                type="submit"
            />
        </form>
    );
};

export default AuthForm;