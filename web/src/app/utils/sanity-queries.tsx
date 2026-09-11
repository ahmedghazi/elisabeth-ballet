import { defineQuery, groq } from "next-sanity";
import { sanityFetch } from "./sanity.client";
import {
  Home,
  Infos,
  PageModulaire,
  Project,
  Settings,
  Tag,
} from "../types/schema";
import {
  blockContent,
  moduleImage,
  moduleImages,
  moduleProjects,
  moduleRecits,
  moduleTrombi,
  projectCard,
  seo,
} from "./fragments";
import { cache } from "react";

// const clientFetch = cache(client.fetch.bind(client));
// export const cachedClient = cache(client.fetch.bind(client));

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]{
  ...,
  logo{
    ...,
    asset->
  },
  navPrimary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug
      }
    }
  },
  navSecondary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug
      }
    }
  },
}`);

export async function getSettings(): Promise<Settings> {
  return sanityFetch({
    query: SETTINGS_QUERY,
    tags: ["settings"],
  });
}

/**
 * TAGS_QUERY
 */

export const TAGS_QUERY = defineQuery(`*[_type == "tag"]{
  ...,
}`);
export async function getTags(): Promise<Tag[]> {
  return sanityFetch({
    query: TAGS_QUERY,
    tags: ["tag"],
  });
}

/**
 * eHOME_QUERY

 */

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0]{
  ...,
  seo{
   ${seo}
  },

  featuredProjects[]->{
    ${projectCard}
  }

}
  `);
export async function getHome(): Promise<Home> {
  return sanityFetch({
    query: HOME_QUERY,
    tags: ["home"],
  });
}

/**
 * INFOS_QUERY
 */
export const INFOS_QUERY = defineQuery(`*[_type == "infos"][0]{
  ...,
  seo{
   ${seo}
  },
  chapo {
    ${blockContent}
  },
  text {
    ${blockContent}
  },
  linksPDF[]{
    ...,
    file{
      ...,
      asset->{
        url
      }
    }
  },
  media[] {
    ...,
    asset->
  },
  cv[]{
    ...,
    items[]{
      ...,
      val{
        ${blockContent}
      }
    }
  }
}`);

export async function getInfos(): Promise<Infos> {
  return sanityFetch({
    query: INFOS_QUERY,
    tags: ["infos"],
  });
}

/**
 * PROJECT_QUERY
 */
export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },

  media[] {
    ...,
    asset->
  },
  description {
    ${blockContent}
  },
  chapo {
    ${blockContent}
  },
  text {
    ${blockContent}
  },

}`);
export async function getProject(slug: string): Promise<Project> {
  console.log("getProject => slug", slug);
  return sanityFetch({
    query: PROJECT_QUERY,
    qParams: { slug: slug },
    tags: ["project"],
  });
}

/**
 * PROJECTS_CARD_QUERY
 */
export const PROJECTS_CARD_QUERY = defineQuery(`
  *[_type == "project"
  && !(_id in path("drafts.**"))
  ]{
    ${projectCard}
  } | order(_createdAt desc)
`);

export async function getProjectsCard(): Promise<Project[]> {
  return sanityFetch({
    query: PROJECTS_CARD_QUERY,
    tags: ["project"],
  });
}

/**
 * PAGE PAGE_MODULAIRE_QUERY
 */
export const PAGE_MODULAIRE_QUERY =
  defineQuery(`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },
  modules[]{
    ...,
    // ${moduleImage},
    // ${moduleImages},
    ${moduleProjects},

  },
}`);
export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  return sanityFetch({
    query: PAGE_MODULAIRE_QUERY,
    qParams: { slug: slug },
    tags: ["pageModulaire"],
  });
}
