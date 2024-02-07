import React from "react";
import { Metadata } from "next";
import {
  getPageModulaire,
  pageModulaireQuery,
} from "@/app/utils/sanity-queries";
import website from "@/app/config/website";
import { draftMode } from "next/headers";
import { PageModulaire } from "@/app/types/schema";
import { getClient } from "@/app/utils/sanity-client";
import ContentPage from "@/app/components/ContentPage";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getPageModulaire(params.slug);
  return {
    title: `${data?.seo?.metaTitle || data?.title?.fr || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  // const data = await getPageModulaire(params.slug);
  // console.log(params.slug);

  const { isEnabled: preview } = draftMode();
  let data: PageModulaire;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      pageModulaireQuery,
      params
    );
  } else {
    data = (await getPageModulaire(params.slug)) as PageModulaire;
  }

  if (!data) return <div className='py-md'>Page not found</div>;
  return (
    <div className='template--page-modulaire' data-template='page-modulaire'>
      <ContentPage input={data} />
    </div>
  );
};

export default Page;
