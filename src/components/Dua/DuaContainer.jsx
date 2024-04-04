
import DuaSectionHeader from "./DuaSectionHeader"
import DuaCardContainer from "./DuaCardContainer"


async function getData(id) {
  const res = await fetch(`http://www.localhost:8000/category/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  return res.json()
}

const DuaContainer = async ({cat}) => {
  const categories=await getData(cat);


  return (
    
     categories.map(cat=>(<><DuaSectionHeader section={cat.subcat_id} heading={cat.subcat_name_en} />
      <DuaCardContainer subcat={cat.subcat_id}/>
     </>))
    
  )
}

export default DuaContainer