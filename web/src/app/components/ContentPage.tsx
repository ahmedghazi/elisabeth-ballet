import React from "react";
import { PageModulaire } from "../types/schema";
import Modules from "./modules";

type Props = {
  input: PageModulaire;
};

const ContentPage = ({ input }: Props) => {
  return (
    <div className='content--page'>
      {input.modules && <Modules input={input.modules} />}
    </div>
  );
};

export default ContentPage;
