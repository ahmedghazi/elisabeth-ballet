import React from "react";
import website from "@/app/config/website";
import { Project } from "@/app/types/schema";
import { getProject, projectQuery } from "@/app/utils/sanity-queries";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getClient } from "@/app/utils/sanity-client";
import ContentProject from "@/app/components/ContentProject";

type PageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 3600; // revalidate every hour
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getProject(params.slug);
  return {
    title: data?.seo?.metaTitle || data.title,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const { isEnabled: preview } = draftMode();
  let data: Project;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      projectQuery,
      params
    );
  } else {
    data = await getProject(params.slug);
  }

  if (!data) return <div className='py-md'>Page not found</div>;
  return (
    <div className='template--project' data-template='project'>
      <ContentProject input={data} />
    </div>
  );
};

export default Page;
