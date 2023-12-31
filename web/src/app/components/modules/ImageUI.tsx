// import React from "react";
// // import SanityImageUI from "../ui/SanityImageUI";
// // import SanityImageHotSpot from '../ui/SanityImageHotSpot';
// // import { SanityModuleImage } from '../../../graphql-types';
// import clsx from "clsx";
// import Image from "next/image";
// import { _localizeField } from "@/app/utils/utils";
// import { ModuleImage } from "@/app/types/schema";
// // import { _localizeField } from 'utils/utils';
// import portableTextComponents from "@/app/utils/portableTextComponents";
// import { PortableText } from "@portabletext/react";

// type Props = {
//   input: ModuleImage;
// };

// const ImageUI = ({ input }: Props): JSX.Element => {
//   // console.log(input);
//   const { image, caption, width, offset } = input;

//   return (
//     <section className={clsx("module module--image mb-xl")}>
//       <div className='row no-gutter'>
//         <div
//           className={clsx(`col-md-${width} col-md-offset-${offset} col-xs-12`)}>
//           {image && (
//             <Image
//               src={image.asset.url}
//               width={image?.asset.metadata?.dimensions.width}
//               height={image?.asset.metadata?.dimensions.height}
//               alt={"alt"}
//               sizes='100vw'
//               style={{
//                 width: "100%",
//                 height: "auto",
//               }}
//               blurDataURL={image?.asset.metadata?.lqip} //automatically provided
//               placeholder='blur' // Optional blur-up while loading
//             />
//           )}
//           {image && caption && (
//             <figcaption className='text-sm text-right py-xs text-muted absolute right-0'>
//               <PortableText
//                 value={_localizeField(caption)}
//                 components={portableTextComponents}
//               />
//             </figcaption>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageUI;
