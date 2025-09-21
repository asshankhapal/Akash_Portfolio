import React from "react";
import { achievements } from "../../constants"; // Import your data

const Achievement = () => {
  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Recognition and awards that highlight my dedication to excellence and innovation
        </p>
      </div>

      {/* Achievement Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Achievement Entries */}
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Organization Logo/Image */}
                <div className="w-12 h-12 bg-white rounded-md overflow-hidden flex items-center justify-center p-1">
                  <img
                    src={achievement.img}
                    alt={achievement.organization}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title, Organization, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {achievement.title}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {achievement.organization}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{achievement.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{achievement.description}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Category:</h5>
                <span className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-400">
                  {achievement.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
