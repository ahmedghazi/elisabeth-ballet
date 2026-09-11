import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons/ThList'

export default defineField({
  name: 'moduleProjects',
  title: 'Projets',
  type: 'object',
  icon: ThListIcon,
  initialValue: {
    layout: 'mosaic',
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Nom interne, (non visible en front)',
    }),
    // defineField({
    //   name: 'layout',
    //   title: 'Style',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Mosaic', value: 'mosaic'},
    //       {title: 'Index', value: 'index'},
    //     ], // <-- predefined values
    //     // layout: 'radio', // <-- defaults to 'dropdown'
    //   },
    // }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      options: {
        // layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Projets mosaic',
      }
    },
  },
})
