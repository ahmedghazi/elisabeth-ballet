import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./sanity-utils";
import Image from "next/image";
import { _linkResolver, _localizeField } from "./utils";
import Link from "next/link";
// import Embed from "../components/ui/Embed";

const components: PortableTextComponents = {
  // block(props) {
  //   console.log(props)
  //   switch (props.node?.style) {
  //     case "h2":
  //       return <h2>{props.children}</h2>
  //     case "text-lg":
  //       return <p className="text-lg">{props.children}</p>
  //     case "text-xl":
  //       return <p className="text-xl">{props.children}</p>
  //     default:
  //       return <p>{props.children}</p>
  //   }
  // },
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3 className='strong uppercase'>{children}</h3>,
    "text-lg": ({ children }) => (
      <p className='text-md md:text-lg'>{children}</p>
    ),

    "text-index": ({ children, value }) => (
      <div className='indent flex mb-md strong'>
        <span className='strong pr-05e icon-arrow'>→</span>
        <p>{children}</p>
      </div>
    ),
    // align_center: ({ children }) => <p className="text-center">{children}</p>,
  },
  types: {
    image: ({ value }) => {
      console.log(value);
      return (
        <figure className='image rounded-md overflow-hidden'>
          <img src={urlFor(value)} alt='some image' />
        </figure>
      );
    },
    // embed: ({ value }) => {
    //   return <Embed url={value.url} />;
    // },
    textIcon: ({ value }) => {
      return (
        <Image
          src={urlFor(value.icon.asset, 60)}
          alt='icon'
          width={60}
          height={60}
        />
      );
    },
    interTitre: ({ value }) => (
      <div className='inter-titre flex flex-wrap- strong mb-md'>
        <div className='index pr-05e'>{value.index}.</div>
        <div className='title'>{_localizeField(value.title)}</div>
        {/* <pre>{JSON.stringify(value)}</pre> */}
      </div>
    ),
  },

  marks: {
    // link: ({ children, value }) => {
    //   const rel = !value.href.startsWith("/")
    //     ? "noreferrer noopener"
    //     : undefined;
    //   return (
    //     <a href={value.href} rel={rel}>
    //       {children}
    //     </a>
    //   );
    // },
    linkInternal: ({ children, value }) => {
      // console.log(value);
      // return <Link href={"/"}>{children}</Link>;
      return <Link href={_linkResolver(value.reference)}>{children}</Link>;
    },
    linkExternal: ({ children, value }) => {
      return (
        <a href={value.href} rel={"noreferrer noopener"} target='_blank'>
          {children}
        </a>
      );
    },
    align_left: ({ children, value }) => (
      <p className='text-left'>{children}</p>
    ),
    align_center: ({ children, value }) => (
      <p className='text-center'>{children}</p>
    ),
    align_right: ({ children, value }) => (
      <p className='text-right'>{children}</p>
    ),

    u: ({ children, value }) => {
      // const rand = Math.floor(Math.random() * 3);
      return <u className={``}>{children}</u>;
    },
    outline: ({ children, value }) => (
      <span className='outline'>{children}</span>
    ),
  },
};

export default components;
