import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {useWindowSize} from "usehooks-ts";
import {useLocation} from "react-router-dom";
import {useEffect, useRef} from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isTablet() {
    const {width = 0} = useWindowSize()
    if (width < 768) return true
    return false
}


export function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPathRef = useRef(pathname);

    useEffect(() => {
        if (pathname !== prevPathRef.current) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            prevPathRef.current = pathname;
        }
    }, [pathname]);

    return null;
}
