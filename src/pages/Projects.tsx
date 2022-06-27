import React from "react";
import { SiteIcon, TwitterIcon } from "../components/Icons";

const Projects = () => {
  // console.log('asdf')
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
  return (
    <div className="ml-60 pt-10 px-8 text-white">
      <h1 className="text-2xl font-mono underline">Companies</h1>
      <div className="pt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {companies.map((company) => (
          <CompanyCard {...company} />
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
          <img className="w-[75px] rounded-lg" src={image} />
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

export default Projects;
