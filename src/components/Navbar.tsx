import react, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import useSound from "use-sound";
import { TerminalIcon, GithubIcon, LinkedInIcon } from "./Icons";

const iconClassName = `hover:cursor-pointer duration-300`;
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [playClick] = useSound("/sounds/click.mp3");
  useEffect(() => {
    playClick();
  }, [pathname]);

  const pages = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Work",
      path: "/projects",
    },
  ];

  return (
    <>
      <div className="fixed w-full p-5 border-b border-white/10 flex justify-between">
        <TerminalIcon className={`stroke-[#D9E6FF] w-6 ${iconClassName}`} />
        {/* <div className="pt-10">
          {pages.map((page) => (
            <Page
              name={page.name}
              path={page.path}
              active={pathname === page.path}
              navigate={navigate}
            />
          ))}
        </div> */}
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
    <GithubIcon className={`fill-gray-300 hover:fill-white ${iconClassName}`} />
    <LinkedInIcon
      className={`fill-gray-300 hover:fill-white ${iconClassName}`}
    />
  </div>
);

export default Navbar;
