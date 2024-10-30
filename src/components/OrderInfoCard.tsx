import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {CartIcon} from "../icons";

const OrderInfoCard = () => {
    const data = [
        {label: 'Прибуток', value: '85 320 UAH', color: 'bg-[#FF5029]', shadow: 'shadow-orange-500'},
        {label: 'Витрати', value: '0 UAH', color: 'bg-[#61FF29]', shadow: 'shadow-green-500'},
        {label: 'Кількість замовлень', value: '248', color: 'bg-[#29FFFF]', shadow: 'shadow-cyan-500'},
        {label: 'Сума відмов', value: '1890 UAH', color: 'bg-[#EE29FF]', shadow: 'shadow-purple-500'},
    ];

    const [cardVisible, setCardVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(Array(data.length).fill(false));
    const cardRef = useRef<any>(null);
    const itemRefs = useRef<any>(data.map(() => React.createRef()));

    useEffect(() => {
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCardVisible(true);
                    }
                });
            },
            {threshold: 0.05}
        );

        if (cardRef.current) {
            cardObserver.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                cardObserver.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const itemObservers = itemRefs.current.map((ref:any, index:number) => {
            const itemObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setItemsVisible((prev) => {
                                const updated = [...prev];
                                updated[index] = true;
                                return updated;
                            });
                            itemObserver.unobserve(entry.target);
                        }
                    });
                },
                {threshold: 0.05}
            );

            if (ref.current) {
                itemObserver.observe(ref.current);
            }

            return itemObserver;
        });

        return () => {
            itemObservers.forEach((observer:any, index:number) => {
                if (itemRefs.current[index].current) {
                    observer.unobserve(itemRefs.current[index].current);
                }
            });
        };
    }, [itemsVisible]);

    return (
        <motion.div
            ref={cardRef}
            className=" md:w-auto lg:min-w-[256px] relative z-10 px-4 py-6 bg-[#121314] flex flex-col gap-4 rounded-3xl text-white border border-[#373737]"
            initial={{opacity: 0, x: -100}}
            animate={cardVisible ? {opacity: 1, x: 0} : {opacity: 0, x: -100}}
            transition={{duration: 0.7}}
        >
            <CartIcon/>
            <div className='flex flex-col gap-1'>
                <h2 className="text-lg text-[#F0F0F0] font-medium">Оформлення замовлень</h2>
                <p className="text-[#787878] font-light text-base">
                    Автопідрахунок виплат, який не дасть вам помилитись
                </p>
            </div>

            <div className="space-y-3">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        ref={itemRefs.current[index]}
                        className="flex cursor-pointer border border-[#373737] items-center justify-between p-3 rounded-lg bg-[#1E1F1F]"
                        initial={{opacity: 0, y: 10}}
                        whileHover={{
                            scale: 0.98,
                            transition: {duration: 0.4},
                        }}
                        animate={itemsVisible[index] ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
                        transition={{duration: 0.6, delay: itemsVisible[index] ? index * 0.2 : 0}}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`w-1 h-11 ${item.color} ${item.shadow} rounded-full`}></span>
                            <div className={'flex flex-col'}>
                                <span className={'font-normal text-[13px] text-[#F0F0F0]'}>{item.label}</span>
                                <span className="text-[#787878] text-sm font-normal">{item.value}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default OrderInfoCard;
