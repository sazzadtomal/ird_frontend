"use client"
import Link from "next/link";
import { useSearchParams } from 'next/navigation'


const DuaSelector = ({dua_id,fullPath,name}) => {
    const searchParams = useSearchParams()

    const dua = parseInt(searchParams.get('dua'))

    const handleScroll=()=>{
      console.log(dua_id)
      const elem=document.getElementById(`dua_${dua_id}`)
      elem.scrollIntoView({behavior:"smooth"})
    }


  return (
   
     <Link  href={`${fullPath}&dua=${dua_id}`}><div className="flex flex-row "><img src="/assets/category/duaarrow.svg" className="-translate-y-1 mr-2" alt="dua"/><p onClick={handleScroll} className={ `${dua===dua_id ? "text-primary" : "text-black"} text-2xs my-3 text-left w-[95%] dark:text-gray-300 style-Kalpurush`}>{name}</p></div></Link>
              
  )
}

export default DuaSelector