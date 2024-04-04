import Link from "next/link";

const BottombarLinks = ({path,icon}) => {
  return (
    <Link href={path}>
            <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
              <img src={icon} alt={path} />
            </div>
          </Link>
  )
}

export default BottombarLinks