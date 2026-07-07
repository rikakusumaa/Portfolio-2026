"use client";
import { useState } from "react";
import GridBackground from "./Grid";
import Image from "next/image";
import profile from "../images/profile.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import ContactDialog from "./ContactDialog";

export default function About () {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="about" className="relative overflow-hidden pb-10">
            <GridBackground className="fixed inset-0 -z-10 h-full w-full"></GridBackground>
            <div className="flex px-10 pt-10">
                <h1 className="text-[35px]">About Me</h1>
                <p className="text-[12px] px-1 pt-2 font-extralight text-gray-400">(001)</p>
            </div>
            
            <div className="flex flex-col lg:flex-row px-10 pt-10 gap-10 lg:gap-60 col-span-2 justify-between items-center lg:items-start">
                <div className="shrink-0">
                    <Image 
                    src={profile}
                    alt=""
                    width={400}
                    height={550}
                    className="object-cover">
                    </Image>
                </div>

                <div>
                    <p className="font-extralight mb-4 text-[15px]">I am a recent graduate specializing in Mechanical Design and Construction, with a strong foundation in mechanical design, structural analysis, and manufacturing processes. Throughout my academic journey, I developed both technical expertise and practical problem-solving skills through coursework and hands-on projects.</p>
                    <p className="font-extralight my-4 text-[15px]">Beyond academics, I actively participated in student organizations and had the opportunity to serve as President, where I strengthened my leadership, communication, and decision-making abilities. This experience taught me how to collaborate effectively within diverse teams while also leading initiatives to achieve shared objectives.</p>
                    <p className="font-extralight my-4 text-[15px]">I am a highly motivated, adaptable, and detail-oriented individual with strong time management and analytical skills. Eager to begin my professional career in the industrial sector, I am committed to continuously learning, taking on new challenges, and contributing positively through both my technical knowledge and collaborative mindset.</p>
                    <a href="#" className="inline-flex items-center gap-2 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsContactOpen(true);
                        }}>
                        Contact <IoIosArrowRoundForward size={30} />
                    </a>
                    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}></ContactDialog>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row px-10 lg:px-40 pt-10 lg:gap-60 col-span-2">
            <div className="flex-1">
                <div className="my-10">
                <div className="inline-flex gap-20">
                    <h1 className="font-extralight text-[12px]">001</h1>
                    <div>
                        <h2>Education</h2>
                        <div className="mt-5">
                            <p className="font-thin text-[13px]">2021 - 2025</p>
                            <p className="font-extralight text-[15px]">Politeknik Negeri Bandung</p>
                            <p className="font-extralight text-[15px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> GPA 3.11 / 4.0</p>
                            <p className="font-extralight text-[15px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> Redesigning P-ELCAR V2 Electric Vehicle for Ergonomic and Geometric Optimization Based on the KMLI Regulations</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="inline-flex gap-20">
                    <div>
                        <h1 className="font-extralight text-[12px]">002</h1>
                    </div>
                    <div>
                        <h2>Certification</h2>
                        <div className="mt-5">
                            <p className="font-extralight text-[15px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> CSWA - Solidworks</p>
                            <p className="font-extralight text-[15px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> CSWP - Solidworks</p>
                            <p className="font-extralight text-[15px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> Building Mechanical Works Supervisor - BNSP</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="my-10">
                <div className="inline-flex gap-20">
                    <h1 className="font-extralight text-[12px]">003</h1>
                    <div>
                        <h2>Working Experience</h2>
                        <div className="mt-5">
                            <div className="mb-5">
                                <p className="font-thin text-[13px]">January 2026 - Present</p>
                                <p className="font-regular text-[15px]">Research & Development</p>
                                <p className="font-extralight text-[15px]">Groza Indonesia / Denpasar, Bali</p>
                            </div>

                            <div>
                                <p className="font-thin text-[13px]">July 2024 - October 2024</p>
                                <p className="font-regular text-[15px]">Mining Support Division</p>
                                <p className="font-extralight text-[15px]">PT. Kaltim Prima Coal</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="inline-flex gap-20">
                    <h1 className="font-extralight text-[12px]">004</h1>
                    <div>
                        <h2>Other Experience</h2>
                        <div className="mt-5">
                            <div className="mb-5">
                                <p className="font-thin text-[13px]">January 2023 - June 2024</p>
                                <p className="font-regular text-[15px]">General Manager</p>
                                <p className="font-extralight text-[15px]">Electric Vehicle Polban</p>
                                <p className="font-thin text-[13px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> 1st Place Time Attack Electric Vehicle at Inter-Uni Electric Vehicle Competition held by PUPR Ministry</p>
                                <p className="font-thin text-[13px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> 1st Place Slalom Category KMLI (Kompetisi Mobil Listrik Indonesia)</p>
                                <p className="font-thin text-[13px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> 2nd Place Acceleration Category KMLI (Kompetisi Mobil Listrik Indonesia)</p>
                                <p className="font-thin text-[13px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> 2nd Place Brake Testing Category KMLI (Kompetisi Mobil Listrik Indonesia)</p>
                                <p className="font-thin text-[13px] flex items-start"><MdArrowRight className="inline-block align-middle mr-2 shrink-0" /> 3rd Place Incline Power Category KMLI (Kompetisi Mobil Listrik Indonesia)</p>
                            </div>

                            <div className="mb-5">
                                <p className="font-thin text-[13px]">May 2023 - June 2024</p>
                                <p className="font-regular text-[15px]">Techincian Staff</p>
                                <p className="font-extralight text-[15px]">FABLAB Polban</p>
                            </div>

                            <div>
                                <p className="font-thin text-[13px]">November 2024 - February 2025</p>
                                <p className="font-regular text-[15px]">PSDM Staff</p>
                                <p className="font-extralight text-[15px]">HMM Polban</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </div>

        </section>
    )
}