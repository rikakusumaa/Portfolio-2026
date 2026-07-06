import { image } from "motion/react-client";
import GridBackground from "./Grid";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";

import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";

const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Description for Project 1",
        image: image1,
        href: "#",
    },

    {
        id: 2,
        title: "Project 2",
        description: "Description for Project 2",
        image: image2,
        href: "#",
    },

    {
        id: 3,
        title: "Project 3",
        description: "Description for Project 3",
        image: image3,
        href: "#",
    }
]

export default function Projects () {
    return (
        <section id="projects" className="relative overflow-hidden pb-10">
            <GridBackground className="fixed inset-0 -z-10 h-full w-full"></GridBackground>
            <div className="flex pt-10 px-10">
                <h1 className="text-[35px]">Projects</h1>
                <p className="text-[12px] px-1 pt-2 font-extralight text-gray-400">(002)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pt-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project}></ProjectCard>
                ))}
            </div>

            {/* <div className="flex flex-col lg:flex-row px-10 pt-10 gap-10 col-span-2 justify-between items-center">
                <div className="flex-1">
                    <div>Project 1</div>
                </div>
                
                <div className="flex-1">
                    <div>Project 2</div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row px-10 pt-10 gap-10 col-span-2 justify-between items-center">
                <div className="flex-1">
                    <div>Project 3</div>
                </div>
                
                <div className="flex-1">
                    <div>Project 4</div>
                </div>
            </div> */}
        </section>
    )
}