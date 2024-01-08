"use client";
import React from "react";
import website from "../config/website";
import { Settings } from "../types/schema";
import { _linkResolver, _localizeField } from "../utils/utils";
import Link from "next/link";

type Props = {
  settings: Settings;
};

const Footer = ({ settings }: Props) => {
  // console.log(settings.navSecondary);
  return (
    <footer>
      <div>© {website.titleAlt}</div>
      <nav id='nav-secondary'>
        <ul className=''>
          {settings.navSecondary?.map((item, i) => (
            <li key={item._key}>
              <Link href={_linkResolver(item.link)}>
                {_localizeField(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
