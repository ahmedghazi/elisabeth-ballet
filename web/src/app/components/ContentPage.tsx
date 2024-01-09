import React from "react";
import { PageModulaire } from "../types/schema";
import Modules from "./modules";
import Credits from "./Credits";

type Props = {
  input: PageModulaire;
};

const ContentPage = ({ input }: Props) => {
  const isLegals = input.slug && input.slug?.current.indexOf("legal") > -1;
  return (
    <div className='content--page-modulaire'>
      {/* <div className='md:grid- md:grid-cols-6 gap-lg'>
        {isLegals && (
          <div className='scrollable col-span-2 bg-white'>
            <Credits />
          </div>
        )}
        <div className='scrollable col-span-4 text-center'>
          {input.modules && <Modules input={input.modules} />}
        </div>
      </div> */}
      {isLegals && (
        <div className='md:grid md:grid-cols-6 gap-lg'>
          <div className='scrollable col-span-2 bg-white'>
            <Credits />
          </div>

          <div className='scrollable col-span-4 text-center'>
            {input.modules && <Modules input={input.modules} />}
          </div>
        </div>
      )}
      {!isLegals && input.modules && <Modules input={input.modules} />}
    </div>
  );
};

export default ContentPage;
