"use client"
import SubCategory from './SubCategory'
import { usePathname } from 'next/navigation'


const SubCategorySection =({path,data,fullPath}) => {
  const pathname = usePathname().split("/")[2]

  return (
    <div className="ml-12 border-l-2 border-dotted my-2 border-primary">
        <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
           {path===pathname && data ? data.map(sub=>(<SubCategory key={"sub"+subcat_name_en} name={sub.subcat_name_en} id={sub.subcat_id} fullPath={fullPath}/>)) :""}

        </div>
      </div>
  )
}

export default SubCategorySection