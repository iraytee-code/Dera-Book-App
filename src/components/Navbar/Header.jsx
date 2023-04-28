import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="fixed right-0 left-0 top-0 w-full transition-all ease-in duration-30 z-50">
      <div className="container mx-auto px-10">
        <div className="flex py-3 items-center justify-between">
          <Link href="/">
            <h4 className="capitalize font-bold">DERA</h4>
          </Link>
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="md:hidden text-white text-3xl cursor-pointer"
          />
          <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
