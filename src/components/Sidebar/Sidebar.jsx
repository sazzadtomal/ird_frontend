import Image from "next/image";
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import { navigations } from "@/Data/navigations";

const Sidebar = () => {
  return (
    <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16] ">
      <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] overflow-y-auto pb-16">
        <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container">
          <Link href="/">
            <Image
              src="/assets/dua-logo.svg"
              priority={true}
              width={80}
              height={80}
              alt="logo"
              className="mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
            />
          </Link>
        </div>

        {navigations.map(link=>(<SidebarLink key={link.path} to={link.path} icon={link.icon}/>))}

       
        <div>
          <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
            <Link href="/support">
              <button className="w-12 h-12 bg-primary drop-shadow-primary rounded-lg  text-white text-sm">
                <div className="flex justify-center items-center">
                  <img src="/assets/nav/support.svg" alt="support"/>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
