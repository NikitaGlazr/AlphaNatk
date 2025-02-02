import React from 'react';
import collegeIcon from '../assets/miniIconNatk.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/login');
    };

    return (
        <header className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-space-between w-full">
                    <div className="header-content">
                        <img src={collegeIcon} alt="College Icon" className="h-8 w-8 mr-2" />
                        <div className="">НАТК</div>
                    </div>
                    <Button
                        text="Выйти"
                        backgroundColor="bg-red-500"
                        textColor="text-white"
                        onClick={handleGoToLogin}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
