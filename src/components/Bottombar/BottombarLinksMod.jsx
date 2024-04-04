import Link from "next/link";
const BottombarLinksMod = ({path,icon}) => {
  return (
    <Link className="" href={path}>
            <div className="p-2 flex flex-row items-center">
              <img src={icon} alt={path} className="h-5 w-5" />
            </div>
          </Link>
  )
}

export default BottombarLinksMod