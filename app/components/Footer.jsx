import { IoIosArrowRoundUp } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="flex items-center absolute w-full text-white pt-10 pb-3 px-10 justify-between">
            <p className="font-extralight text-[10px] lg:text-sm">Presented by Nizar F.</p>
            <a href="#" className="inline-flex items-center gap-2 font-light text-[10px] lg:text-sm">Back to top <IoIosArrowRoundUp /></a>
            <p className="font-extralight text-[10px] lg:text-sm">&copy; 2026</p>
        </footer>
    )
}