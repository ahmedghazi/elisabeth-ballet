"use client";
import React from "react";
import { Home } from "../types/schema";
import ProjectCard from "./ProjectCard";
import Grid from "./ui/Grid";
import ProjectsGrid from "./ProjectsGrid";
import { usePageContext } from "../context/PageContext";

type Props = {
  input: Home;
};

const ContentHome = ({ input }: Props) => {
  const { searchResult } = usePageContext();
  const data =
    searchResult && searchResult.length > 0
      ? searchResult
      : input.featuredProjects;
  return (
    <div className='content--home'>
      {/* <div className='scrollable '></div> */}
      <ProjectsGrid input={data} />
    </div>
  );
};

export default ContentHome;
