import Button from "../components/UI/Button";

export default function PageNotFound() {
    return (
        <div className={''}>

            <div className=" w-full px-2 sm:px-16 md:px-0  flex items-center justify-center">
                <div
                    className=" flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg sm:shadow-2xl">
                    <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wide text-[#bbbbbc]">4<span className={'text-[#ab0000]'}>0</span>4</p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Сторінка не знайдена</p>
                    <p className="text-[#BBBBBC] mt-4 pb-4  text-center">Вибачте, сторінку, яку ви шукаєте, не вдалося знайти.</p>
                    <a className='mt-3' href="/">
                        <Button>
                            Головна
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
