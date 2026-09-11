import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {structure} from './src/deskStructure'
import {resolveProductionUrl} from './src/actions/resolveProductionUrl'
import {linkResolverPreview} from './src/linkResolverPreview'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'

const remoteURL = 'https://www.elisabethballet.net'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

const plugins = [
  structureTool({structure}),
  presentationTool({
    title: 'Live preview',
    resolve: linkResolverPreview,
    previewUrl: {
      origin: previewURL,
      previewMode: {
        enable: '/api/preview',
        disable: '/api/exit-preview',
      },
    },
  }),
  media(),
  visionTool(),
]

export default defineConfig({
  name: 'default',
  title: 'elisabeth-ballet-backoffice',

  projectId: 'ffu0yvuc',
  dataset: 'production',

  plugins: plugins,
  document: {
    // productionUrl: resolveProductionUrl,
    actions: [resolveProductionUrl],
  },
  schema: {
    types: schemaTypes,
  },
})
