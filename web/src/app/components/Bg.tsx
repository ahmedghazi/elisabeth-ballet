"use client";
import { publish } from "pubsub-js";
import React, { useEffect, useRef } from "react";

type Props = {};

const LogoDesktop = () => (
  <svg
    version='1.1'
    id='Calque_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    viewBox='0 0 1602.3 1061.6'>
    <g id='e'>
      <path
        id='Tracé_1'
        d='M162.5,1.4H0 M162.5,151.1H0 M162.5,303.7H0 M1.2,0v305'
      />
    </g>
    <g id='l' transform='translate(176.48 -917.353)'>
      <path id='Tracé_3' d='M153.2,1390.2H2 M2,1086.4v305.2' />
    </g>
    <g id='i'>
      <path id='Tracé_4' d='M376.5,1v304' />
    </g>
    <g id='s' transform='translate(458.617 -925.353)'>
      <path id='Tracé_6' d='M160.9,1086.4H2v153.2h158.9v159.6H2' />
    </g>
    <g id='a' transform='translate(672.685 -861.353)'>
      <path id='Tracé_7' d='M162,1390.4v-304H2v304 M162,1236.9H2' />
    </g>
    <g id='b' transform='translate(887.986 -1035.315)'>
      <path
        id='Tracé_8'
        d='M82,1240.8h80 M82,1086.4v308.9 M2,1086.4h160v308.9H2'
      />
    </g>
    <g id='e_1_' transform='translate(1102.548 -749.353)'>
      <path
        id='Tracé_9'
        d='M154,1087.7H2 M154,1236.9H2 M154,1389H2 M3.1,1086.4v304'
      />
    </g>
    <g id='t' transform='translate(1323.693 -925.353)'>
      <path id='Tracé_10' d='M72.5,1086.4v312 M2,1086.4h152' />
    </g>
    <g id='h' transform='translate(1451.693 -747.166)'>
      <path id='Tracé_11' d='M150,1230.9H2 M150,1086.4v301.8 M2,1086.4v301.8' />
    </g>
    <g id='b_1_' transform='translate(151.665 -394.219)'>
      <path
        id='Tracé_13'
        d='M82,1240.8h80 M82,1086.4v308.9 M2,1086.4h160v308.9H2'
      />
    </g>
    <g id='a_1_' transform='translate(403.286 -517.353)'>
      <path id='Tracé_14' d='M154,1390.4v-304H2v304 M154,1238.4H2' />
    </g>
    <g id='l_1_' transform='translate(681.198 -437.353)'>
      <path id='Tracé_15' d='M154,1389H2 M2,1086.4v304' />
    </g>
    <g id='l_2_' transform='translate(624.27 696)'>
      <path id='Tracé_16' d='M171.5,303.7H2 M2,1v304' />
    </g>
    <g id='e_2_' transform='translate(891.974 696)'>
      <path
        id='Tracé_17'
        d='M162.6,2.3H2 M162.6,151.6H2 M162.6,303.7H2 M3.2,1v304'
      />
    </g>
    <g id='t_1_' transform='translate(1155.571 -389.353)'>
      <path id='Tracé_19' d='M68.8,1086.4v304 M2,1086.4h144' />
    </g>
  </svg>
);

const LogoMobile = () => (
  <svg
    version='1.1'
    id='Calque_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    viewBox='0 0 309.3 531.5'>
    <g id='BALLET' transform='translate(-15.393 -71.95)'>
      <g id='e' transform='translate(15.393 72.35)'>
        <path
          id='Tracé_6'
          d='M54.3,0.4H0 M54.3,49.1H0 M54.3,98.7H0 M0.4,0v99.1'
        />
      </g>
      <g id='l' transform='translate(83.31 111.969)'>
        <path id='Tracé_7' d='M65.4,95.9H11.1 M11.1-2.7v99.1' />
      </g>
      <g id='i' transform='translate(150.383 88.35)'>
        <path id='Tracé_8' d='M0,0v96' />
      </g>
      <g id='s' transform='translate(184 72.35)'>
        <path id='Tracé_9' d='M54.4,0H0v48.5h54.4v50.6H0' />
      </g>
      <g id='a' transform='translate(264 125.235)'>
        <path id='Tracé_10' d='M54.4,99.1V0H0v99.1 M54.4,49.1H0' />
      </g>
      <g id='b' transform='translate(40.024 232.35)'>
        <path id='Tracé_11' d='M27.2,49.6h27.2 M27.2,0v99.1 M0,0h54.4v99.1H0' />
      </g>
      <g id='e_1_' transform='translate(118.383 256.35)'>
        <path
          id='Tracé_12'
          d='M54.3,0.4H0 M54.3,49.1H0 M54.3,98.7H0 M0.4,0v99.1'
        />
      </g>
      <g id='t' transform='translate(182.383 216.35)'>
        <path id='Tracé_13' d='M25.2,0v99.1 M0,0h54.3' />
      </g>
      <g id='h' transform='translate(240 240.35)'>
        <path id='Tracé_14' d='M54.4,47.5H0 M54.4,0v99.1 M0,0v99.1' />
      </g>
      <g id='b_1_' transform='translate(16.02 384.35)'>
        <path id='Tracé_15' d='M27.2,49.6h27.2 M27.2,0v99.1 M0,0h54.4v99.1H0' />
      </g>
      <g id='a_1_' transform='translate(94.383 440.35)'>
        <path id='Tracé_16' d='M54.4,99.1V0H0v99.1 M54.4,49.6H0' />
      </g>
      <g id='l_2_' transform='translate(174.383 384.35)'>
        <path id='Tracé_18' d='M54.4,98.7H0 M0,0v99.1' />
      </g>
      <g id='l_1_' transform='translate(208.021 325.237)'>
        <path id='Tracé_17' d='M46.4,122.7H-8 M-8,24v99.1' />
      </g>
      <g id='e_2_' transform='translate(270.383 384.35)'>
        <path
          id='Tracé_19'
          d='M54.3,0.4H0 M54.3,49.1H0 M54.3,98.7H0 M0.4,0v99.1'
        />
      </g>
      <g id='t_1_' transform='translate(238.383 504.35)'>
        <path id='Tracé_20' d='M25.2,0v99.1 M0,0h54.3' />
      </g>
    </g>
  </svg>
);
const Bg = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    _randomize();
  }, []);

  const _randomize = () => {
    // const
    const paths = ref.current?.querySelectorAll("path");
    if (paths) {
      let delayTotal = 0;
      paths.forEach((el) => {
        const delay = 1000 + Math.random() * 200;
        const duration = Math.random() * 1000;
        el.style.transitionDelay = `${delay}ms`;
        el.style.transitionDuration = `${duration}ms`;
        el.style.opacity = "1";
        delayTotal += delay;
      });
      console.log(delayTotal);
      setTimeout(() => {
        publish("REVEAL");
      }, 2000);
    } else {
      publish("REVEAL");
    }
  };

  return (
    <div className='bg p-md' ref={ref}>
      <div className='hidden-sm'>
        <LogoDesktop />
      </div>
      <div className='sm-only'>
        <LogoMobile />
      </div>
    </div>
  );
};

export default Bg;
