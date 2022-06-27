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

const Projects = () => {
  const companies = [
    {
      name: "Vision",
      image: "https://avatars.githubusercontent.com/u/45183411?v=4",
      duration: "January 2021 - Present",
      role: "Co-founder and Developer",
      objectives:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie semper lacus, ut porttitor nunc varius nec. Sed sodales quam id placerat pretium. Proin iaculis tellus vel condimentum placerat.",
      siteUrl: "https://visiontools.io/",
      twitterUrl: "https://twitter.com/visiontoolsnft",
    },
    {
      name: "Gizmo",
      image:
        "https://pbs.twimg.com/profile_images/1301269382983684096/CtPQS74Z_400x400.jpg",
      duration: "November 2018 - Present",
      role: "Founder and Developer",
      objectives:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie semper lacus, ut porttitor nunc varius nec. Sed sodales quam id placerat pretium. Proin iaculis tellus vel condimentum placerat.",
      siteUrl: "https://gizmo.solutions/",
      twitterUrl: "https://twitter.com/gizmosolution",
    },
  ];
  const projects = [
    {
      name: "Rarity Site",
      type: "Web App",
      description:
        "Automates purchasing sneakers, streetwear, consoles, hardware, software, and more on sites including Shopify, Supreme, Stripe, BestBuy, Target, and more.",
      image: "https://avatars.githubusercontent.com/u/45183411?v=4",
      isPrivate: true,
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-8" />,
        },
        {
          color: "bg-[#000000]",
          icon: <NextIcon className="w-9" />,
        },
        {
          color: "bg-[#07B6D5]",
          icon: <TailwindIcon className="w-8 fill-white" />,
        },
        {
          color: "bg-[#0277bd]",
          icon: <PostgresIcon className="w-8" />,
        },
      ],
    },
    {
      name: "Vision",
      type: "Chrome extension",
      description:
        "Automates purchasing sneakers, streetwear, consoles, hardware, software, and more on sites including Shopify, Supreme, Stripe, BestBuy, Target, and more.",
      image: "https://avatars.githubusercontent.com/u/45183411?v=4",

      isPrivate: true,
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-8" />,
        },
        {
          color: "bg-[#07B6D5]",
          icon: <TailwindIcon className="w-8 fill-white" />,
        },
      ],
    },
    {
      name: "Flow",
      type: "Chrome extension",
      description:
        "Automates purchasing sneakers, streetwear, consoles, hardware, software, and more on sites including Shopify, Supreme, Stripe, BestBuy, Target, and more.",
      image:
        "https://pbs.twimg.com/profile_images/1301269382983684096/CtPQS74Z_400x400.jpg",
      isPrivate: true,
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-8" />,
        },
        {
          color: "bg-[#282C34]",
          icon: <AntDesignIcon className="w-8" />,
        },
      ],
    },
    {
      name: "Dashboard",
      type: "Web app",
      description: "",
      image:
        "https://pbs.twimg.com/profile_images/1301269382983684096/CtPQS74Z_400x400.jpg",
      isPrivate: true,
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-8" />,
        },
        {
          color: "bg-[#000000]",
          icon: <NextIcon className="w-9" />,
        },
        {
          color: "bg-[#282C34]",
          icon: <AntDesignIcon className="w-8" />,
        },
        {
          color: "bg-[#023430]",
          icon: <MongoIcon className="w-8" />,
        },
      ],
    },
    {
      name: "Twitter Monitor",
      type: "Program",
      description: "",
      image:
        "https://pbs.twimg.com/profile_images/1301269382983684096/CtPQS74Z_400x400.jpg",
      isPrivate: true,
      technologies: [
        {
          color: "bg-[#F7DF1E]",
          icon: <JavascriptIcon />,
        },
        {
          color: "bg-[#404EED]",
          icon: <DiscordIcon className="fill-white w-6" />,
        },
      ],
    },
    {
      name: "Instagram Monitor",
      type: "Program",
      description: "",
      image:
        "https://pbs.twimg.com/profile_images/1301269382983684096/CtPQS74Z_400x400.jpg",
      isPrivate: true,
      technologies: [
        {
          color: "bg-[#F7DF1E]",
          icon: <JavascriptIcon />,
        },
        {
          color: "bg-[#404EED]",
          icon: <DiscordIcon className="fill-white w-6" />,
        },
      ],
    },
    {
      name: "Portfolio",
      type: "Web App",
      description:
        "My personal website (the one that you're looking at right now!)",
      isPrivate: false,
      technologies: [
        {
          color: "bg-[#007acc]",
          icon: <TypescriptIcon />,
        },
        {
          color: "bg-[#282C34]",
          icon: <ReactIcon className="w-8" />,
        },
      ],
      gitubLink: "https://github.com/ImVispo/portfolio",
    },
    {
      name: "Puffer",
      type: "Program",
      description:
        "Automated Twitch highlight videos. Clip filter and download, video assembly, thumbnail creation, and upload.",
      isPrivate: false,
      technologies: [
        {
          color: "bg-[#F7DF1E]",
          icon: <JavascriptIcon />,
        },
      ],
      gitubLink: "https://github.com/lukebradaric/puffer-twitch",
    },
  ];
  return (
    <div className="ml-60 py-10 px-8 text-white">
      <h1 className="text-2xl font-bold">Companies</h1>
      <div className="pt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {companies.map((company) => (
          <CompanyCard {...company} />
        ))}
      </div>
      <h1 className="text-2xl font-bold pt-5">Projects</h1>
      <div className="pt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

type CompanyCardProps = {
  name: string;
  image: string;
  duration: string;
  role: string;
  objectives: string;
  siteUrl: string;
  twitterUrl: string;
};
const CompanyCard = (props: CompanyCardProps) => {
  const { name, image, duration, role, objectives, siteUrl, twitterUrl } =
    props;

  return (
    <div
      className="bg-white/5 border border-white/10 rounded-md p-4
    hover:bg-white/10 duration-300"
    >
      <div className="flex">
        <div className="flex flex-1">
          <img className="w-[75px] h-full rounded-md" src={image} />
          <div className="pl-3 flex flex-col justify-center">
            <p className="text-2xl font-extrabold">{name}</p>
            <p className="text-md text-white/50 font-normal">{duration}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <SiteIcon
            className="stroke-white/50 hover:stroke-white hover:cursor-pointer duration-300"
            onClick={() => window.open(siteUrl)}
          />
          <TwitterIcon
            className="stroke-white/50 hover:stroke-white hover:cursor-pointer duration-300 p-[1px]"
            onClick={() => window.open(twitterUrl)}
          />
        </div>
      </div>
      <div className="pt-5 mt-5 border-t border-white/10">
        <div>
          <p className="text-lg font-bold">Role</p>
          <p className="text-md text-white/50 font-normal">{role}</p>
        </div>
        <div className="pt-5">
          <p className="text-lg font-bold">Objectives</p>
          <p className="text-md text-white/50 font-normal">{objectives}</p>
        </div>
      </div>
    </div>
  );
};

type ProjectCardProps = {
  name: string;
  type: string;
  description: string;
  image?: string;
  isPrivate: boolean;
  technologies?: TechnologyProps[];
};
type TechnologyProps = {
  color: string;
  icon: JSX.Element;
};
const ProjectCard = (props: ProjectCardProps) => {
  const { name, type, description, image, isPrivate, technologies } = props;
  return (
    <div
      className="bg-white/5 border border-white/10 rounded-md p-3 hover:cursor-pointer
    hover:bg-white/10 duration-300"
    >
      <div className="flex">
        <div className="flex flex-1">
          {image ? (
            <img src={image} className="rounded-lg w-[60px] h-[60px] mr-3" />
          ) : null}
          <div className="flex flex-col flex-1 justify-center">
            <p className="text-xl font-extrabold">{name}</p>
            <p className="text-md text-white/50 font-normal whitespace-nowrap">
              {type}
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          {technologies?.map((technology) => (
            <Technology color={technology.color} icon={technology.icon} />
          ))}
        </div>
      </div>
      <div className="pt-3 mt-3 border-t border-white/10">
        {isPrivate ? (
          <>
            <div className="flex">
              <LockIcon className="w-5 stroke-white/50" />
              <p className="pl-1 text-white/50">Private Project</p>
            </div>
            <p className="pt-1 text-blue-400">Click me to read more about it</p>
          </>
        ) : (
          <p className="text-white/50">{description}</p>
        )}
      </div>
      {/* <div className="pt-3 mt-3 border-t border-white/10">
        <p className="text-lg font-bold">Technologies</p>
        <div className="pt-1 flex space-x-2">
          <Technology
            color="bg-[#007acc]"
            icon={<TypescriptIcon />}
            text={"Typescript"}
          />
          <Technology
            color="bg-[#282C34]"
            icon={<ReactIcon className="w-8" />}
            text={"React"}
          />
          <Technology
            color="bg-[#fff]"
            icon={<ChromeIcon className="w-8" />}
            text={"Chrome"}
          />
          <Technology
            color="bg-[#DDE4E9]"
            icon={<AntDesignIcon className="w-8" />}
            text={"Chrome"}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
