import DuaContainer from "@/components/Dua/DuaContainer";
import MobileNavigation from "@/components/MobileNavigation";

const page = async ({searchParams}) => {
 
  return (
    <>
    <MobileNavigation/>
      <div className="scrl-cat w-full sm:mt-16 md:mt-4 lg:mt-2 sm-max:overflow-y-auto scrl sm-max:pb-20 md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto lg:pb-6 lg:pt-24 lg:col-start-2 xl-min:pb-8 xl:w-full md:pt-24 sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%] col-start-2">
        <DuaContainer cat={searchParams.cat}/>
      </div>
    </>
  );
};

export default page;
