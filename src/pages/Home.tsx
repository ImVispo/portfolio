import React, { ReactNode, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ReactTooltip from "react-tooltip";
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
  PrismaIcon,
  CSharpIcon,
  CIcon,
  CPlusPlusIcon,
  NodeJSIcon,
  PythonIcon,
  UnityIcon,
  ExternalLink,
  GitIcon,
} from "../components/Icons";
import Technology from "../components/Technology";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type showTooltipFn = (arg0: boolean) => void;
const Home = () => {
  const [tooltip, updateToolTip] = useState(true);

  const showTooltip = (show: boolean) => {
    updateToolTip(show);
  };

  return (
    <div className="font-inter text-white">
      {tooltip && (
        <ReactTooltip
          effect="solid"
          backgroundColor="#26272B"
          multiline={true}
        />
      )}
      <Intro showTooltip={showTooltip} />
      <Projects />
      <Technologies />
      <AboutMe />
    </div>
  );
};

interface IntroProps {
  showTooltip: showTooltipFn;
}
const Intro = (props: IntroProps) => {
  console.log("Intro");
  return (
    <div className="px-5 md:px-10 py-6 md:py-10 flex flex-col justify-center items-center md:flex-row md:py-20">
      <img
        className="rounded-md"
        src="/images/me.jpg"
        alt="me"
        data-tip="Hello! :D"
        onMouseEnter={() => props.showTooltip(true)}
        onMouseLeave={() => {
          props.showTooltip(false);
          setTimeout(() => props.showTooltip(true), 100);
        }}
      />
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
          icon: <TypescriptIcon className="w-6 md:w-8" />,
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
          icon: <TypescriptIcon className="w-6 md:w-8" />,
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
          icon: <TypescriptIcon className="w-6 md:w-8" />,
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
    <div className="px-5 md:px-10 py-6 md:py-10 bg-[#0C0C10]">
      <p className="text-3xl md:text-4xl font-bold">Projects</p>
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

const Technologies = () => {
  console.log("Technologies");
  return (
    <div className="px-5 md:px-10 py-6 md:py-10">
      <p className="text-3xl md:text-4xl font-bold">Technologies</p>
      <p className="text-[#667085] pt-2 max-w-4xl">
        I use a wide variety of technologies to aid me in building efficient
        software. I find learning new things enjoyable and it's what helps me
        stay driven and motivated as a developer.
      </p>
      <FavoriteTechnologies />
      <OtherTechnologies />
    </div>
  );
};

const FavoriteTechnologies = () => {
  const favoriteTechnologies = [
    {
      name: "Typescript",
      description: "My go-to language. Used for all of my full-stack projects.",
      color: "bg-[#007acc]",
      icon: <TypescriptIcon className="w-8 md:w-10" />,
    },
    {
      name: "React",
      description:
        "2+ years of React experience. My go-to framework for building frontned.",
      color: "bg-[#282C34]",
      icon: <ReactIcon className="w-8 md:w-10" />,
    },
    {
      name: "PostgreSQL",
      description:
        "Experience using postgres on several projects, including writing schemas from scratch.",
      color: "bg-[#0277bd]",
      icon: <PostgresIcon className="w-8 md:w-10" />,
    },
    {
      name: "Unity",
      description:
        "Recently picked up Unity for game development this summer and I've been loving every minute of it.",
      color: "bg-[#fff]",
      icon: <UnityIcon className="w-8 md:w-10 mr-1" />,
    },
  ];
  return (
    <div className="pt-3 md:pt-5">
      <p className="text-lg md:text-xl font-semibold">Favorite Technologies</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {favoriteTechnologies.map((technology, i) => (
          <div key={i} className="flex space-x-3 items-center">
            <Technology
              className="w-12 h-12 md:w-14 md:h-14"
              color={technology.color || ""}
              icon={technology.icon}
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">{technology.name}</p>
              <p className="text-sm text-white/50">{technology.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OtherTechnologies = () => {
  const otherTechnologies = [
    {
      color: "bg-[#fff]",
      icon: <PrismaIcon className="w-6 md:w-8 fill-[#000]" />,
    },
    {
      color: "bg-[#023430]",
      icon: <MongoIcon className="w-8 md:w-10" />,
    },
    {
      color: "bg-[#000000]",
      icon: <NextIcon className="w-8 md:w-10" />,
    },
    {
      color: "bg-[#07B6D5]",
      icon: <TailwindIcon className="w-8 md:w-10 fill-white" />,
    },
    {
      color: "bg-[#539E43]",
      icon: <NodeJSIcon className="w-8 md:w-10 fill-[#fff]" />,
    },
    {
      color: "bg-[#667085]/[.05]",
      icon: <CSharpIcon className="w-8 md:w-10" />,
    },
    {
      color: "bg-[#667085]/[.05]",
      icon: <CPlusPlusIcon className="w-8 md:w-10" />,
    },
    {
      color: "bg-[#667085]/[.05]",
      icon: <PythonIcon className="w-8 md:w-10" />,
    },
    {
      color: "bg-[#667085]/[.05]",
      icon: <GitIcon className="w-8 md:w-10" />,
    },
  ];
  return (
    <div className="pt-3 md:pt-5">
      <p className="text-lg md:text-xl font-semibold">Other Technologies</p>
      <div className="mt-3 grid grid-cols-6 sm:flex gap-4">
        {otherTechnologies.map((technology, i) => (
          <Technology
            key={i}
            className="w-12 h-12 md:w-14 md:h-14"
            color={technology.color || ""}
            icon={technology.icon}
          />
        ))}
      </div>
    </div>
  );
};

const AboutMe = () => {
  console.log("AboutMe");
  const sections = [
    {
      title: "Introduction",
      children: (
        <p className="text-sm text-white/50">
          My passion for programming started in high school when I started
          reselling sneakers as a hobby. Other resellers used programs to help
          purchase sneakers that would sell out quickly. I ended up purchasing
          one of these programs and after using it for a while, I tried to
          create my own. It's been 4 years since then and my passion for
          programming has only grown.
        </p>
      ),
    },
    {
      title: "Buisnesses",
      children: (
        <p className="text-sm text-white/50">
          A few months after picking up programming, I began making discord
          bots, web scrapers, and other custom software that I would sell to
          others in the reselling community. These services evolved into several
          different products such as social media and retail web scrapers and a
          chrome extension that automates the purchasing of sneakers and
          streetwear. Towards the end of high school I made my own business
          where others I sold memberships, reaching over 10,000 customers
          worldwide. Recently, I've started to explore web3 and have taken up a
          new project of my own, Vision, which builds tools that makes the NFT
          space easier.
        </p>
      ),
    },
    {
      title: "Games",
      children: (
        <p className="text-sm text-white/50">
          I spend most of my free time playing games with friends, but as of
          recent I've been learning game development. I've spent thousands of
          countless hours playing games such as Valorant, League of Legends, and
          Escape from Tarkov. My favorite game by far is World of Warcraft, and
          with over 8000+ hours on it I'd say im pretty good at it. If you know
          what logs are, you can check mine out{" "}
          <a
            className="text-blue-400 underline hover:cursor-pointer"
            href="https://www.warcraftlogs.com/character/us/bleeding-hollow/vispo#zone=29&difficulty=4"
          >
            here
          </a>
          ; I have a few rank ones that I'm proud of.
        </p>
      ),
    },
    {
      title: "Aspiration",
      children: (
        <p className="text-sm text-white/50">
          I aspire to work on something impactful with a team of engineers that
          I can learn from. My dream companies are Blizzard and Riot. It would
          be a dream come true to be able to work on the games I grew up
          playing.
        </p>
      ),
    },
  ];
  return (
    <div className="px-5 md:px-10 py-6 md:py-10 bg-[#0C0C10]">
      <p className="text-3xl md:text-4xl font-bold">About Me</p>
      {/* <p className="text-[#667085] pt-2 max-w-4xl">
        I spend most of my free time playing games with friends, but as of
        recent, I've been learning game development.
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {sections.map((section, i) => (
          <AboutMeSection key={i} title={section.title}>
            {section.children}
          </AboutMeSection>
        ))}
      </div>
    </div>
  );
};

interface AboutMeSectionProps {
  title: string;
  children: React.ReactNode;
}
const AboutMeSection = (props: AboutMeSectionProps) => (
  <div className="pt-3 md:pt-5">
    <p className="text-lg md:text-xl font-semibold">{props.title}</p>
    {props.children}
  </div>
);

export default Home;
