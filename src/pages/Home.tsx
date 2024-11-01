import Hero from "../components/Hero";
import Main from "../components/sections/Main";
import {mainConfig} from "../config-driven/hero";

export default function Home() {
    return (
        <>
            <Hero props={mainConfig}/>
            <Main/>
        </>
    );
}
