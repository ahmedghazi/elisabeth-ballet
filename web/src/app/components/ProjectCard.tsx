"use client";
import React from "react";
import { Project } from "../types/schema";
import { _linkResolver, _localizeField } from "../utils/utils";
import Figure from "./ui/Figure";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import components from "../utils/portableTextComponents";

type Props = {
  input: Project | any;
};

const ProjectCard = ({ input }: Props) => {
  return (
    <article className='project-card'>
      <Link href={_linkResolver(input)}>
        <Figure asset={input.imageCover?.asset} width={600} alt={input.title} />
        <div className='infos text-center py-sm'>
          <h2>{input.title}</h2>
          <PortableText
            value={_localizeField(input.description)}
            components={components}
          />
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
