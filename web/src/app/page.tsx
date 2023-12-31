import React from "react";
import { Metadata } from "next";
import { getHome, homeQuery } from "./utils/sanity-queries";
import { draftMode } from "next/headers";
import { Home } from "./types/schema";
import { getClient } from "./utils/sanity-client";
import ContentHome from "./components/ContentHome";
import website from "./config/website";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getHome();
  return {
    title: `${data?.seo?.metaTitle || data?.title?.fr || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Home: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  // const data = await getHome();
  // console.log(params.slug);

  const { isEnabled: preview } = draftMode();
  let data: Home;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      homeQuery,
      params
    );
  } else {
    data = (await getHome()) as Home;
  }

  if (!data) return <div>please edit page</div>;
  return (
    <div className='template--home' data-template='home'>
      <ContentHome input={data} />
    </div>
  );
};

export default Home;
