import React from "react";
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/app/utils/portableTextComponents";
import { _localizeField } from "@/app/utils/utils";
import clsx from "clsx";

const TexteUI = ({ input }) => {
  const { text, width, offset } = input;

  return (
    <section className='module module--text mb-xl'>
      <div className='row no-gutter-'>
        <div
          className={clsx(`col-md-${width} col-md-offset-${offset} col-xs-12`)}>
          <PortableText
            value={_localizeField(text)}
            components={portableTextComponents}
          />
        </div>
      </div>
    </section>
  );
};

export default TexteUI;
