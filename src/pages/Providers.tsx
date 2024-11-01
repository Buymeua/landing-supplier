import Hero from "../components/Hero";
import { providersConfig} from "../config-driven/hero";
import OptimizationData from "../components/sections/OptimizationData";
import FeatureHighlight from "../components/sections/FeatureHighlight";

export default function Providers() {

    return (
        <>
            <Hero props={providersConfig}/>
            <OptimizationData />
            <FeatureHighlight />
        </>
    );
}
