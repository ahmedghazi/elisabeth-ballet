// import React from "react";
// import { PortableText } from "@portabletext/react";
// import portableTextComponents from "@/app/utils/portableTextComponents";
// import Image from "next/image";
// import { ModuleTextImage } from "@/app/types/schema";

// type Props = {
//   input: ModuleTextImage;
// };

// const TexteImageUI = ({ input }: Props): JSX.Element => {
//   const { title, text, image } = input;
//   // console.log(input);
//   return (
//     <section className='module-texte-image mb-md'>
//       <div className='row'>
//         <div className='col-md-6'>
//           <div className='media max-w-full relative aspect-video'>
//             <Image src={image?.asset.url} fill alt={title || "alt"} />
//           </div>
//         </div>
//         <div className='col-md-6'>
//           <h2 className='text-lg mb-md'>{title}</h2>
//           <PortableText value={text} components={portableTextComponents} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TexteImageUI;
