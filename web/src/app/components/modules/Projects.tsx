import { Project } from "@/app/types/schema";
import clsx from "clsx";
import React from "react";
import ProjectCard from "../ProjectCard";
import ProjectsGrid from "../ProjectsGrid";

type Props = {
  input: {
    items: Project[];
  };
};

const Projects = ({ input }: Props) => {
  return (
    <div className='module--projects'>
      <ProjectsGrid input={input.items} />
    </div>
  );
};

export default Projects;
