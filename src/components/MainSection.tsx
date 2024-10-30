import OrderInfoCard from "./OrderInfoCard";
import IntegrationCard from "./IntegrationCard";
import ReferalCard from "./ReferalCard";
import StatisticCards from "./StatisticCards";

export default function MainSection() {

    return (
        <div className={'max-w-[1096px] overflow-hidden sm:overflow-visible sm:h-auto mt-12 sm:mt-0 m-auto'}>
            <div className={'flex px-4 sm:px-o flex-col items-center lg:items-start lg:flex-row gap-4 md:gap-[30px]'}>
                <OrderInfoCard/>
                <div className={'flex flex-col w-full sm:w-auto gap-[30px]'}>
                    <div className={'flex flex-col md:flex-row gap-4 md:gap-[30px]'}>
                        <IntegrationCard/>
                        <ReferalCard/>
                    </div>
                    <StatisticCards/>
                </div>
            </div>
        </div>
    );
}
