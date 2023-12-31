import ContentProject from "@/app/components/ContentProject";
// import PreJson from "@/app/components/ui/PreJson";
import website from "@/app/config/website";
import { Project } from "@/app/types/schema";
import { getProject, projectQuery } from "@/app/utils/sanity-queries";
import { Metadata } from "next";
import React from "react";
import { draftMode } from "next/headers";
import { getClient } from "@/app/utils/sanity-client";

type PageProps = {
  params: {
    slug: string;
  };
};

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
  // const data = await getProject(params.slug);
  // console.log(params.slug);
  const { isEnabled: preview } = draftMode();
  let data: Project;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      projectQuery,
      params
    );
  } else {
    data = (await getProject(params.slug)) as Project;
  }

  if (!data) return <div>please edit page</div>;
  return (
    <div className='template--project '>
      <ContentProject input={data} />
      {/* <PreJson input={data} /> */}
    </div>
  );
};

export default Page;
