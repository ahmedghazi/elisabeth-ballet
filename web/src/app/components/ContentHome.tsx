import React from "react";
import { Home } from "../types/schema";
import ProjectCard from "./ProjectCard";
import Grid from "./ui/Grid";
import ProjectsGrid from "./ProjectsGrid";

type Props = {
  input: Home;
};

const ContentHome = ({ input }: Props) => {
  return (
    <div className='content--home'>
      <ProjectsGrid input={input.featuredProjects} />
    </div>
  );
};

export default ContentHome;
