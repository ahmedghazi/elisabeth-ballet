import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getSettings } from "../utils/sanity-queries";
import Burger from "./ui/Burger";

type Props = {};

const Aside = async (props: Props) => {
  const settings = await getSettings();
  return (
    <aside>
      <Burger />
      <div className='navs'>
        <Header settings={settings} />
        <Footer settings={settings} />
      </div>
    </aside>
  );
};

export default Aside;
