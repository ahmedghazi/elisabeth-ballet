import React from "react";
import locales from "../config/i18n";
import UseLocaleContext from "../context/LocaleContext";
import { Home, Infos, PageModulaire, Project, Tag } from "../types/schema";

export const _linkResolver = (
  node: Infos | PageModulaire | Home | Project | Tag | any
) => {
  // console.log(node);
  // console.log(node._type);
  if (!node || !node._type || node._type === "home") return "/";
  switch (node._type) {
    case "project":
      return `/project/${node.slug?.current}`;

    default:
      return `/${node.slug?.current}`;
  }
};

export const _localizeText = (text: string) => {
  // const locale = "fr"
  const { locale } = UseLocaleContext();
  const currentI18N = (locales as any)[`${locale}`];
  return currentI18N[text] ? currentI18N[text] : text;
};

export const _localizeField = (field: any) => {
  const { locale } = UseLocaleContext();
  // console.log(locale, field);
  if (!field) return "";
  return field && field[locale] ? field[locale] : field["fr"];
};

export const _preloadImages = (urls: Array<string | any>) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

export const siteNameTwoLines = (input: string) => {
  const parts = input?.split(" ") || ["agence", "eker"];
  return (
    <>
      <div>{parts[0]}</div>
      <div>{parts[1]}</div>
    </>
  );
};

export const _revealEmail = (input: string) => {
  return input.replace("(at)", "@");
};

export const _slugify = (str: string) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};
