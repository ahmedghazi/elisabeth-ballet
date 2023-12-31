"use client";
import React from "react";
import { Project } from "../types/schema";
import { _localizeField } from "../utils/utils";
import { PortableText } from "@portabletext/react";
import components from "../utils/portableTextComponents";
import Figure from "./ui/Figure";

type Props = {
  input: Project;
};

const ContentProject = ({ input }: Props) => {
  return (
    <div className='content--project'>
      {/* <pre>{JSON.stringify(input.media, null, 2)}</pre> */}
      <div className='grid grid-cols-2 gap-lg'>
        <div className='scrollable'>
          <div className='inner pr-md bg-white'>
            <div className='ghost-spacer bg-white h-md'></div>
            <div className='flex gap-sm'>
              <div className='locale-side-note'>
                <div className='sticky top-md'>Fr</div>
              </div>
              <div>
                <div className='header mb-md text-center'>
                  <h1>{input.title}</h1>
                  <div className='description'>
                    <PortableText
                      value={_localizeField(input.description)}
                      components={components}
                    />
                  </div>
                </div>
                {input.chapo && (
                  <div className='chapo'>
                    <div className='text'>
                      <PortableText
                        value={_localizeField(input.chapo)}
                        components={components}
                      />
                    </div>
                  </div>
                )}
                {input.text?.fr && (
                  <div className='text mb-md'>
                    <PortableText
                      value={input.text?.fr}
                      components={components}
                    />
                  </div>
                )}
              </div>
            </div>

            {input.text?.en && (
              <div className='flex gap-sm'>
                <div className='locale-side-note'>
                  <div className='sticky top-md'>En</div>
                </div>
                <div className='text '>
                  <PortableText
                    value={input.text?.en}
                    components={components}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {input.media && (
          <div>
            <div className='total'>
              {input.media?.length < 10
                ? `0${input.media?.length}`
                : input.media?.length}
            </div>
            <div className='scrollable'>
              <div className='inner '>
                <div className='ghost-spacer bg-white h-md'></div>

                {input.media?.length &&
                  input.media.map((item, i) => (
                    <div key={item._key} className='mb-md flex gap-lg'>
                      <div className='pr-md'>
                        <div className='sticky top-md'>
                          {i < 10 ? `0${i + 1}` : i}
                        </div>
                      </div>
                      {item.asset && (
                        <Figure
                          asset={item.asset}
                          width={1500}
                          alt={item.asset?.originalFilename || input.title}
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentProject;
