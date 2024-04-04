"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { pathMapping } from "@/Data/navigations";

const MobileNavigation = () => {
  const pathname = usePathname().split("/")[1]
  
  return (
    <div>
      <div className="fixed top-0 px-4 bg-[#ebeef2] dark:bg-[#122337] z-[2] w-full flex-row py-5 items-center justify-between hidden xs:flex sm:flex">
        <div className="flex flex-row items-center">
          <img
            src="/assets/top/back.svg"
            className="h-4 cursor-pointer"
            alt="back"
          />
          <p className=" text-title text-lg ml-4 text-center dark:text-dark-text">
            {pathMapping[pathname] || "Homepage"}
          </p>
        </div>
        <Link href="/settings">
          <img
            src="/assets/top/settings.svg"
            className="cursor-pointer p-2"
            alt="settings"
            
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
