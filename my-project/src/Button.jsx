import React from 'react';

const Button = ({ onClick, backgroundColor, textColor, text, disabled, position }) => {
    return (
        <button
            className={`px-4 py-2 rounded ${backgroundColor} ${textColor} ${position} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            onClick={onClick}
            disabled={disabled}
            style={{ transition: 'transform 0.2s', transform: 'scale(1)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {text}
        </button>
    );
};

export default Button;
