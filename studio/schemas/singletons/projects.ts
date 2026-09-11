import {defineField, defineType} from 'sanity'
// import {baseLanguage} from '../locale/supportedLanguages'
import {ThListIcon} from '@sanity/icons/ThList'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: ThListIcon,
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
      title: 'Title',
      type: 'string',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL based on the title (no space, or char other than a-z-0-9',
      options: {
        source: `title`,
        maxLength: 96,
      },
      group: 'editorial',
      // validation: validateSlug,
    }),
  ],
  preview: {
    select: {
      title: `title`,
    },
    prepare(selection) {
      const {title} = selection
      // console.log(images)
      return {
        title: title,
      }
    },
  },
})
