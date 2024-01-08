"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Project } from "../types/schema";
import ProjectCard from "./ProjectCard";
import { usePageContext } from "../context/PageContext";

type Props = {
  input: Project[] | any;
};

const ProjectsGrid = ({ input }: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  // let interval = 3;
  // const intVal = useMemo(() => {
  //   return [1, 3, 5, 4].sort((a, b) => 0.5 - Math.random());
  // }, []);

  const randomGrid = useMemo(() => {
    return input.flatMap((w: Project, i: number) => {
      const blankElem = {
        _type: "blank",
        _id: Math.round(Math.random() * 100),
      };
      const interval = 1 + Math.round(Math.random() * 2);
      // const interval = intVal[i] || 2;
      return (i + 1) % interval === 0 ? [w, blankElem] : w;
    });
  }, [input]);

  useEffect(() => {
    setReady(true);
  }, []);

  // console.log(input);
  return (
    <div className='projects-grid grid gap-x-md gap-y-lg md:grid-cols-6'>
      {ready &&
        randomGrid.map((item: Project | any, i: number) => (
          <div key={item._id + "-" + i}>
            {item._type === "blank" && <article className='blank'></article>}
            {item._type === "project" && <ProjectCard input={item} />}
          </div>
        ))}
    </div>
  );
};

export default ProjectsGrid;
