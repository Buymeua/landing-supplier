import {Button} from "react-scroll";

export default function PageNotFound() {
    return (
        <div className={''}>

            <div className=" w-full px-16 md:px-0  flex items-center justify-center">
                <div
                    className=" flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                    <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Page Not
                        Found</p>
                    <p className="text-[#BBBBBC] mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could
                        not be found.</p>
                    <a href="#">
                        <Button>

                        </Button>

                    </a>
                </div>
            </div>
        </div>
    );
}
