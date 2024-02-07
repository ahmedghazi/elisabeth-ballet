"use client";
import React from "react";
import { Project } from "../types/schema";
import { _localizeField } from "../utils/utils";
import { PortableText } from "@portabletext/react";
import components from "../utils/portableTextComponents";
import Figure from "./ui/Figure";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import useRouteUrlHistory from "../hooks/useRouteUrlHistory";

type Props = {
  input: Project;
};

const ContentProject = ({ input }: Props) => {
  const router = useRouter();
  // console.log(router.back());
  console.log(input.media);
  return (
    <div className='content--project'>
      {/* <pre>{JSON.stringify(input.media, null, 2)}</pre> */}
      <div className='grid grid-cols-2 md:gap-lg'>
        <div className='scrollable column--text column--left'>
          <div className='inner pr-md bg-white'>
            {/* <div className='ghost-spacer bg-white h-md'></div> */}
            <div className='flex gap-sm'>
              <div className='locale-side-note hidden-sm'>
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
                <div className='locale-side-note hidden-sm'>
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

          <Link href='/' className='back' onClick={() => router.back()}>
            {/* <Image
              src={"/arrow-sw.svg"}
              width={120}
              height={88}
              alt={"back home — retour à l'accueil"}
            /> */}
            <svg
              version='1.1'
              id='Calque_1'
              xmlns='http://www.w3.org/2000/svg'
              width={113}
              height={136}
              x='0px'
              y='0px'
              viewBox='0 0 113.7 136.7'>
              <line id='Ligne_1' x1='0.7' y1='88' x2='112.7' y2='88' />
              <line id='Ligne_2' x1='0.7' y1='88' x2='48.7' y2='40' />
              <path id='Tracé_39' d='M0.7,88l48,48' />
              <line id='Ligne_4' x1='112.7' y1='0' x2='112.7' y2='88' />
            </svg>
          </Link>
        </div>
        {input.media && (
          <div>
            <div className='total hidden-sm'>
              /
              {input.media?.length < 10
                ? `0${input.media?.length}`
                : input.media?.length}
            </div>
            <div className='scrollable column--media'>
              <div className='inner '>
                {input.media?.length &&
                  input.media.map((item, i) => (
                    <div
                      key={item._key}
                      className='mb-md flex gap-lg media-item'>
                      <div className='pr-md hidden-sm index-wrapper'>
                        <div className='sticky top-md'>
                          {i < 9 ? `0${i + 1}` : i + 1}
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
