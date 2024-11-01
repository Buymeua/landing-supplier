import SectionHeader from "./SectionHeader";
import { FeatureIcon } from "../../icons";
import { motion } from "framer-motion";


export default function Services() {


    return (
        <div className='max-w-[1096px] pb-10 overflow-hidden sm:overflow-visible sm:h-auto  mt-[-100px] sm:mt-[-80px] m-auto'>
            <SectionHeader
                title='Зв’язок з іншими сервісами'
            />

            <div className='mt-20 px-4 md:px-0 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            </div>
        </div>
    );
}
