import { groq } from "next-sanity";
import { client } from "./sanity-client";
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
export const cachedClient = cache(client.fetch.bind(client));

export async function getSettings(): Promise<Settings> {
  return client.fetch(
    groq`*[_type == "settings"][0]{
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

    }`
  );
}

export async function getTags(): Promise<Tag[]> {
  return client.fetch(
    groq`*[_type == "tag"]{
      ...,

    }`
  );
}

/**
 * HOME
 */

export const homeQuery = groq`*[_type == "home"][0]{
  ...,
  seo{
   ${seo}
  },

  featuredProjects[]->{
    ${projectCard}
  }

}`;
export async function getHome(): Promise<Home> {
  return client.fetch(homeQuery, {});
}

/**
 * IN?FOS
 */
export const infosQuery = groq`*[_type == "infos"][0]{
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
}`;
export async function getInfos(): Promise<Infos> {
  return client.fetch(infosQuery, {});
}

/**
 * PROJECT
 */
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      asset->
    }
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

}`;
export async function getProject(slug: string): Promise<Project> {
  return client.fetch(projectQuery, { slug: slug });
}

export const projectsCardQuery = groq`
  *[_type == "project"
  && !(_id in path("drafts.**"))
  ]{
    ${projectCard}
  } | order(_createdAt desc)
`;

export async function getProjectsCard(): Promise<Project[]> {
  return client.fetch(projectsCardQuery, {});
}

/**
 * TAGS
 */

/**
 * PAGE MODULAIRE
 */
export const pageModulaireQuery = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
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
}`;
export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  return cachedClient(pageModulaireQuery, { slug: slug });
}
