import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../../Context/CartContext/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  const navOptions = (
    <>
      <li className="mr-5 uppercase font-bold">
        <Link>
          <a>Home</a>
        </Link>
      </li>
      <li className="mr-5 uppercase font-bold">
        <Link>
          <a>About</a>
        </Link>
      </li>
      <li className="mr-5 uppercase font-bold">
        <Link >
          <a>Menu</a>
        </Link>
      </li>
      <li className="mr-5 uppercase font-bold">
        <Link>
          <a>Gallery</a>
        </Link>
      </li>
    </>
  );
  return (
    <div id="Navbar-part" className="bg-[#1a213096] text-white fixed z-10 w-full">
      <Container>
        {" "}
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow  rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className="lg:text-3xl uppercase font-bold sm:text-xl">
              Mayan Food
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>

          <div className="navbar-end">
            <button className="btn me-2">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge text-white bg-[#BB8506]">{cart.length}</div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
