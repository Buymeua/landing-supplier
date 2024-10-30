import { useState, useEffect } from "react";

export function useTypingEffect(text, speed = 100) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + (text[index] || ""));
            index++;
            if (index >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayedText;
}
