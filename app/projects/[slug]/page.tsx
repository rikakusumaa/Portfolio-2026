import { projects } from "@/app/data/project";
import { notFound } from "next/navigation";
import GridBackground from "@/app/components/Grid";
import Header from "@/app/components/Header";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Header></Header>
      <GridBackground></GridBackground>
      <div className="px-10 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row lg:gap-2">
          <h1 className="text-[35px]">
            {project.title}
          </h1>

          <p className="text-[14px] font-extralight text-gray-400">
          ({project.description})
          </p>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row pt-5 gap-5 lg:gap-10 col-span-2 justify-between items-center lg:items-start">
          <div className="relative w-[400px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[700px] lg:h-[550px] overflow-hidden shrink-0">
            <Image
                src={project.image}
                alt=""
                fill
                className="object-cover">
              </Image>
          </div>
          
          <div>
          <div>
            {project.explanation?.map((item, index) => (
              <p className="font-extralight mb-4 text-[15px]" key={index}>{item}</p>
            ))}
          </div>

          <div>
            {project.achievement && (
              <>
              <p className="font-regular text-[15px]">Achievement:</p>
              {project.achievement?.map((item, index) => (
                <p className="font-extralight text-[15px]" key={index}>{item}</p>
              ))}
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}