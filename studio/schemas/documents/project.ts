import {defineField, defineArrayMember, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'
import modulesList from '../objects/modules/modulesList'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: FolderIcon,
  preview: {
    select: {
      title: `title`,
      slug: 'slug',
      image: 'imageCover',
    },
    prepare(selection) {
      const {title, slug, image} = selection
      // console.log(images)
      return {
        title: title,
        subtitle: `/project/${slug.current}`,
        media: image,
      }
    },
  },
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL basée sur le titre (sans espace ni caractère autre que a-z-0-9',
      options: {
        source: `title`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),

    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      group: 'editorial',
      hidden: true,
    }),

    defineField({
      name: 'imageCover',
      type: 'image',
      title: 'Image clef',
      description:
        'Vignette Image visible sur les pages de liste (home, expositions, commandes P&P) (largeur 1400px)',
      group: 'editorial',
    }),
    defineField({
      name: 'description',
      type: 'localeBlockContent',
      title: 'description',
      description: 'Description technique (dimensions, matérieux, ...)',
      group: 'editorial',
    }),
    defineField({
      name: 'chapo',
      title: 'Chapo',
      type: 'localeBlockContent',
      group: 'editorial',
    }),

    // defineField({
    //   name: 'metas',
    //   title: 'fiche technique',
    //   type: 'array',
    //   of: [{type: 'keyVal'}],
    //   // description: 'fiche technique',
    //   group: 'editorial',
    // }),

    defineField({
      name: 'text',
      title: 'Texte',
      type: 'localeBlockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      description: 'Images visible dans la page de détail du project (scroll)',
      type: 'array',
      of: [{type: 'image'}],
      group: 'editorial',
    }),
  ],
})
