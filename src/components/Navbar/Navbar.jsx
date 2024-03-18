import Link from "./Link";

const Navbar = () => {
  const routes = [
    {name: "Home", id: "home_page_123", path: "/home" },
    {name: "About", id: "about_page_456", path: "/about" },
    {name: "Services", id: "services_page_789", path: "/services"},
    {name: "Contact", id: "contact_page_101", path: "/contact" },
    {name: "Portfolio",id: "portfolio_page_202",path: "/portfolio"},
  ];

  return (
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
         <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
