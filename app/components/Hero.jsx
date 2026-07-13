import Gradient from "./Gradient";
import { IoIosArrowRoundDown } from "react-icons/io";


export default function Hero () {
    return (
        <section className="relative overflow-hidden">
            <Gradient></Gradient>
            <div className="min-h-screen grid grid-cols-2 grid-rows-[3fr_1fr] gap-4 pt-60 lg:pt-30 px-10 mx-auto max-w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center col-span-2 lg:justify-between">
                    <h1 className="text-[48px] font-semibold">Portfolio</h1>
                    <div className="-mt-5">
                        <h1 className="text-[48px] font-semibold text-right">Mechanical</h1>
                        <h2 className="text-[22px] font-light lg:text-right text-red-600 -mt-3">Design & Construction</h2>
                    </div>
                </div>

                <div className="flex items-end col-span-3 justify-between pb-12">
                    <div>
                        <p className="font-extralight">Presented by</p>
                        <p className="font-medium -mt-1">Nizar Farhannurwafi A.</p>
                    </div>
                    <p className="font-extralight hidden md:block">2026</p>
                    <a href="#overview">
                        <IoIosArrowRoundDown size={28} />
                    </a>
                </div>
            </div>
        </section>
    )
}