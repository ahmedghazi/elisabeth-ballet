"use client";
import React, { useMemo, useState } from "react";
import { Project } from "../types/schema";
import ProjectCard from "./ProjectCard";
import { usePageContext } from "../context/PageContext";

type Props = {
  input: Project[] | any;
};

const ProjectsGrid = ({ input }: Props) => {
  const interval = 3;
  // const newArr = input.flatMap((w: Project, i: number) => {
  //   const blankElem = {
  //     _type: "blank",
  //     _id: Math.round(Math.random() * 100),
  //   };
  //   return (i + 1) % interval === 0 ? [w, blankElem] : w;
  // });
  // console.log(blankElem);
  // console.log(newArr);

  const newArr = useMemo(() => {
    return input.flatMap((w: Project, i: number) => {
      const blankElem = {
        _type: "blank",
        _id: Math.round(Math.random() * 100),
      };
      return (i + 1) % interval === 0 ? [w, blankElem] : w;
    });
  }, []);

  const { searchResult } = usePageContext();
  console.log(searchResult);
  return (
    <div className='grid gap-x-md gap-y-lg md:grid-cols-6'>
      {searchResult &&
        searchResult.length > 0 &&
        searchResult.map((item: Project | any, i: number) => (
          <div key={item._id + "-" + i}>
            <ProjectCard input={item} />
          </div>
        ))}
      {searchResult &&
        searchResult.length === 0 &&
        newArr.map((item: Project | any, i: number) => (
          <div key={item._id + "-" + i}>
            {item._type === "blank" && <article className='blank'></article>}
            {item._type === "project" && <ProjectCard input={item} />}
          </div>
        ))}
      {/* <pre>{JSON.stringify(newArr, null, 2)}</pre> */}
    </div>
  );
};

export default ProjectsGrid;
