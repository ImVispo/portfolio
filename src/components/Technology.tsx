import { ReactNode } from "react";

type TechnologyProps = {
  className?: string;
  color: string;
  icon: JSX.Element;
};
const Technology = (props: TechnologyProps) => {
  const { className, color, icon } = props;
  return (
    <div>
      <div
        className={`w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex flex-col place-items-center justify-center rounded-md ${color} ${className}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default Technology;
