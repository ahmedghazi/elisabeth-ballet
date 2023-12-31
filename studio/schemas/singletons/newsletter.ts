import {defineField, defineType} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'
import {FiMail} from 'react-icons/fi'

export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  icon: FiMail,
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
      type: 'localeString',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL based on the title (no space, or char other than a-z-0-9',
      options: {
        source: `title.${baseLanguage}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'text',
      title: 'Texte',
      type: 'localeBlockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'email',
      type: 'string',
      description: 'E-mail de réception du formulaire',
      group: 'editorial',
    }),
    defineField({
      name: 'emailPass',
      type: 'string',
      description: "mots de passe de l'email",
      group: 'editorial',
    }),
    defineField({
      name: 'smtp',
      type: 'string',
      description: "Addresse SMTP lié à l'e-mail",
      group: 'editorial',
    }),
    defineField({
      name: 'form',
      title: 'Formulaire',
      type: 'array',
      of: [{type: 'formField'}],
      group: 'editorial',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
    },
  },
})
