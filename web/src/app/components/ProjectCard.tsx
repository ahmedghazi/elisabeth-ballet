"use client";
import React, { useEffect } from "react";
import { Project } from "../types/schema";
import { _linkResolver, _localizeField } from "../utils/utils";
import Figure from "./ui/Figure";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import components from "../utils/portableTextComponents";
// import { motion, useAnimation, useAnimationControls } from "framer-motion";
// import { subscribe, unsubscribe } from "pubsub-js";
import { usePathname } from "next/navigation";
import website from "../config/website";

type Props = {
  input: Project | any;
};

const ProjectCard = ({ input }: Props) => {
  // const controls = useAnimationControls();
  const pathname = usePathname();

  // const variants = {
  //   show: (custom: number) => ({
  //     opacity: 1,
  //     transition: { delay: custom },
  //   }),
  // };

  // useEffect(() => {
  //   if (
  //     !document.body.classList.contains("is-loading") ||
  //     window.innerWidth < 1080
  //   ) {
  //     controls.start("show");
  //   }
  //   const token = subscribe("REVEAL", () => {
  //     controls.start("show");
  //   });

  //   return () => {
  //     unsubscribe(token);
  //   };
  // }, []);

  return (
    <article className='project-card'>
      {/* <motion.div
        initial={{ opacity: "0" }}
        custom={Math.random() * 1}
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, type: "tween" }}> */}
      <Link href={`${_linkResolver(input)}?referer=${pathname}`}>
        <Figure
          asset={input.imageCover?.asset}
          width={30600}
          alt={input.title}
        />
        <div className='infos text-center py-sm-'>
          <h2>{input.title}</h2>
          <PortableText
            value={_localizeField(input.description)}
            components={components}
          />
        </div>
      </Link>
      {/* </motion.div> */}
    </article>
  );
};

export default ProjectCard;
