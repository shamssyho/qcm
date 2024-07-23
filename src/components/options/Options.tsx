import React from 'react';

interface OptionProps {
    color: string;
    response: boolean;
    text: string;
    onClick: () => void;
    isMultiple: boolean;
}


const Option: React.FC<OptionProps> = ({ color, response, text, onClick, isMultiple }) => {
    return (
        <div
            className={`flex items-center justify-between p-4 mb-2 border rounded cursor-pointer ${response ? 'bg-green-100' : 'bg-white'} ${color}`}
            onClick={onClick}
        >
            <span>{text}</span>
            {isMultiple ? (
                <input type="checkbox" className="form-checkbox h-5 w-5" checked={response} readOnly />
            ) : (
                <input type="radio" className="form-radio h-5 w-5" checked={response} readOnly />
            )}
        </div>
    );
};

export default Option;