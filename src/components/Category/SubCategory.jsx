"use client"
import { useState } from 'react'
import Link from "next/link";
import DuaSelector from '../DuaSelector';
import { useSearchParams } from 'next/navigation'

const SubCategory = ({name,id,fullPath}) => {

  const searchParams = useSearchParams()
 
  const subcat = parseInt(searchParams.get('subcat'))

  

  const [data, setData] = useState(null)

  const handleDua=async()=>{
    const elem=document.getElementById(`sec_${id}`)
    elem.scrollIntoView({behavior:"smooth"})


    fetch(`http://localhost:8000/dua_by_sub/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })

    
  }



  return (
    <div className="flex flex-row my-2">
            <div className="bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
            <div className="flex flex-col justify-start items-start">
              <Link href={`${fullPath}&subcat=${id}`}>
                <p onClick={handleDua} className={`${subcat===id ? "text-primary" : "text-black"} cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs`}>
                  {name}
                </p>
              </Link>
              {subcat===id && data ? <div className='mt-2 cursor-pointer'>
                    {data.map(dua=>(<DuaSelector key={"dua"+dua.dua_name_en} name={dua.dua_name_en} dua_id={dua.dua_id} fullPath={`${fullPath}&subcat=${id}`}/>))}  
              </div>:""}

            </div>
          </div>
  )
}

export default SubCategory