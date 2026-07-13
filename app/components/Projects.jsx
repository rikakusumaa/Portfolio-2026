import { image } from "motion/react-client";
import GridBackground from "./Grid";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/project";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Projects () {
    return (
        <section id="projects" className="relative overflow-hidden pb-20">
            <GridBackground className="fixed inset-0 -z-10 h-full w-full"></GridBackground>
            <div className="flex pt-10 px-10 items-center justify-between">
                <div className="flex">
                    <h1 className="text-[35px]">Projects</h1>
                    <p className="text-[12px] px-1 pt-2 font-extralight text-gray-400">(002)</p>
                </div>

                <div>
                    <a href="/projects" className="inline-flex items-center gap-2 text-15 font-light relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">View More<IoIosArrowRoundForward size={20} /></a>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pt-10">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} {...project}></ProjectCard>
                ))}
            </div>
        </section>
    )
}