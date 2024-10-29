import OrderInfoCard from "./OrderInfoCard";
import IntegrationCard from "./IntegrationCard";
import ReferalCard from "./ReferalCard";

export default function MainSection() {

    return (
        <div className={'max-w-[1096px] m-auto'}>
            <div className={'flex gap-[30px]'}>
            <OrderInfoCard />
                <div className={'flex flex-col gap-[30px]'}>
                <div className={'flex gap-[30px]'}>
                    <IntegrationCard />
                    <ReferalCard />
                </div>
                </div>
            </div>
        </div>
    );
}
