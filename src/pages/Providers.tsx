import Hero from "../components/Hero";
import { providersConfig} from "../config-driven/hero";

export default function Providers() {

    return (
        <>
            <Hero props={providersConfig}/>
        </>
    );
}
