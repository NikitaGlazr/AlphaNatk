import React from 'react';

const InputField = ({ onChange, value, backgroundColor, textColor, placeholder, disabled, position, type }) => {
    return (
        <input
            className={`px-4 py-2 rounded ${backgroundColor} ${textColor} ${position} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            style={{ transition: 'transform 0.2s', transform: 'scale(1)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
    );
};

export default InputField;
