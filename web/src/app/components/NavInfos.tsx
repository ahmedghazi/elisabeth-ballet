import React, { useEffect, useState } from "react";
import { usePageContext } from "../context/PageContext";
import Link from "next/link";
import { publish } from "pubsub-js";

type Props = {};

const NavInfos = (props: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  const { navInfos } = usePageContext();
  const sections = navInfos?.map((item) => item.slug) || [];
  // console.log(sections);

  useEffect(() => {
    setReady(true);
  }, []);

  const _handleCloseBurger = () => {
    publish("BURGER.CLOSE");
  };

  return (
    <div className='nav-infos mb-md'>
      {ready && navInfos && navInfos.length > 0 && (
        <ul>
          {navInfos.map((item, i) => (
            <li key={item.slug} className='mb-05e'>
              <Link
                onClick={() => _handleCloseBurger()}
                href={`#section--${item.slug}`}
                data-scrollspy={`section--${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavInfos;
