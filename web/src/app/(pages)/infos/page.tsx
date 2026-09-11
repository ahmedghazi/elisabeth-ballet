import React, { JSX } from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getClient } from "@/app/utils/sanity.client";
import { Infos } from "@/app/types/schema";
import { getInfos, INFOS_QUERY } from "@/app/utils/sanity-queries";
import website from "@/app/config/website";
import ContentInfos from "@/app/components/ContentInfos";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};
export const revalidate = 3600; // revalidate every hour
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getInfos();
  return {
    title: `${data?.seo?.metaTitle || data?.title || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  // const data = await getInfos(params.slug);
  // console.log(params.slug);

  const { isEnabled: preview } = await draftMode();
  let data: Infos;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      INFOS_QUERY,
      params,
    );
  } else {
    data = (await getInfos()) as Infos;
  }

  if (!data) return notFound();
  return (
    <div className='template--infos' data-template='infos'>
      <ContentInfos input={data} />
    </div>
  );
};

export default Page;
