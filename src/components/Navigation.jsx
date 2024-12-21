import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 import { Link } from "react-router";
function NavList() {
  const [active, setActive] = React.useState(0);
  const menu = ["Home", "Categories", "Contact Us", "About Us"];
  const links = ["/", "/categories", "/contact-us", "/about-us"];
  return (
    <ul className="my-2 flex flex-col uppercase text-base gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menu.map((option, index) => (
        <Typography
          as="li"
          key={index}
          variant="small"
          color="blue-gray"
          className={`p-1 font-medium ${
            active === index ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActive(index)}
        >
          <Link to={links[index]} className="inline-block hover:text-gray-300 active:text-white  transition-colors" >
            <h3>{option}</h3>
          </Link>
        </Typography>
      ))}

    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="w-ful z-50 bg-blue-500 max-w-full px-6 md:px-32 sticky top-0 py-3 rounded-none border-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer text-2xl py-1.5"
        >
          Shopify
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto  h-10 w-10 flex justify-center items-center text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-8 w-8" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-7 w-7" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;