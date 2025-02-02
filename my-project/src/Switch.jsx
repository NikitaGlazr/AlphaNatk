import React from 'react';

const Switch = ({ text, checked, onChange, backgroundColor, textColor, position }) => {
    return (
        <div className={`flex items-center ${position}`}>
            <label className={`mr-2 ${textColor}`}>{text}</label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default Switch;
