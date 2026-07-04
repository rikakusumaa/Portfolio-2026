import Slideshow from "./Slideshow";
import GridBackground from "./Grid";

export default function Overview () {
    return (
        <section id="overview" className="relative overflow-hidden">
            <GridBackground className="fixed inset-0 -z-10 h-full w-full"></GridBackground>
            <div className="flex px-10 pt-10">
                <h1 className="text-[35px]">Overview</h1>
                <p className="text-[12px] px-1 pt-2 font-extralight text-gray-400">(Previous Project)</p>
            </div>
            <div>
                <Slideshow></Slideshow>
            </div>
        </section>
    )
}