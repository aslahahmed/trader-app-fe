import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-scroll";
import stars from "../assets/stars.png"

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-slate-800">
      <div className="max-w-[1240px] m-auto px- py-10 w-full text-center">
        <h2 className=" text-white font-bold">Do you have a question?</h2>
        <h2 className="py-1 text-white">Feel free to contact</h2>
        <div className="p-8 grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full">
            <div className="lg:h-full">
              <div>
                <h5 className="text-xl pt-5 text-white ">Connect With Me</h5>
                <div className="flex ml-20 gap-5 items-center mt-5">
                  <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <div className="w-[153px] flex gap-3">
                      <AiFillPhone className="text-[#ffb31b] mt-1" />
                      <p className=" text-white">+91 383 675 345</p>
                    </div>
                  </div>
                  <div className="rounded-ful p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <div className="flex gap-3">
                      <AiOutlineMail className="text-[#ffb31b] mt-1" />
                      <p className=" text-white">xyz@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
            <div className="flex flex-col items-center">
              <h1 className="text-white">4.7</h1>
              <p className="text-white">Ratings in Google business</p>
              <img src={stars} alt="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <footer>
          <hr />
          <div className="flex justify-between mt-4 px-16">
            <p className="py-8 font-thin text-white">
              &copy; Copyright 2022 | All rights reserved | Designed by Aslah
              Ahmed
            </p>
            <Link to="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-white" size={30} />
              </div>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
