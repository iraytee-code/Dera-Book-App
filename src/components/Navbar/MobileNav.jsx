import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function MobileNav({ setNavMobile }) {
  return (
    <nav className="block md:hidden bg-black text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
        <Link to="/" onClick={() => setNavMobile(false)}>
          <li className="text-md">home</li>
        </Link>
        <Link to="/" onClick={() => setNavMobile(false)}>
          <li className="text-md"></li>
        </Link>

        <Link to="/" onClick={() => setNavMobile(false)}>
          <li className="text-md"></li>
        </Link>

        <Link to="/" onClick={() => setNavMobile(false)}>
          <li className="text-md"></li>
        </Link>
      </ul>
    </nav>
  );
}

export default MobileNav;
