import { ReactNode } from "react";

type TechnologyProps = {
  color: string;
  icon: JSX.Element;
};
const Technology = (props: TechnologyProps) => {
  const { color, icon } = props;
  return (
    <div>
      <div
        className={`w-[40px] h-[40px] flex flex-col place-items-center justify-center rounded-lg ${color}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default Technology;
