import {createClient} from '@sanity/client'
// import {apiVersion, dataset, projectId, useCdn} from './sanity.api'

export const sanityConfig = {
  projectId: 'j42w0dqb',
  dataset: 'production',
}

export const client = createClient({
  projectId: 'j42w0dqb',
  dataset: 'production',
})
