import Link from "next/link"

const SidebarLink = ({to,icon,alt}) => {
  return (
    <Link href={to}>
      <div
        className="justify-center items-center  cursor-pointer my-2 transition hover:scale-105 flex flex-row w-full rounded-lg"
      >
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-[#E8F0F5] flex p-2 rounded-full items-center h-10 w-10 justify-center">
            <img src={icon} alt={alt} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarLink;
