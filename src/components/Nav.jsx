import { FaWhatsapp } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import Options from "./Options";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";

import { Link } from "react-router-dom";

function Nav() {
  let [ContentVisible, setContentVisible] = useState(false);

  let New = () => {
    setContentVisible(!ContentVisible);
  };

  return (
    <>
      <div className=" relative bg-[#d9d9d9]  w-[47.8rem] md:w-[79em] lg:w-[119rem] xl:w-[120rem] font-abc">
        <div className=" md:flex md:justify-items-cenetr lg:justify-items-center lg:flex  flex-wrap hidden md:p-5 lg:p-5">
          <button className="hover:bg-[#454411] hover:text-white md:w-[8rem] mt-[1rem] mb-[1rem] md:text-2xl  w-[3.1rem] font-rigot">
            {/* link page   */}
            <Link to="/old">Old</Link>
          </button>
          <button className="hover:bg-[#454411] hover:text-white md:w-[8rem] mt-[1rem] mb-[1rem] md:text-2xl w-[3rem] ml-[1.7rem]">
            <Link to="/new">New</Link>
          </button>
          <button className="hover:bg-[#454411] hover:text-white md:w-[8rem] mt-[1rem] mb-[1rem] md:text-2xl w-[4.6rem] ml-[1.7rem]">
            <Link to="/about_us">About Us</Link>
          </button>
          <button className="hover:bg-[#454411] hover:text-white md:w-[8rem] mt-[1rem] mb-[1rem] md:text-2xl w-[5rem] ml-[1.7rem]">
            <Link to="/contact_us">Contact Us</Link>
          </button>
        </div>

        <p className="flex justify-between flex-row md:hidden pt-[1rem] pb-[1rem] mb-[1rem]">
          <button
            onClick={New}
            className="text-4xl text-[#454411] float-left"
            id="toggleButton"
          >
            &#8801;
          </button>
          {ContentVisible && <Options></Options>}

          <img
            src="Logo.png"
            className="text-4xl text-[#454411] pb:[4rem] md:hidden h-[1rem]"
          ></img>

          <p className="text-[1.6rem] text-[#454411] flex flex-row mt-[0.5rem]">
            <FaWhatsapp className="mr-[0.6rem] text-3xl"></FaWhatsapp>
            <BsInstagram className="mr-[1rem]"></BsInstagram>
          </p>
        </p>
      </div>
    </>
  );
}

export default Nav;
