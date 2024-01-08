import React from "react";
import { _localizeText } from "../utils/utils";

type Props = {};

const Credits = (props: Props) => {
  // const {};
  return (
    <div className='credits'>
      <p>
        code —{" "}
        <a
          href='https://ahmedghazi.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Ahmed Ghazi
        </a>
      </p>
      <p>
        design —{" "}
        <a
          href='https://s-y-n-d-i-c-a-t.eu/'
          target='_blank'
          rel='noopener noreferrer'>
          Syndicat
        </a>
      </p>
    </div>
  );
};

export default Credits;
