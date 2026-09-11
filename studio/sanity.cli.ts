import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ffu0yvuc',
    dataset: 'production',
  },
  studioHost: 'elisabeth-ballet-backoffice', // Visit https://www.sanity.io/docs/environment-variables to leanr more about using environment variables for local & production.
  deployment: {
    autoUpdates: true,
    // appId: 'qgu3j43hp0rqspmjc0ukwho2',
  },
})
