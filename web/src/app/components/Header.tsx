"use client";
import React from "react";
import { Settings } from "../types/schema";
import LocalesSwitcher from "./ui/LocaleSwitcher";
import Link from "next/link";
import website from "../config/website";
import { _linkResolver, _localizeField } from "../utils/utils";
import { usePathname } from "next/navigation";
import Search from "./ui/Search";
import { usePageContext } from "../context/PageContext";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const pathname = usePathname();
  const { navInfos } = usePageContext();
  // console.log(navInfos);
  return (
    <header>
      <div className=''>
        <div className='site-name'>
          <Link href={"/"}>{website.title}</Link>
        </div>
        <nav>
          {/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}
          <ul className='mb-md'>
            {settings.navPrimary?.map((item, i) => (
              <li key={item._key}>
                <Link
                  href={_linkResolver(item.link)}
                  className={
                    pathname === _linkResolver(item.link) ? "is-current" : ""
                  }>
                  {_localizeField(item.label)}
                </Link>
              </li>
            ))}
          </ul>

          {navInfos && navInfos.length > 0 && (
            <ul className='nav-infos mb-md'>
              {navInfos.map((item, i) => (
                <li key={item.slug}>
                  <Link href={`#${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}

          <LocalesSwitcher />
          <Search />
        </nav>
      </div>
    </header>
  );
};

export default Header;
