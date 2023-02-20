import React from "react";
import image5 from "../assets/image5.png";

const About = () => {
  return (
    <div
      id="about"
      className=" text-center w-full md:h-screen flex items-center p-2 py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4">By traders, To traders to be.</h2>
          <h2></h2>
          <p className="text-xl font-bold text-[#90185c]">
            Building India's one and only trading ecosystem.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            cumque est repellendus, totam voluptate.
            <br />
            Ut architecto cupiditate ipsum minus minima? Officiis aliquid sunt
            repellendus optio delectus aspernatur ab, doloremque sed labore
            perspiciatis corporis quaerat culpa neque? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Possimus assumenda, voluptatum
            cupiditate amet suscipit facere corporis aspernatur maxime
            reprehenderit quibusdam vel consequatur, eveniet eos deleniti. Iste
            culpa omnis odio sequi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta ratione esse sed molestiae laboriosam
            reprehenderit voluptates beatae sint quae exercitationem natus
            ducimus, alias modi, libero pariatur, ea cumque repellendus. Optio.
          </p>
        </div>
        <div className="p-5">
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center  hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={image5} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
