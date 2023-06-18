import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Welcome to my portfolio, Hello my name  is Yukta Barkhane, I m an engineering student in Information Technology from Jabalpur Engineering College. I m thrilled to present my portfolio, which showcase my skills, knowledge, and passion. Throughout my academic journey I've been a good learner, and tried to gain a strong foundation in technical concepts and problem solving techniques, I m also a content writer and  corporate head in E-cell of my college, As an passionate learner, always eager to expand my knowledge, skills and experience in more better way in the technical field.
           
          </p>

          <div>
            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto m-right:0.25 w-2/3 md:w-1/2"
          />
        </div>

        
      </div>
    </div>
  );
};

export default Home;