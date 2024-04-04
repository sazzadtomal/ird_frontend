"use client"

import { usePathname } from 'next/navigation'
import DesktopTopbar from "./DesktopTopbar";
import MobileTopbar from "./MobileTopbar";
import { pathMapping } from '@/Data/navigations';






const Topbar = () => {

  const pathname = usePathname().split("/")[1]
  return (
    <div className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1] 3xl:col-start-2 3xl:col-span-full 3xl:z-[-16]">
      <DesktopTopbar page={pathMapping[pathname]}/>
      <MobileTopbar page={pathMapping[pathname]}/>
    </div>
  );
};

export default Topbar;
