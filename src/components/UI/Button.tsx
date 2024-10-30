export default function Button({ children }) {
    return (
        <button className="px-7 py-2 bg-white w-full sm:w-auto text-black font-medium rounded-full shadow-md border-4 border-gray-400 hover:bg-gray-200 hover:scale-[0.994] hover:opacity-80 transition-transform transition-opacity duration-300 ease-in-out">
            {children}
        </button>
    );
}
