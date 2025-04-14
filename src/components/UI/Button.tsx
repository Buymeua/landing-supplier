import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-7 py-2 bg-white w-full sm:w-auto text-black font-medium rounded-full shadow-md border-4 border-gray-400 transition-transform transition-opacity duration-300 ease-in-out
                hover:bg-gray-200 hover:scale-[0.994] hover:opacity-80
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
        >
            {children}
        </button>
    );
}
