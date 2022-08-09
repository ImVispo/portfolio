import react, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import useSound from "use-sound";
import { TerminalIcon, GithubIcon, LinkedInIcon } from "./Icons";

const iconClassName = `hover:cursor-pointer duration-300`;
const Navbar = () => {
  const { hash } = useLocation();
  const [playClick] = useSound("/sounds/click.mp3");
  useEffect(() => {
    playClick();
  }, [hash]);

  const pages = [
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Technologies",
      path: "#technologies",
    },
    {
      name: "About Me",
      path: "#about",
    },
  ];

  return (
    <>
      <div className="w-full px-5 md:px-10 py-5 border-b border-white/10 flex justify-between">
        <div className="flex space-x-5 md:space-x-10 hover:cursor-pointer">
          {pages.map((page, i) => (
            <p
              key={i}
              className="text-[#D9E6FF] font-semibold hidden md:block"
              onClick={() => window.location.replace(`${page.path}`)}
            >
              {page.name}
            </p>
          ))}
        </div>
        <MyLinks className="m-auto" />
      </div>
    </>
  );
};

type PageProps = {
  name: string;
  path: string;
  active: boolean;
  navigate: (path: string) => void;
};
const Page = (props: PageProps) => {
  const { name, path, active, navigate } = props;
  return (
    <p
      className={`block pl-8 py-2 hover:text-white hover:cursor-pointer hover:border-r hover:-mr-px hover:border-white/20 font-medium
  ${active ? "text-white border-r -mr-px" : "text-gray-300 font-normal"}`}
      onClick={() => navigate(path)}
    >
      {name}
    </p>
  );
};

const MyLinks = ({ className }: { className: string }) => (
  <div className="flex space-x-5">
    <GithubIcon
      className={`fill-gray-300 hover:fill-white ${iconClassName}`}
      onClick={() => window.open("https://github.com/ImVispo")}
    />
    <LinkedInIcon
      className={`fill-gray-300 hover:fill-white ${iconClassName}`}
      onClick={() =>
        window.open("https://www.linkedin.com/in/nickholas-boboaca-990231162/")
      }
    />
  </div>
);

export default Navbar;
