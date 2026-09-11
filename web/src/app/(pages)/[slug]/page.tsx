import React, { JSX } from "react";
import { Metadata } from "next";
import {
  getPageModulaire,
  PAGE_MODULAIRE_QUERY,
} from "@/app/utils/sanity-queries";
import website from "@/app/config/website";
import { draftMode } from "next/headers";
import { PageModulaire } from "@/app/types/schema";
import { getClient } from "@/app/utils/sanity.client";
import ContentPage from "@/app/components/ContentPage";
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
  const { slug } = await params;
  const data = await getPageModulaire(slug);
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
  const { slug } = await params;

  // const data = await getPageModulaire(params.slug);
  // console.log(params.slug);

  const { isEnabled: preview } = await draftMode();
  let data: PageModulaire;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      PAGE_MODULAIRE_QUERY,
      { slug },
    );
  } else {
    data = (await getPageModulaire(slug)) as PageModulaire;
  }

  if (!data) return notFound();
  return (
    <div className='template--page-modulaire' data-template='page-modulaire'>
      <ContentPage input={data} />
    </div>
  );
};

export default Page;
