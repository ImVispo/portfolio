import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  SiteIcon,
  TwitterIcon,
  LockIcon,
  ClickIcon,
  TypescriptIcon,
  ReactIcon,
  NextIcon,
  ChromeIcon,
  AntDesignIcon,
  JavascriptIcon,
  MongoIcon,
  DiscordIcon,
  TailwindIcon,
  PostgresIcon,
  CSharpIcon,
  CIcon,
  UnityIcon,
  ExternalLink,
} from "../components/Icons";
import Technology from "../components/Technology";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
  console.log("Home");
  return (
    <div className="font-inter text-white">
      <Intro />
      <Projects />
    </div>
  );
};

const Intro = () => {
  console.log("Intro");
  return (
    <div className="px-5 md:px-10 py-5 flex flex-col justify-center items-center md:flex-row md:py-20">
      <img className="rounded-md" src="/images/me.jpg" alt="me" />
      <div className="mt-5 md:mt-0 md:ml-5">
        <p className="text-4xl md:text-5xl font-semibold flex">
          Nickholas <p className="text-[#FB441A] ml-2">Boboaca</p>
        </p>
        <p className="text-[#667085] pt-2 max-w-4xl">
          Full stack developer passionate about creating scalable and efficient
          systems. I am highly motivated, team-oriented, and eager to learn new
          technologies. I have 4+ years of experience in developing web,
          desktop, and serverside applications, and recently started exploring
          game development.
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  console.log("Projects");
  const projectsBig = [
    {
      name: "Vision",
      description: "A platform for viewing NFT collection rarity rankings.",
      isPrivate: true,
      link: "https://rarity.visiontools.io/",
      images: [
        "/images/vision-1.PNG",
        "/images/vision-2.PNG",
        "/images/vision-3.PNG",
      ],
      logo: "/images/vision-logo.PNG",
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-6 md:w-8" />,
        },
        {
          color: "bg-[#000000]",
          icon: <NextIcon className="w-6 md:w-8" />,
        },
        {
          color: "bg-[#0277bd]",
          icon: <PostgresIcon className="w-6 md:w-8" />,
        },
      ],
    },
    {
      name: "Flow",
      description:
        "Chrome extension and web dashboard that aids in buying sneakers and streetwear.",
      isPrivate: true,
      link: "https://gizmo.solutions/",
      images: [
        "/images/flow-1.PNG",
        "/images/flow-2.PNG",
        "/images/flow-3.PNG",
      ],
      logo: "/images/flow-logo.jpg",
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-6 md:w-8" />,
        },
        {
          color: "bg-[#023430]",
          icon: <MongoIcon className="w-6 md:w-8" />,
        },
      ],
    },
    {
      name: "Totemfall",
      description:
        "Top down survival game to try and survive against waves of enemies.",
      link: "https://github.com/ImVispo/Totemfall",
      images: ["/images/totemfall-1.PNG"],
      technologies: [
        {
          icon: <CSharpIcon className="w-6 md:w-8" />,
        },
        {
          color: "bg-[#fff]",
          icon: <UnityIcon className="w-6 md:w-8 mr-1" />,
        },
      ],
    },
    {
      name: "Portfolio Website",
      description:
        "This website you're looking at! My personal portfolio showcasing my projects and more about me.",
      link: "https://github.com/ImVispo/portfolio",
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-6 md:w-8" />,
        },
      ],
    },
    {
      name: "Semaphore and Message Passing",
      description:
        "To become familiar with concurrent processing in Unix/Linux using shared memory and with semaphores in POSIX-based operating systems.",
      link: "https://github.com/ImVispo/Semaphores-and-Message-Passing",
      technologies: [
        {
          icon: <CIcon className="w-6 md:w-8" />,
        },
      ],
    },
    {
      name: "Puffer",
      description:
        "Automated Twitch clip compiler. Running on YouTube channels for games such as League of Legends, Valorant and more.",
      link: "https://github.com/lukebradaric/puffer-twitch",
      logo: "/images/puffer-logo.PNG",
      technologies: [
        {
          color: "bg-[#F7DF1E]",
          icon: <JavascriptIcon className="w-6 md:w-8" />,
        },
      ],
    },
  ];
  return (
    <div className="px-5 md:px-10 py-5 bg-[#0C0C10]">
      <p className="text-2xl md:text-3xl font-semibold">Projects</p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projectsBig.map((project, i) => (
          <ProjectCardBig key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

interface ProjectBigProps {
  name: string;
  description: string;
  isPrivate?: boolean;
  link: string;
  images?: string[];
  logo?: string;
  technologies?: TechnologyProps[];
}
interface TechnologyProps {
  color?: string;
  icon: JSX.Element;
}
const ProjectCardBig = (props: ProjectBigProps) => (
  <div className="rounded-md bg-[#667085]/[.05] p-3 md:p-4">
    {/* Logo, Name, Description */}
    <div className="flex items-center border-b border-[#667085]/[.1] pb-3">
      {props.logo ? (
        <img className="w-[60px] rounded-md mr-3" src={props.logo}></img>
      ) : null}
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-sm text-white/50">{props.description}</p>
      </div>
    </div>
    {/* Links */}
    <div className="mt-3 flex space-x-2">
      {props.isPrivate ? (
        <div className="flex">
          <LockIcon className="w-4 stroke-white/50 mr-1" />
          <p className="text-sm text-white/50">Private Project</p>
        </div>
      ) : null}
      <div
        className="flex hover:cursor-pointer"
        onClick={() => window.open(props.link)}
      >
        <p className="text-sm text-blue-400 underline mr-1">
          View Project {!props.isPrivate ? "on Github" : null}
        </p>
        <ExternalLink className="w-4 stroke-blue-400" />
      </div>
    </div>
    {/* Technologies */}
    <div className="flex space-x-2 mt-3">
      {props.technologies?.map((technology, i) => (
        <Technology
          key={i}
          color={technology.color || ""}
          icon={technology.icon}
        />
      ))}
    </div>
    {/* Images */}
    <Carousel showThumbs={false} className="mt-3">
      {props.images?.map((image, i) => (
        <div key={i}>
          <img className="rounded-md" src={image}></img>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Home;
