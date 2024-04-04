import SearchBox from "@/components/SearchBox";
import Category from "@/components/Category/Category";

async function getData() {
  const res = await fetch('https://ird-beckend.onrender.com/all_categories')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  return res.json()
}




const layout = async ({ children }) => {

  const categories=await getData()

  
  return (
      <div className="md:z-[-3] md-max:flex md-max:w-full lg-min:grid-cols-[350px,1fr] lg:gap-6 lg:z-[-2] xl-min:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl-min:w-full 3xl:gap-x-6 3xl:z-[-16]  grid xs:mx-auto sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
        <div className="md:mt-4 lg:mt-2 fixed h-[85.5vh] z-[0] lg:top-[119px] lg:w-[350px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[350px] overflow-hidden bg-white rounded-2lg dark:bg-dark-bg xs:hidden sm:hidden md:hidden xs:h-screen sm:h-screen lg:h-[74vh]">
          <div className="fixed w-[350px] rounded-t-2lg bg-primary justify-center items-center h-14 flex flex-row px-5">
            <p className="text-base text-white mx-auto">Categories</p>
          </div>
          <div className="fixed w-[350px] mt-14">
            <SearchBox />
            <div
              className="h-[calc(100vh-32vh)] lg:h-[calc(100vh-45.5vh)] 3xl:h-[68vh]
                 scrl-cat pb-8  mb-4 overflow-hidden"
            >
              <div className="mt-4">
               {categories.map(cat=>(<Category key={cat.id+"categorries"} id={cat.cat_id} dua={cat.no_of_dua} name={cat.cat_name_en} sub={cat.no_of_subcat} />))} 
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
  


  );
};

export default layout;
