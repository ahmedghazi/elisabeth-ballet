import React, { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  parentScrollContainerRef?: HTMLDivElement | null;
  childrenSelector: string;
};

const ScrollSpy = ({
  children,
  parentScrollContainerRef,
  childrenSelector,
}: Props) => {
  useEffect(() => {
    if (parentScrollContainerRef) {
      parentScrollContainerRef.addEventListener("scroll", _onScroll);
    }

    return () => {
      if (parentScrollContainerRef) {
        parentScrollContainerRef.removeEventListener("scroll", _onScroll);
      }
    };
  }, [parentScrollContainerRef]);

  const _onScroll = (e: Event) => {
    // console.log(e);
    const targets =
      parentScrollContainerRef?.querySelectorAll(childrenSelector);
    targets?.forEach((el) => {
      // const bounding = el.getBoundingClientRect();
      // console.log(bounding);
      const navTarget = document.querySelector(`[data-scrollspy=${el.id}]`);
      const _isVisible = isVisible(el);
      if (_isVisible) {
        // console.log(_isVisible, el.id);
        navTarget?.classList.add("is-current");
        // console.log(navTarget);
      } else {
        navTarget?.classList.remove("is-current");
      }
    });
  };

  const isVisible = function (el: HTMLDivElement | Element) {
    const rect: DOMRect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= window.innerHeight / 2;
  };

  return <div className='scroll-spy-wrapper'>{children}</div>;
};

export default ScrollSpy;
