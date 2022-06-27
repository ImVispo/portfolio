import react, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import useSound from "use-sound";
import { GithubIcon, LinkedInIcon } from "./Icons";

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
      <div className="fixed w-60 h-screen border-r border-white/10 flex flex-col justify-between">
        <div className="pt-10">
          {pages.map((page) => (
            <Page
              name={page.name}
              path={page.path}
              active={pathname === page.path}
              navigate={navigate}
            />
          ))}
        </div>
        {/* <UserInfo /> */}
        <Footer />
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

const Footer = () => (
  //   console.log("hi");
  <div className="pb-10 px-20 flex justify-between">
    <div>
      <GithubIcon
        className={`fill-gray-300 hover:fill-white hover:cursor-pointer duration-300`}
      />
    </div>
    <div>
      <LinkedInIcon
        className={`fill-gray-300 hover:fill-white hover:cursor-pointer duration-300`}
      />
    </div>
  </div>
);

export default Navbar;
