import Image from "next/image";
import Link from "next/link";

const MobileTopbar = ({ page }) => {
  return (
    <div className="fixed top-0 lg:z-[1] w-full md:flex lg:flex flex-row p-5 items-center justify-between bg-white shadow-sm cursor-pointer dark:bg-dark-bg hidden">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/assets/dua-logo.svg" alt="dua-logo" priority={true}
              width={80}
              height={80} />
          <p className="text-title font-medium text-xl ml-3 dark:text-dark-text">
            {page}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between md:z-[1] lg:z-[1]">
        <div className="flex flex-row items-center relative">
          <form className="sm-max:w-full" action="">
            <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
              <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                <input
                  id="search_box"
                  className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                  placeholder="Search by Dua Name"
                  type="text"
                  name="search"
                  readOnly
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                >
                  <span className="flex items-center sm-max:hidden">
                    <svg
                      className="stroke-mute-grey"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="hidden sm-max:block sm-max:text-white">
                    Search
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="mr-4">
            <Image
              width={24}
              height={24}
              src="/assets/top/settings.svg"
              alt="settings"
            />
          </div>
        </div>
        <div className="md:-z-[1] lg:-z-[1]">
          <div className="relative" data-headlessui-state="">
            <button
              className="
                text-opacity-90
                group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
                sm:px-0
                "
              id="headlessui-popover-button-:r4p:"
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
      </div>
    </div>
  );
};

export default MobileTopbar;
