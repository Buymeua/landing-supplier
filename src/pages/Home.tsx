import Hero from "../components/Hero";
import Main from "../components/sections/Main";
import {mainConfig} from "../config-driven/hero";
import PhoneForm from "../components/forms/PhoneForm";

export default function Home() {
    return (
        <>
            <Hero props={mainConfig}/>
            <PhoneForm />
            <Main/>
        </>
    );
}
