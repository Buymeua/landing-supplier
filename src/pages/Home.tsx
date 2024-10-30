import Hero from "../components/Hero";
import MainSection from "../components/MainSection";
import {mainConfig} from "../config-driven/hero";

export default function Home() {

    return (
        <>
            <Hero props={mainConfig}/>
            <MainSection/>
        </>
    );
}
