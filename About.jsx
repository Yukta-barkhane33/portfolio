import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a enthusiastic and dedicated engineering student pursuing a degree in Information Technology. With a passion for technology and a curiosity for how things work, I am constantly exploring and learning about the latest advancements in the field.

I possesses a strong foundation in computer science and programming, which enables her to develop innovative solutions to real-world problems. I excels in various programming languages, such as Java, Python, and C++, and enjoys applying her coding skills to develop software applications and web-based projects.
        </p>

        <br />

        <p className="text-xl">
        Apart from her technical skills, I possesses excellent communication and interpersonal abilities. She can effectively convey complex technical concepts to both technical and non-technical audiences, making her a valuable asset in team settings and client interactions.
        </p>
      </div>
    </div>
  );
};

export default About;