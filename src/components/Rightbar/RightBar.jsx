const RightBar = () => {
  return (
    <div className="hidden 2xl:block 3xl:block 3xl:col-start-4 3xl:-z-[15] z-[-2]">
      <div
        id="right-bar"
        className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
      >
        <div className="bg-white dark:bg-dark-bg w-full h-[85.5vh] rounded-3xl scrl-left pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
          <div className=" pt-9 pb-6 xs:pt-0 sm:pt-0">
            <p className="text-center text-xl dark:text-dark-text xs:hidden sm:hidden">
              Settings
            </p>
          </div>
          <div className="xs:pb-4 sm:pb-4 w-full">
            <div className="mx-4 my-4">
              <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none dark:bg-dark-bg-dark">
                <div className="cursor-pointer">
                  <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                    <div className="bg-primary w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                        <img src="/assets/right/language.svg " alt="language" />
                      </div>
                      <p className="text-primary font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                        Language Settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-6 rounded-b-lg">
                    <div className="flex flex-row gap-x-3 mx-4 justify-center">
                      <button className="bg-primary text-white rounded-md   w-28 h-10 text-ms xs:w-full sm:w-full">
                        English
                      </button>
                      <button className=" dark:bg-dark-bg-lite text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:border-none rounded-md w-28 h-10 text-ms xs:w-full sm:w-full">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                        <img src="/assets/right/general.svg " alt="general" />
                      </div>
                      <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                        General Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                        <img src="/assets/right/font.svg " alt="font" />
                      </div>
                      <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                        Font Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                        <img src="/assets/right/font.svg " alt="font" />
                      </div>
                      <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                        Appearance Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
