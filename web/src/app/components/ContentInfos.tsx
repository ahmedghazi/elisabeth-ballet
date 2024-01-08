"use client";
import React, { useEffect, useMemo } from "react";
import { Infos } from "../types/schema";
import { _localizeField, _slugify } from "../utils/utils";
import components from "../utils/portableTextComponents";
import { PortableText } from "@portabletext/react";
import Figure from "./ui/Figure";
import { usePageContext } from "../context/PageContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  input: Infos;
};

const ContentInfos = ({ input }: Props) => {
  const router = useRouter();

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
    <div className='content--infos '>
      <div className='grid grid-cols-2 md:grid-cols-6 md:gap-lg'>
        <div className='scrollable md:col-span-2 column--left'>
          {/* <div className='ghost-spacer bg-white h-md'></div> */}
          <div className='about md:sticky top-0'>
            <div className='chapo mb-md'>
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
            <div className='pdfs mt-xl'>
              <h2 className='mb-1e'>PDF</h2>
              <ul>
                {input.linksPDF?.map((item, i) => (
                  <li key={item._key}>
                    <a
                      href={item.file?.asset.url}
                      target='_blank'
                      rel='noopener noreferrer'>
                      {_localizeField(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href='/' className='back' onClick={() => router.back()}>
            <Image
              src={"/arrow-sw.svg"}
              width={120}
              height={88}
              alt={"back home — retour à l'accueil"}
            />
          </Link>
        </div>
        <div className='scrollable md:col-span-4 column--right'>
          {/* <div className='ghost-spacer bg-white h-md'></div> */}
          <div className='cv text-center mb-md'>
            {input.cv?.map((item, i) => (
              <div
                key={item._key}
                className='mb-lg cv-group'
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

          <div className='media'>
            {input.media?.length &&
              input.media.map((item, i) => (
                <div key={item._key} className='mb-md'>
                  <Figure
                    asset={item.asset}
                    width={500}
                    alt={item.asset.originalFilename}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInfos;
