import { useRef } from "react";
import Hero from "../components/Hero";
import Main from "../components/sections/Main";
import { mainConfig } from "../config-driven/hero";
import UsernameForm from "../components/forms/UsernameFrom"

export default function Home() {
    const usernameFormRef = useRef<{ focusInput: () => void  } | null>(null);
    const formScrollRef = useRef<HTMLDivElement | null>(null);

    const handleFocus = () => {
        formScrollRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
            usernameFormRef.current?.focusInput();
        }, 400);
    };

    return (
        <>
            <Hero handleFocus={handleFocus}  props={mainConfig} />
            <div className={'w-fit m-auto'} ref={formScrollRef}>
                <UsernameForm ref={usernameFormRef} />
            </div>
            <Main />
            <button onClick={handleFocus} className="...">
                <span>App Store</span>
            </button>
        </>
    );
}
