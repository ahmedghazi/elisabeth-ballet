"use client";
import React from "react";
import dynamic from "next/dynamic";
const TexteUI = dynamic(() => import("./TexteUI"), { ssr: false });

import "./index.scss";
import Projects from "./Projects";

const Modules = ({ input }: any) => {
  // console.log(input);
  const _renderModules = () => {
    // console.log(input);
    const _modules = input.map((module: any, i: number) => {
      switch (module._type) {
        case "moduleText":
          return <TexteUI key={module._key} input={module} />;

        case "moduleProjects":
          return <Projects key={module._key} input={module} />;

        default:
          return null;
      }
    });
    return _modules;
  };

  return <div className='modules flex- flex-wrap '>{_renderModules()}</div>;
};

export default Modules;
