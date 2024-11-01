// ScrollToTop.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
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
