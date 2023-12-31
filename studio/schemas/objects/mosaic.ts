import {GrGallery} from 'react-icons/gr'
import {defineField} from 'sanity'

export default defineField({
  name: 'mosaic',
  title: 'Mosaic',
  type: 'object',
  icon: GrGallery,
  preview: {
    select: {
      media: 'images.0.image',
      title: `title`,
    },
    prepare(selection) {
      const {media, title} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Mosaic',
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
    }),
    // defineField({
    //   name: 'size',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Small', value: 'sm'},
    //       {title: 'Medium', value: 'md'},
    //       {title: 'Big', value: 'lg'},
    //     ],
    //   },
    //   // hidden: ({ document }) => {
    //   //   console.log(document);
    //   //   return document._type === "footer";
    //   // },
    // }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'figure'}],
    }),
  ],
})
