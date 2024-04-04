



const DuaCard = async ({id,name,desc,arabic,transliteration,translation,reference,audio}) => {
 

  return (
    <div id={`dua_${id}`} className="bg-white rounded-2lg mb-5 dark:bg-dark-bg">
      <div className="p-6">
        <div>
          <div className="flex flex-row  justify-start items-center ">
            <img src="/assets/card/duacard.svg" className="mr-3" alt="duacard" />
            <p className="text-primary font-medium">
              {`${id} ${name}`}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start">
          <div className="w-full">
            <p className=" style-inter dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal">
              <span>
                {desc}
              </span>
            </p>
            <div
              dir="rtl"
              className="dark:text-[#e4e4e4] my-8 text-right leading-loose text-3xl"
            >
              <p>
                {arabic}
              </p>
            </div>
            <p className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-justify leading-8 italic">
              <span
                id="transliteration"
                className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium"
              >
                Transliteration:
              </span>
              <span>
                {transliteration}
              </span>
            </p>
            <p
              id="translation"
              className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-title text-justify font-normal"
            >
              <span className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium">
                Translation:
              </span>
              <span>
                {translation}
              </span>
            </p>
          </div>
          <div>
            <p className="mt-5 font-normal text-primary">Reference:</p>
            <div className="mt-1 font-normal dark:text-dark-text">
              <span>{reference}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-6">
          <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
            <audio
              src={audio}
            ></audio>
            <div className="flex flex-row items-center gap-x-3 xs:w-full">
              <img
                className="cursor-pointer xs:w-8"
                src="/assets/card/audiobtn.svg"
                alt="audio"
              />
            </div>
          </div>
          <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
            <div id="copy" className="relative w-6">
              <img
                className="cursor-pointer"
                src="/assets/card/copy.svg"
                alt="copy"
              />
            </div>
            <div id="bookmark" className="relative w-6">
              <img
                className="cursor-pointer"
                src="/assets/card/bookmark.svg"
                alt="bookmark"
              />
            </div>
            <div id="plan" className="relative w-6">
              <img
                className="cursor-pointer"
                src="/assets/card/plan.svg"
                alt="plan"
              />
            </div>
            <div id="share" className="relative w-6">
              <img
                className="cursor-pointer"
                src="/assets/card/share.svg"
                alt="share"
              />
            </div>
            <div id="report" className="relative w-6">
              <img
                className="cursor-pointer"
                src="/assets/card/report.svg"
                alt="report"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
