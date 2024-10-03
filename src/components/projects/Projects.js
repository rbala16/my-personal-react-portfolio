import React, { useState } from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import { projectsData } from "../../constants/projectData";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);

  // const visibleProjects = viewMore ? projectsData : projectsData.slice(0, 3);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    autoplay: true, // Automatically slide to next project
    autoplaySpeed: 3000, // 3 seconds per slide
    slidesToShow: 3, // Show 3 slides at a time by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on extra small screens
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY RECENT PROJECTS" des="my Projects" />
      </div>

      <div className="w-full">
        {/* If viewMore is true, show all projects in grid layout */}
        {!viewMore ? (
          <Slider {...settings}>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                des={project.des}
                src={project.src}
                view={project.view}
                githubsrc={project.githubsrc}
              />
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                des={project.des}
                src={project.src}
                view={project.view}
                githubsrc={project.githubsrc}
              />
            ))}
          </div>
        )}
      </div>

      {/* Show View More button only if viewMore is false otherwise viewless */}
      
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleViewMore}
            className="w-full h-12 bg-[#141518] rounded-lg text-base
           text-gray-400 tracking-wider uppercase hover:text-white duration-300
           hover:border-[1px] hover:border-designColor border-transparent"
          >
            {viewMore ? "View Less Projects" : "View More Projects"}
          </button>
        </div>
      
    </section>
  );
};

export default Projects;
