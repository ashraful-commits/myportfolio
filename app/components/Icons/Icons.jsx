import Link from "next/link";

const Icons = ({ icon, link }) => {
  return (
    <Link
      href={link}
      className="inline-block p-2  group hover:shadow-2xl hover:shadow-white shadow-white border rounded-full border-blue-300  cursor-pointer hover:bg-blue-500"
    >
      <span className=" text-xl text-gray-700  group-hover:text-white  dark:text-white">
        {icon}
      </span>
    </Link>
  );
};

export default Icons;
