import website from "@/app/config/website";
import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import React, { useState } from "react";
import { SanityImageAsset } from "sanity-codegen";

type Props = {
  asset: SanityImageAsset | any;
  width?: number;
  alt?: string | any;
};

const Figure = ({ asset, width = 1000, alt = website.title }: Props) => {
  console.log(asset);
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <figure
      style={{
        aspectRatio: `${asset?.metadata?.dimensions.width} / ${asset?.metadata?.dimensions.height}`,
        width: "100%",
        height: "auto",
      }}>
      <Image
        src={urlFor(asset, width)}
        width={asset?.metadata?.dimensions.width || width}
        height={asset?.metadata?.dimensions.height || width}
        alt={alt || ""}
        sizes='100vw'
        className={loaded ? "is-loaded" : "is-loading"}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: `${asset?.metadata?.dimensions.width} / ${asset?.metadata?.dimensions.height}`,
          // objectFit: "cover",
        }}
        blurDataURL={asset?.metadata?.lqip}
        // placeholder='blur'
        placeholder={asset?.metadata?.lqip}
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
};

export default Figure;
