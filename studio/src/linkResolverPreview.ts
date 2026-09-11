import {defineLocations, PresentationPluginOptions} from 'sanity/presentation'
// import pageModulaire from '../schemaTypes/documents/pageModulaire'

export const linkResolverPreview: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add locations for documents of type 'post'
    home: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title.fr || 'Untitled',
            href: '/',
          },
        ],
      }),
    }),
    pageModulaire: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title.fr || 'Untitled',
            href: `/${doc?.slug}`,
          },
        ],
      }),
    }),
    project: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
        homePage: 'homePage',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title.fr || 'Untitled',
            href: `/project/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
}
