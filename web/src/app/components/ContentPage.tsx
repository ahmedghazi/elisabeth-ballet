import React from "react";
import { PageModulaire } from "../types/schema";
import Modules from "./modules";
import Credits from "./Credits";

type Props = {
  input: PageModulaire;
};

const ContentPage = ({ input }: Props) => {
  const isLegals = input.slug && input.slug?.current.indexOf("legal") > -1;
  const isProjects =
    input.modules && input.modules[0]._type === "moduleProjects";
  console.log(input);
  const hasTextAside =
    input.textAside &&
    ((input.textAside.fr && input.textAside.fr?.length > 0) ||
      (input.textAside.en && input.textAside.en?.length > 0));
  /*
  is projects
  is text
   + is legals
  */
  return (
    <div className='content--page-modulaire'>
      {isProjects && input.modules && <Modules input={input.modules} />}
      {!isProjects && (
        <div className='md:grid md:grid-cols-6 gap-lg'>
          <>
            {/* {hasTextAside && "has hasTextAside"} */}
            <div className='scrollable col-span-2 bg-white'>
              {hasTextAside && input.textAside && (
                <Credits text={input.textAside} />
              )}
            </div>

            <div className='scrollable col-span-4 text-center'>
              {input.modules && <Modules input={input.modules} />}
            </div>
          </>

          {!isLegals && input.modules && (
            <>
              <div className=' col-span-2 bg-white'></div>
              <div className='scrollable col-span-4 text-center'>
                {input.modules && <Modules input={input.modules} />}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentPage;
