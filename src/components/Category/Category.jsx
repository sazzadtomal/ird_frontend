"use client"

import SubCategorySection from "./SubCategorySection";
import Link from "next/link";
import { useState} from 'react'


const Category = ({dua,sub,name,id}) => {
  const [data, setData] = useState(null)
  const path=name.toLowerCase().split(" ").join("-")

  const fullPath=`/duas/${path}?cat=${id}`


  const getSubCatagories=()=>{
    fetch(`https://ird-beckend.onrender.com/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })

      const elem=document.getElementById(`cat_${id}`);
      setTimeout(()=>{elem?.scrollIntoView({behavior: "smooth"})},1000)


  }




  return (
    <div className="scroll-mt-4 px-1" id={`cat_${id}`} onClick={getSubCatagories}>
      {/* main category */}

      <Link href={fullPath} >
        <div className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2">
          <div className="border p-2 bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
            <div className="flex  flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
              <div className="bg-dua-bg dark:bg-dark-bg  flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
                <img
                  src="/assets/duar_gurutto.svg"
                  alt="duar_gurutto"
                  className="p-3"
                />
              </div>
              <div className="w-40 text-left ml-2 ">
                <p className="text-base  style-kalpurush text-black style-inter-cat dark:text-dark-text sm:text-mss">
                  {name}
                </p>
                <p className="text-mute-grey text-xs mt-1 dark:text-dark-text xs:text-[11px] ">
                  Subcategory: {sub}
                </p>
              </div>
            </div>
            <div className="flex flex-row w-12 items-center xl:hidden">
              <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
              <div className="flex flex-col gap-y-1 justify-center items-center">
                <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">
                  {dua}
                </p>
                <p className="text-mute-grey text-xs dark:text-dark-text xs:text-[11px]">
                  Duas
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* sub catagorries*/}
      {data ? <SubCategorySection path={path} data={data} fullPath={fullPath} /> : ""}
    </div>
  );
};

export default Category;
