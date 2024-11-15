import { useState } from "react";
import logobg from "../assets/imgs/logobg.png";
import { Link } from "react-router-dom";
import { useNavigateButton } from "../App";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo } = useNavigateButton();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="  w-full bg-[#3899ec] ">
        <div className="py-5 space-y-3">
          <div className="border-4 border-white "></div>
          <div className="border-2 border-white "></div>
        </div>

        <div className="flex justify-between items-center md:my-14 my-5 md:flex-row flex-col">
          <div className="md:w-[7%] w-full  flex items-center justify-center md:pb-0 pb-3">
            <Link to="/"><img src={logobg} alt="" className="md:w-full md:h-full w-20 h-20"/></Link>
          </div>
          <div className="text-center md:w-[80%] w-full flex items-center flex-col md:space-y-5 space-y-2">
            <h1 className="md:text-6xl text-base text-white coustard-regular font-black ">
            Exceptional Care
            </h1>
            <h1 className="md:text-4xl text-lg text-white open-sans font-medium  ">
              Assisted Living & Respite Home, LLC{" "}
            </h1>
            <h1 className="md:text-2xl text-base text-white open-sans font-medium  ">
              ("Loving Hearts Senior Living Home")
            </h1>
          </div>
          <div className="text-center w-[10%]  items-center flex-col md:block hidden"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[60%] ">
            <div className="border-2 border-dashed border-white my-3"></div>
          </div>
        </div>

        <nav className="flex  justify-center items-center ">
          <div className="md:w-[50%] w-full flex justify-between md:gap-0 gap-2 items-center coustard-regular  text-white  uppercase  md:px-0 px-5">
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigateTo("/")}>home</button>
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigateTo("/amenities")}>
              Amenities
            </button>
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigateTo("/gallerypage")}>
              Gallery
            </button>
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigateTo("/contactpage")}>
              Contact Us
            </button>
          </div>
        </nav>
        <div className="py-5 space-y-3">
          <div className="border-4 border-white "></div>
          <div className="border-2 border-white "></div>
        </div>
      </div>

      {/* <section className="">
        <nav className="p-4 lg:hidden fixed w-full z-[999] bg-white shadow-lg">
          <div className="flex items-center justify-between">
            <img src={logobg} alt="" className="h-16 w-16" />
            <button
              className="flex text-sec focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className={`${isOpen ? "block" : "hidden"} text-center mt-6`}>
            <ul className="items-center justify-between text-black uppercase text-lg font-medium leading-7 space-y-6 open-sans">
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("home")}
                  className="hover:text-sec"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("about")}
                  className="hover:text-sec"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("services")}
                  className="hover:text-sec"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("testimonial")}
                  className="hover:text-sec"
                >
                  Testimonial
                </button>
              </li>
            </ul>

            <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
              <button
                onClick={() => scrollToSectionWithOffset("contactus")}
                className="bg-gradient-to-r from-[#39DEFC] to-[#0774B5] rounded-lg py-2 px-6 open-sans uppercase text-white text-[17px]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </section> */}
    </>
  );
}

export default Navbar;