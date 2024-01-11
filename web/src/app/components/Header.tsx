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
import NavInfos from "./NavInfos";

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
          <ul className='mb-md-'>
            {settings.navPrimary?.map((item, i) => (
              <li key={item._key}>
                <Link
                  href={_linkResolver(item.link)}
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
