import React from "react";
import { useState } from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import { projectsData } from "../../constants/projectData";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);

  const visibleProjects = viewMore ? projectsData : projectsData.slice(0, 3);

  const handleViewMore = () => {
    setViewMore(true);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time by default
    slidesToScroll: 1,
    rows: viewMore ? 2 : 1, // Show 2 rows when View More is clicked
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on medium screens
          rows: 1, // Keep 1 row on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on small screens
          rows: 1, // Keep 1 row on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on extra small screens
          rows: 1, // Keep 1 row on extra small screens
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
        <Slider {...settings}>
          {/* Display projects up to the number of visibleProjects */}

          {visibleProjects.map((project, index) => (
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
      </div>
      {/* Show View More button only if viewMore is false */}
      {!viewMore && (
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleViewMore}
            className="w-full h-12 bg-[#141518] rounded-lg text-base
            text-gray-400 tracking-wider uppercase hover:text-white duration-300
            hover:border-[1px] hover:border-designColor border-transparent"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* Display message when all projects are visible */}
      {viewMore && (
        <div className="flex justify-center items-center mt-8">
          <p className="text-xl text-gray-500">No more projects</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
