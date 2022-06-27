import react from "react";
import { useNavigate, useLocation } from "react-router";
import { GithubIcon, LinkedInIcon } from "./Icons";

const defaultHover = "hover:cursor-pointer duration-300";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pages = [
    {
      name: "about",
      path: "/",
    },
    {
      name: "projects",
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

const Footer = () => (
  //   console.log("hi");
  <div className="pb-10 px-20 flex justify-between">
    <div>
      <GithubIcon
        className={`fill-gray-300 hover:fill-white ${defaultHover}`}
      />
    </div>
    <div>
      <LinkedInIcon
        className={`fill-gray-300 hover:fill-white ${defaultHover}`}
      />
    </div>
  </div>
);
type PageProps = {
  name: string;
  path: string;
  active: boolean;
  navigate: (path: string) => void;
};
const Page = (props: PageProps) => {
  const { name, path, active, navigate } = props;
  return (
    <div
      className={`block 
    ${active ? "border-r -mr-px" : null}`}
      onClick={() => navigate(path)}
    >
      <p
        className={`pl-8 pt-3 font-mono underline
      hover:text-white ${defaultHover}
      ${active ? "text-white" : "text-gray-300"}`}
      >
        /{name}
      </p>
    </div>
  );
};

export default Navbar;
