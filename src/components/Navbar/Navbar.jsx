import { useState } from "react";
import Link from "./Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { name: "Home", id: "home_page_123", path: "/home" },
    { name: "About", id: "about_page_456", path: "/about" },
    { name: "Services", id: "services_page_789", path: "/services" },
    { name: "Contact", id: "contact_page_101", path: "/contact" },
    { name: "Portfolio", id: "portfolio_page_202", path: "/portfolio" },
  ];

  return (
    <nav className="text-black bg-[#69f096] p-5">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        ) : (
          <HiMenuAlt1></HiMenuAlt1>
        )}
      </div>
      <ul className={`md:flex duration-500 absolute left-0 md:static
      ${open === true ? "top-12 font-bold concert text-xl py-3":"-top-60"}
      bg-[#69f096] px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
