"use client";
import React, { useEffect } from "react";
import { Project } from "../types/schema";
import { _linkResolver, _localizeField } from "../utils/utils";
import Figure from "./ui/Figure";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import components from "../utils/portableTextComponents";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { subscribe, unsubscribe } from "pubsub-js";

type Props = {
  input: Project | any;
};

const ProjectCard = ({ input }: Props) => {
  const controls = useAnimationControls();
  const variants = {
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom },
    }),
  };

  useEffect(() => {
    if (!document.body.classList.contains("is-loading")) {
      controls.start("show");
    }
    const token = subscribe("REVEAL", () => {
      controls.start("show");
    });

    return () => {
      unsubscribe(token);
    };
  }, []);

  return (
    <article className='project-card'>
      <motion.div
        // animate={controls}
        // variants={variants}
        initial={{ opacity: "0", y: -10 }}
        // // animate={{ opacity: "1" }}
        // animate='show'
        // transition={{ delay: Math.random() * 3 }}

        custom={Math.random() * 2}
        animate={controls}
        variants={variants}
        transition={{ duration: 0.3 }}>
        <Link href={_linkResolver(input)}>
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
      </motion.div>
    </article>
  );
};

export default ProjectCard;
