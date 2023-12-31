import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {structure} from './src/deskStructure'
import {resolveProductionUrl} from './src/actions/resolveProductionUrl'

export default defineConfig({
  name: 'default',
  title: 'elisabeth-ballet-backoffice',

  projectId: 'ffu0yvuc',
  dataset: 'production',

  plugins: [deskTool({structure: structure}), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
