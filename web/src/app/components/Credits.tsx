"use client";
import React from "react";
import { _localizeField, _localizeText } from "../utils/utils";
import { PortableText } from "@portabletext/react";
import { LocaleBlockContent } from "../types/schema";
import portableTextComponents from "@/app/utils/portableTextComponents";

type Props = {
  text: LocaleBlockContent;
};

const Credits = ({ text }: Props) => {
  // const {};
  return (
    <div className='credits'>
      <PortableText
        value={_localizeField(text)}
        components={portableTextComponents}
      />
      {/* <p>
        code —{" "}
        <a
          href='https://ahmedghazi.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Ahmed Ghazi
        </a>
      </p>
      <p>
        design —{" "}
        <a
          href='https://s-y-n-d-i-c-a-t.eu/'
          target='_blank'
          rel='noopener noreferrer'>
          Syndicat
        </a>
      </p> */}
    </div>
  );
};

export default Credits;
