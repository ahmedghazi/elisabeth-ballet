"use client";
import React, { useEffect, useRef } from "react";
import { Settings } from "../types/schema";
import LocalesSwitcher from "./ui/LocaleSwitcher";
import Link from "next/link";
import website from "../config/website";
import { _linkResolver, _localizeField } from "../utils/utils";
import { usePathname, useSearchParams } from "next/navigation";
import Search from "./ui/Search";
import { usePageContext } from "../context/PageContext";
import NavInfos from "./NavInfos";
import { publish } from "pubsub-js";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const { navInfos } = usePageContext();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef<HTMLUListElement>(null);
  // console.log(navInfos);

  useEffect(() => {
    if (!ref) return;

    // const urlParams = new URLSearchParams(window.location.search);
    const refererUrlParam = searchParams.get("referer");
    if (!refererUrlParam) return;
    const referer = _getrefererUrlFull(refererUrlParam);
    // console.log(referer);
    const lis = ref.current?.querySelectorAll("li");
    lis?.forEach((el) => {
      const a = el.querySelector("a");
      if (a) {
        const href = a.href;
        el.classList.toggle("is-current", href === referer);

        // console.log(href);
      }
    });
  }, [pathname, searchParams]);

  const _getrefererUrlFull = (referer: string) => {
    const refererUrlFull: string = `${location.protocol}//${location.host}${referer}`;
    return refererUrlFull;
  };

  const _handleSameUrl = (url: string) => {
    // console.log(url, pathname);
    if (url === pathname) {
      publish("BURGER.CLOSE");
    }
  };

  return (
    <header>
      <div className=''>
        <div className='site-name'>
          <Link href={"/"} onClick={() => _handleSameUrl("/")}>
            {website.title}
          </Link>
        </div>
        <nav>
          {/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}
          <ul ref={ref}>
            {settings.navPrimary?.map((item, i) => (
              <li key={item._key}>
                <Link
                  href={`${_linkResolver(item.link)}`}
                  onClick={() => _handleSameUrl(_linkResolver(item.link))}
                  className={
                    pathname === _linkResolver(item.link) ? "is-current" : ""
                  }>
                  {_localizeField(item.label)}
                </Link>
                {item._type === "linkInternal" &&
                  item.link &&
                  item.link.slug &&
                  item.link.slug.current &&
                  item.link.slug.current === "infos" &&
                  navInfos &&
                  navInfos.length > 0 && <NavInfos />}
              </li>
            ))}
          </ul>

          <LocalesSwitcher />
          <Search />
        </nav>
      </div>
    </header>
  );
};

export default Header;
