// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const EXCEPTIONS = ["/sign-up"];
// /**
//  * Saves the current URL before changing the route.
//  */

// const useRouteUrlHistory = () => {
//   const handleBeforeHistoryChange = (url) => {
//     const [nextUrl] = url?.split('?') || [];
//     if (
//       !(EXCEPTIONS.includes(nextUrl) || EXCEPTIONS.includes(Router.asPath)) &&
//       nextUrl !== Router.asPath
//     ) {
//       Router.previousRoute = Router.asPath;
//     }
//   };
//   useEffect(() => {
//     Router.events.on('beforeHistoryChange', handleBeforeHistoryChange);
//     return () => {
//       Router.events.off('beforeHistoryChange', handleBeforeHistoryChange);
//     };
//   }, []);
// };
// export default useRouteUrlHistory;
