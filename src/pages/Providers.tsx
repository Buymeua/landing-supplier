import Hero from "../components/Hero";
import {providersConfig} from "../config-driven/hero";
import OptimizationData from "../components/sections/OptimizationData";
import FeatureHighlight from "../components/sections/FeatureHighlight";
import {useScroll , motion} from "framer-motion";
import PreviewFunc from "../components/sections/PreviewFunc";
import Integrations from "../components/sections/Integrations";

export default function Providers() {
    const {scrollYProgress} = useScroll();

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{scaleX: scrollYProgress}}
            />
            <Hero props={providersConfig}/>
            <OptimizationData/>
            <FeatureHighlight/>
            <PreviewFunc />
            <Integrations />

        </>
    );
}
