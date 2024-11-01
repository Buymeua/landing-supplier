import Hero from "../components/Hero";
import { providersConfig} from "../config-driven/hero";
import OptimizationData from "../components/sections/OptimizationData";

export default function Providers() {

    return (
        <>
            <Hero props={providersConfig}/>
            <OptimizationData />

        </>
    );
}
