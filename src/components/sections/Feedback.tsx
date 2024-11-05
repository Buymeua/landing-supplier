import React from "react";
import {Customer6} from "../../assets";
import {ArrowIcon} from "../../icons";


export default function Feedback() {
    return (
        <div className="max-w-[1096px] mx-auto px-4 sm:px-0 py-10 mt-12 sm:mt-[120px]">

            <div className={'flex flex-col gap-8'}>
                <h1 className={'text-white text-center text-[60px] font-semibold leading-[72px]'}>
                    Платформа дала змогу економити багато часу та займатись розвитком бізнесу більш активно.
                </h1>
                <div className={'flex flex-row items-center justify-between sm:flex-col gap-6'}>
                    <div className='flex flex-row gap-2 sm:flex-col items-center'>
                        <img className={'w-12 h-12'} src={Customer6}/>
                        <div className={' mb-0 sm:mb-8'}>
                            <h3 className={'text-white text-base'}>Катерина</h3>
                            <h4 className={'text-[#BBBBBC] font-light text-sm'}>Luxury Drop</h4>
                        </div>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <button
                            className={'bg-[#FFFFFF08]  w-[50px] h-[50px] flex justify-center items-center rounded-full'}>
                            <span className={'rotate-180 opacity-20'}>
                            <ArrowIcon color={'#FFFFFF33'}/>
                            </span>
                        </button>
                        <span className={'text-[#BBBBBC] text-sm '}> 1 / 4</span>
                        <button
                            className={'bg-[#FFFFFF08] rounded-full w-[50px] flex items-center justify-center h-[50px]'}>
                                                        <span>
                            <ArrowIcon color={'white'}/>
                                                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
