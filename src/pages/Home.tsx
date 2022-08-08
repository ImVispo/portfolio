import React from "react";
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
} from "../components/Icons";
import Technology from "../components/Technology";

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
      description: "A platform for viewing NFT collection rarity rankings",
      image: "/images/vision-rarity-example.PNG",
      logo: "https://avatars.githubusercontent.com/u/45183411?v=4",
    },
  ];
  return (
    <div className="px-5 md:px-10 py-5 bg-[#0C0C10]">
      <p className="text-2xl md:text-3xl font-semibold">Projects</p>
      <div className="mt-5">
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
  image: string;
  logo: string;
}
const ProjectCardBig = (props: ProjectBigProps) => (
  <div className="rounded-md bg-[#667085]/[.02] p-3">
    {/* Logo, Name, Description */}
    <div className="flex items-center border-b border-[#667085]/[.1] pb-3">
      <img className="w-[60px] rounded-md" src={props.logo}></img>
      <div className="flex flex-col ml-3 justify-center">
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-sm text-white/50">{props.description}</p>
      </div>
    </div>
    {/* Links */}
    <div className="my-3">
      <p className="text-sm text-blue-400 underline hover:cursor-pointer">
        View live site
      </p>
    </div>
    {/* Image */}
    <img className="rounded-md" src={props.image}></img>
  </div>
);

export default Home;
