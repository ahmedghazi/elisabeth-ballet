"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { INavInfos } from "../types/custom";
import { Project } from "../types/schema";
import { subscribe, unsubscribe } from "pubsub-js";
// import { getSettings } from "../utils/sanity-queries";

// const PageContext = createContext({});

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

interface IWrapperContext {
  location?: {
    pathname: string;
  };
  pageContext: object;
  settings: {
    pathname: string;
  };
  navInfos: INavInfos[];
  setNavInfos: Function;
  searchResult: Project[];
  setSearchResult: Function;
}
const PageContext = createContext<Partial<IWrapperContext>>({});

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props;
  const pathname = usePathname();
  // console.log(pathname);
  const [navInfos, setNavInfos] = useState<INavInfos[]>([]);
  const [searchResult, setSearchResult] = useState<Project[]>([]);
  // const [isInfos, setIsInfos] = useState<boolean>(false);
  const settings = {
    pathname,
  };

  useEffect(() => {
    _handlePageTemplate();

    _format();
    window.addEventListener("resize", _format);

    // const token = subscribe("REVEAL", () => {
    //   document.body.classList.remove("is-loading");
    // });

    return () => {
      window.removeEventListener("resize", _format);
      // unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    // console.log(pathname);
    _handlePageTemplate();
    //clean up search context
    // setSearchResult([]);
  }, [pathname]);

  const _format = () => {
    const wh = window.innerHeight;

    document.documentElement.style.setProperty("--app-height", wh + "px");
  };

  const _handlePageTemplate = () => {
    const mainDiv: HTMLElement = document.querySelector(
      "main [data-template]"
    ) as HTMLElement;
    // console.log(mainDiv);
    if (mainDiv) {
      const template = mainDiv.dataset.template;
      // console.log(template);

      document.body.dataset.template = `is-${template}`;
      document.body.classList.remove("is-loading");
      // setTimeout(() => {}, 1000);
    }
  };

  return (
    <PageContext.Provider
      value={{
        settings,
        navInfos,
        setNavInfos,
        searchResult,
        setSearchResult,
      }}>
      {children}
    </PageContext.Provider>
  );
};

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext);
