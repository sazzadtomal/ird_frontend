import { midNavigations, smallNavigations } from "@/Data/navigations";
import BottombarLinks from "./BottombarLinks";
import BottombarLinksMod from "./BottombarLinksMod";
const BottomBar = () => {
  return (
    <div className="hidden xs:block sm:block md:block lg:block">
      <div className="fixed bottom-0 z-0 w-full bg-white pb-6 mt-6 rounded-t-[3rem] shadow-top dark:bg-dark-bg hidden md:block lg:block">
        <div className="px-6 pt-6 flex justify-between">
          {midNavigations.map((nav) => (
            <BottombarLinks key={"bottom"+nav.icon} path={nav.path} icon={nav.icon} />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 z-0 flex-col items-end hidden xs:flex sm:flex">
        <div className="flex flex-row p-6 bg-white w-screen h-16 rounded-t-4xl shadow-top items-center justify-between dark:bg-dark-bg">
          {smallNavigations.map((nav) => (
            <BottombarLinksMod key={"small"+nav.icon} path={nav.path} icon={nav.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
