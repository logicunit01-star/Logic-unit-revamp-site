import React, { ChangeEvent } from "react";

interface InputFieldProps {
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type = "text", value, onChange }) => {
    return (
        <div className="relative">
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label}
                className="peer w-full border-b-2 border-gray-300 bg-transparent 
                    py-3 text-brand-dark focus:outline-none focus:border-brand-primary"
            />

            <label
                htmlFor={name}
                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 
                   top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary 
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                   peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
    );
};

export default InputField;
