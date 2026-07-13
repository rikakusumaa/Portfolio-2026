import "@/app/globals.css";
import GridBackground from "@/app/components/Grid";
import { projects } from "@/app/data/project";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";

export default function ProjectsExplainer () {
    return (
        <section className="relative overflow-hidden pb-10">
            <Header></Header>
            <div className="fixed inset-0 -z-10 h-full w-full">
                <GridBackground></GridBackground>
            </div>
            
            <div className="flex pt-30 px-10">
                <h1 className="text-[35px]">Projects</h1>
                <p className="text-[12px] px-1 pt-2 font-extralight text-gray-400">(002)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pt-10">
                {projects.map((project) => (
                <ProjectCard key={project.slug} {...project}></ProjectCard>
                ))}
            </div>
        </section>
    );
}