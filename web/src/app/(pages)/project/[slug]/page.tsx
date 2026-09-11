import React, { JSX } from "react";
import website from "@/app/config/website";
import { Project } from "@/app/types/schema";
import { getProject, PROJECT_QUERY } from "@/app/utils/sanity-queries";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import { getClient } from "@/app/utils/sanity.client";
import ContentProject from "@/app/components/ContentProject";
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
  const data = await getProject(slug);
  return {
    title: data?.seo?.metaTitle || data.title,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const { isEnabled } = await draftMode();
  const { slug } = await params;

  let data: Project;
  if (isEnabled) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      PROJECT_QUERY,
      { slug },
    );
  } else {
    data = await getProject(slug);
  }

  if (!data) return notFound();
  return (
    <div className='template--project' data-template='project'>
      <ContentProject input={data} />
    </div>
  );
};

export default Page;
