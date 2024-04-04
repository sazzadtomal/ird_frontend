import Image from "next/image";

const DesktopTopbar = ({page}) => {

  return (
    <div className="right-10 lg:left-[1rem] xl:left-1  hidden xl:relative mb-20 lg: xl:block 2xl:block 3xl:block">
    <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
      <div className="flex flex-row justify-between">
        <div className="text-left flex items-center">
          <div>
            <h1 className="text-2xl dark:text-dark-text">{page || "Homepage" }</h1>
            <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
          </div>
        </div>
        <div className="flex flex-row items-center relative">
          <form className="sm-max:w-full">
            <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
              <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                <input
                  id="search_box"
                  className=" block  placeholder:text-sm bg-white  w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-[#1fa45b] focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                  placeholder="Search by Dua Name"
                  type="text"
                  name="search"
                  readOnly
                />
                <button
                  type="submit"
                  className="absolute flex items-center justify-cente cursor-pointer  px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary bg-[#ebeef2]  focus:bg-green-700"
                >
                  <span className="flex items-center">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/top/search.png"
                      alt="search"
                    />
                  </span>
                  <p className="hidden sm-max:block sm-max:text-white">
                    Search
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end">
        <div className="md:-z-[1] lg:-z-[1]">
          <div className="relative" data-headlessui-state="">
            <button
              className="
            text-opacity-90
            group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
            sm:px-0
            "
              id="headlessui-popover-button-:r1m:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <Image
                width={45}
                height={45}
                src="/assets/top/profile.svg"
                alt="profile"
              />
              <svg
                className="ml-2 mr-2"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                  fill="#868686"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <Image
            width={24}
            height={24}
            src="/assets/top/settings.svg"
            className="2xl:hidden 3xl:hidden"
            alt="settings"
          />
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default DesktopTopbar