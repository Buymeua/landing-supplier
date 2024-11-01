import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {useWindowSize} from "usehooks-ts";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isTablet() {
    const {width = 0} = useWindowSize()
    if (width < 768) return true
    return false
}