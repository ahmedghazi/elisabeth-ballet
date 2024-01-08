// import supportedLanguages from "../locale/supportedLanguages";
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'
import {FaRegFilePdf} from 'react-icons/fa'

export default defineField({
  title: 'Link File',
  name: 'linkFile',
  type: 'object',
  icon: FaRegFilePdf,
  preview: {
    select: {
      label: `label.${baseLanguage}`,
    },
    prepare(selection) {
      const {label} = selection
      return {
        title: label,
      }
    },
  },
  fields: [
    defineField({
      name: 'label',
      type: 'localeString',
    }),
    defineField({
      name: 'file',
      type: 'file',
    }),
  ],
})
