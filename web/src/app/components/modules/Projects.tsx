// import clsx from "clsx";
import React from "react";
// import ProjectCard from "../ProjectCard";
import ProjectsGrid from "../ProjectsGrid";
import { Project } from "@/app/types/schema";
import { usePageContext } from "@/app/context/PageContext";

type Props = {
  input: {
    items: Project[];
  };
};

const Projects = ({ input }: Props) => {
  const { searchResult } = usePageContext();
  const data =
    searchResult && searchResult.length > 0 ? searchResult : input.items;
  // console.log(searchResult, data);
  return (
    <div className='module--projects'>
      <ProjectsGrid input={data} />
    </div>
  );
};

export default Projects;
