interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    width?: string | number;
    variant?: 'filled' | 'outline';
    className?: string;
}

export default function Button({
                                   children,
                                   onClick,
                                   disabled,
                                   width,
                                   variant = 'filled',
                                   className = '',
                               }: ButtonProps) {
    const baseClasses = `
    px-7 py-2 font-medium rounded-full shadow-md border-2 transition-transform transition-opacity duration-300 ease-in-out
    hover:scale-[0.994] hover:opacity-80
    ${width ? '' : 'w-full sm:w-auto'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

    const filled = `bg-white text-black border-gray-400 hover:bg-gray-200`;
    const outline = `bg-transparent text-white border-white hover:bg-white/10`;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={width ? { width } : undefined}
            className={`${baseClasses} ${variant === 'filled' ? filled : outline} ${className}`}
        >
            {children}
        </button>
    );
}
