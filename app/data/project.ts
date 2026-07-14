import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import pelcarv3_1 from "../images/p-elcar-v3/1.png";
import pelcarv3_2 from "../images/p-elcar-v3/2.png";
import pelcarv3_3 from "../images/p-elcar-v3/3.png";
import pelcarv3_4 from "../images/p-elcar-v3/4.png";
import pelcarv3_5 from "../images/p-elcar-v3/5.png";
import pelcarv3_6 from "../images/p-elcar-v3/6.png";
import certifpelcv3_1 from "../images/p-elcar-v3/7.png";
import certifpelcv3_2 from "../images/p-elcar-v3/8.png";
import certifpelcv3_3 from "../images/p-elcar-v3/9.png";
import certifpelcv3_4 from "../images/p-elcar-v3/10.png";
import mesinsangrai1 from "../images/mesin-sangrai/1.png";
import mesinsangrai2 from "../images/mesin-sangrai/2.png";
import mesinsangrai3 from "../images/mesin-sangrai/3.png";
import mesinsangrai4 from "../images/mesin-sangrai/4.png";
import pelcarv2_1 from "../images/p-elcar-v2/1.png";
import pelcarv2_2 from "../images/p-elcar-v2/2.png";
import pelcarv2_3 from "../images/p-elcar-v2/3.png";
import pelcarv2_4 from "../images/p-elcar-v2/4.png";
import pelcarv2_5 from "../images/p-elcar-v2/5.png";
import pelcarv2_6 from "../images/p-elcar-v2/6.png";
import pina1 from "../images/pin-a/1.png";
import pina2 from "../images/pin-a/2.png";
import pina3 from "../images/pin-a/3.png";
import pina4 from "../images/pin-a/4.png";
import pina5 from "../images/pin-a/5.png";
import pina6 from "../images/pin-a/6.png";
import battery1 from "../images/battery-pack/1.png";
import battery2 from "../images/battery-pack/2.png";
import battery3 from "../images/battery-pack/3.png";
import battery4 from "../images/battery-pack/4.png";

const pelcarv3gallery = [
    pelcarv3_1, pelcarv3_2, pelcarv3_3, pelcarv3_4, pelcarv3_5, pelcarv3_6
]

const pelcarv3certification = [
    certifpelcv3_1, certifpelcv3_2, certifpelcv3_3, certifpelcv3_4
]

const mesinsangraigallery = [
    mesinsangrai2, mesinsangrai3, mesinsangrai4
]

const pelcarv2gallery = [
    pelcarv2_2, pelcarv2_3, pelcarv2_4, pelcarv2_5, pelcarv2_6
]

const pinagallery = [
    pina2, pina3, pina4, pina5, pina6
]

const batterygallery = [
    battery2, battery3, battery4
]

export const projects = [
    {
        slug: "pelcar-v3",
        title: "P-ELCAR V3",
        description: "Electric Vehicle",
        image: image1,
        href: "/projects/pelcar-v3",
        explanation: [
            "As the General Manager of the Automotive Development Team at Politeknik Negeri Bandung (POLBAN), I led the team for approximately one year in the development of P-Elcar V3, a fully electric vehicle designed in accordance with the Kompetisi Mobil Listrik Indonesia (KMLI) regulations.",
            "Throughout the project, I managed the entire vehicle development process, from initial research, concept development, design, and engineering simulations to manufacturing and final assembly. I coordinated cross-functional teams, ensured project milestones were achieved, and facilitated effective collaboration across all stages of development.",
            "This experience allowed me to develop strong technical and leadership skills, including project management, team communication, analytical problem-solving, welding, manufacturing processes, mechanical design, and engineering decision-making.",
        ],

        achievement: [
            "1st Place Slalom Category KMLI",
            "2nd Place Acceleration Category KMLI",
            "3rd Place Incline Power Category KMLI"
        ],

        gallery: pelcarv3gallery,
        certification: pelcarv3certification

    },

    {
        slug: "roaster-machine",
        title: "Roaster Machine",
        description: "3kg Roaster Machine for Peanuts",
        image: mesinsangrai1,
        href: "/projects/roaster-machine",

        explanation: [
            "In this project, I served as the Team Leader of a three-member team responsible for designing and developing a 3 kg capacity peanuts roasting machine.",
            "As the team leader, I oversaw the project from concept to implementation while actively participating in every stage of development. The project began with field observations and interviews with local businesses to understand user requirements and operational challenges. Based on the findings, we conducted extensive research using academic journals and previous studies to establish the project's technical foundation.",
            "During the design phase, I led the development of the machine by translating user needs into engineering specifications and functional requirements. The design was then modeled in SolidWorks, followed by engineering simulations to validate performance before proceeding to fabrication, assembly, and final implementation.",
            "This project strengthened my skills in product development, user-centered design, CAD modeling, engineering analysis, manufacturing, and project leadership."
        ],

        gallery: mesinsangraigallery
    },

    {
        slug: "pelcar-v2",
        title: "P-ELCAR V2",
        description: "Electric Vehicle Re-engineer",
        image: pelcarv2_1,
        href: "/projects/pelcar-v2",

        explanation: [
            "This project was completed as my Final Year Project, focusing on the research, design, and development of an electric vehicle.",
            "The project began with an extensive literature review of previous studies and a comprehensive analysis of existing electric vehicles to identify their limitations and opportunities for improvement. Based on these findings, I developed a design that addressed key shortcomings while meeting the project's performance and engineering objectives.",
            "Following the conceptual design phase, I created detailed 3D CAD models using engineering design software and conducted simulations to evaluate structural integrity and overall performance. After validating the design, the project proceeded to the manufacturing, assembly, and testing stages to bring the vehicle from concept to reality.",
            "Through this project, I gained valuable experience in engineering research, product design, CAD modeling, simulation, manufacturing processes, and problem-solving within the field of electric vehicle development."
        ],

        gallery: pelcarv2gallery
    },

    {
        slug: "a-frame-pin",
        title: "A-Frame Pin Installation Machine",
        description: "Redesigning A-Frame Pin Installation Machine",
        image: pina1,
        href: "/projects/a-frame-pin",

        explanation: [
            "This project was carried out during my internship and was initiated to address a practical challenge faced by mechanics in their daily work.",
            "The original tool was specifically designed for installing A-Frame pins, limiting its functionality to a single application. After observing the workflow and gathering feedback from mechanics, I identified an opportunity to improve the tool by increasing its versatility.",
            "I redesigned and engineered the tool to support the installation of multiple components rather than being limited to A-Frame pins. The development process included analyzing user requirements, generating design concepts, creating 3D CAD models, and refining the design to ensure improved functionality, efficiency, and ease of use in workshop operations.",
            "This project enhanced my skills in user-centered product development, mechanical design, problem-solving, and designing practical engineering solutions based on real-world industrial needs."
        ],

        gallery: pinagallery
    },

    {
        slug: "battery-pack",
        title: "Battery Pack",
        description: "Battery Pack Research & Development",
        image: battery1,
        href: "/projects/battery-pack",

        explanation: [
            "This battery assembly project was developed as part of the Student Entrepreneurship Program (Program Mahasiswa Wirausaha PMW) at Politeknik Negeri Bandung (POLBAN).",
            "The project began with market research to identify customer needs and determine the most suitable battery types for different applications. Based on this research, appropriate battery cells and configurations were selected to balance performance, reliability, and cost-effectiveness.",
            "The project involved battery pack design, cell selection, assembly, and testing to ensure safety and performance. Through this experience, I gained practical knowledge in battery technology, electrical assembly, product development, market analysis, and translating customer requirements into a commercially viable product."
        ],

        gallery: batterygallery
    },

    {
        slug: "project-6",
        title: "Project 6",
        description: "Description for Project 6",
        image: image3,
        href: "projects/project-6",
    }
]