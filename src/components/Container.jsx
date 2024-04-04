import MobileNavigation from "./MobileNavigation"

const Container = ({children}) => {
  return (
    <div className="sm-max:w-full sm-max:px-2  md:w-[96%] md:mx-auto md:z-[-3] lg:w-[calc(100vw_-_100px)] lg:z-[-2] lg:mx-auto xl:-z-[4] xl:col-span-3 2xl:col-span-2 2xl:w-[101%] 3xl:col-span-2 3xl:col-start-2 3xl:z-[-12] -z-[1] xs:z-0 sm:z-0 3xl:w-[101%] grid xs:mx-auto sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
        <div className="w-full sm-max:overflow-y-auto scrl sm-max:pb-20 md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto lg:pb-6 lg:pt-24 lg:col-start-2 xl-min:pb-8 xl:w-full sm:mt-0 md:mt-20 lg-min:w-[101%]">
            <MobileNavigation/>
            {children}
        </div>
    </div>
  )
}

export default Container