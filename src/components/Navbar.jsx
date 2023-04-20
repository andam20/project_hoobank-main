import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import { close, koya, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(navLinks.title);
  const [toggle, setToggle] = useState(false);

  const [logo, setLogo] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = '/login';
    } else {
      fetch('http://192.168.1.109/collage-project/public/api/company-name', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
        .then(response => response.json())
        .then(json =>setLogo(json))
        .catch(e => console.log(e));
    }
  },[]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={`http://192.168.1.109/collage-project/public${logo.image_url}`} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.path}`}>
              <a className={` ${nav.id==="Add Expense"? "p-1 px-2 text-[25px] bg-blue-gradient text-black rounded-[10px] font-semibold":""}`}>{nav.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px]  ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.path}`}>
                <a className={` ${nav.id==="Add Expense"? "p-1 px-3 text-[25px] bg-blue-gradient text-[#11101d] font-semibold rounded-xl":""}`} href={`#${nav.id}`}>{nav.title}</a>
                </Link>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
