import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import React from "react";
import { SanityImageAsset } from "sanity-codegen";

type Props = {
  asset: SanityImageAsset | any;
  width: number;
  alt: string | any;
};

const Figure = ({ asset, width = 1000, alt }: Props) => {
  return (
    <figure>
      <Image
        src={urlFor(asset, width)}
        width={asset?.metadata?.dimensions.width || width}
        height={asset?.metadata?.dimensions.height || width}
        alt={alt || ""}
        sizes='100vw'
        style={
          {
            // width: "100%",
            // height: "auto",
            // aspectRatio: autoHeight ? "none" : "1 / 1",
            // objectFit: "cover",
          }
        }
        blurDataURL={asset?.metadata?.lqip}
        placeholder='blur'
      />
    </figure>
  );
};

export default Figure;
