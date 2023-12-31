// import {BiDockTop, BiDockBottom} from 'react-icons/bi'
// import {ControlsIcon} from '@sanity/icons'
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
// import {SEOPane} from 'sanity-plugin-seo-pane'
// import {resolveProductionUrl} from './actions/resolveProductionUrl'
import SeoPreview from './previews/seo/index'
const remoteURL = 'http://www.elisabethballet.net'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL + '' : remoteURL + ''

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'home',
    'media.tag',
    'pageModulaire',
    'tag',
    'project',
    'settings',
    'infos',
    'projects',
    'recit',
    'newsletter',
  ].includes(id)
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Réglages (header, footer, ...)')
        .schemaType('settings')
        .child(
          S.editor()
            .title('Réglages (header, footer, ...)')
            .schemaType('settings')
            .documentId('settings'),
        ),
      S.divider(),

      S.listItem()
        .title('Projets')
        .schemaType('project')
        .child(
          S.documentTypeList('project').child((id) =>
            S.document()
              .schemaType('project')
              .documentId(id)
              .views([
                // The default form for editing a document
                S.view.form(),

                // Render the current selected document’s values as JSON
                S.view.component(SeoPreview).title('Seo preview').options({previewURL}),
              ]),
          ),
        ),

      S.listItem().title('Tags').schemaType('tag').child(S.documentTypeList('tag')),
      S.divider(),

      S.listItem()
        .title('Accueil')
        .schemaType('home')
        .child(S.editor().title('Home').schemaType('home').documentId('home')),

      S.listItem()
        .title('Infos (about)')
        .schemaType('infos')
        .child(S.editor().title('Infos').schemaType('infos').documentId('infos')),

      S.listItem()
        .title('Pages (Modulaire)')
        .schemaType('pageModulaire')
        .child(S.documentTypeList('pageModulaire')),
      // S.divider(),

      // S.listItem().title('Projects').schemaType('project').child(S.documentTypeList('project')),
      // S.listItem()
      //   .title('Projets Page')
      //   .schemaType('projects')
      //   .child(S.documentTypeList('projects')),

      S.divider(),

      /**
       * with seo preview
       */

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
