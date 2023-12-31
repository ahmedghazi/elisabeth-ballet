"use client";
import React, { useEffect, useMemo } from "react";
import { Infos } from "../types/schema";
import { _localizeField, _slugify } from "../utils/utils";
import components from "../utils/portableTextComponents";
import { PortableText } from "@portabletext/react";
import Figure from "./ui/Figure";
import { usePageContext } from "../context/PageContext";

type Props = {
  input: Infos;
};

const ContentInfos = ({ input }: Props) => {
  const cvMenu = input.cv
    ? input.cv.map((item) => {
        return {
          title: _localizeField(item.title),
          slug: _slugify(_localizeField(item.title)),
        };
      })
    : [];

  // console.log(cvMenu);

  //wrapper context send cvMenu to Header
  // cleanup
  const { setNavInfos } = usePageContext();

  useEffect(() => {
    if (cvMenu && setNavInfos) setNavInfos(cvMenu);
    return () => {
      if (setNavInfos) setNavInfos([]);
    };
  }, []);

  return (
    <div className='content--infos'>
      <div className='grid grid-cols-2 gap-lg'>
        <div className='scrollable'>
          <div className='ghost-spacer bg-white h-md'></div>
          <div className='about sticky top-md'>
            <div className='chapo text-center mb-md'>
              <PortableText
                value={_localizeField(input.chapo)}
                components={components}
              />
            </div>
            <div className='text'>
              <PortableText
                value={_localizeField(input.text)}
                components={components}
              />
            </div>
          </div>
          <div className='media'>
            {input.media?.length &&
              input.media.map((item, i) => (
                <div key={item._key} className='mb-md'>
                  <Figure
                    asset={item.asset}
                    width={1500}
                    alt={item.asset.originalFilename}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className='scrollable'>
          <div className='ghost-spacer bg-white h-md'></div>
          <div className='cv text-center'>
            {input.cv?.map((item, i) => (
              <div
                key={item._key}
                className='mb-lg'
                id={_slugify(_localizeField(item.title))}>
                <div className='title mb-md'>{_localizeField(item.title)}</div>
                {item.items?.map((_item, i) => (
                  <div key={_item._key} className='mb-md'>
                    <div className='key'>{_item.key}</div>
                    <div className='val'>
                      <PortableText
                        value={_localizeField(_item.val)}
                        components={components}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInfos;
