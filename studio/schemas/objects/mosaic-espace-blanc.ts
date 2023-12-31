import {FiImage} from 'react-icons/fi'
import {baseLanguage} from '../locale/supportedLanguages'
import {defineField} from 'sanity'

export default defineField({
  name: 'mosaicEspaceBlanc',
  title: 'Mosaic Espace Blanc',
  type: 'object',
  icon: FiImage,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'titre',
    }),
  ],
})
