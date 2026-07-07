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
        title: "P-ELCAR V3",
        description: "Electric Vehicle",
        image: image1,
        href: "#",
    },

    {
        id: 2,
        title: "Roaster Machine",
        description: "3kg Roaster Machine for Peanuts",
        image: image2,
        href: "#",
    },

    {
        id: 3,
        title: "P-ELCAR V2",
        description: "Electric Vehicle Re-engineer",
        image: image3,
        href: "#",
    },

    {
        id: 4,
        title: "A-Frame Pin Installation Machine",
        description: "Redesigning A-Frame Pin Installation Machine",
        image: image3,
        href: "#",
    },

    {
        id: 5,
        title: "Project 5",
        description: "Description for Project 5",
        image: image3,
        href: "#",
    },

    {
        id: 6,
        title: "Project 6",
        description: "Description for Project 6",
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
        </section>
    )
}