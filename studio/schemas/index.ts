import pageModulaire from './documents/pageModulaire'
import project from './documents/project'
import tag from './documents/tag'
import home from './singletons/home'
import infos from './singletons/infos'
// import projects from './singletons/projects'
import settings from './singletons/settings'

import localeString from './locale/localeString'
import localeBlockContent from './locale/localeBlockContent'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import linkModal from './objects/linkModal'
import tagGroup from './objects/tagGroup'
import seo from './objects/seo'
import embed from './objects/embed'
import keyVal from './objects/keyVal'
import keyValGroup from './objects/keyValGroup'
import video from './objects/video'

import moduleImage from './objects/modules/imageUI'
import moduleImages from './objects/modules/imagesUI'
import moduleText from './objects/modules/textUI'
import moduleTexts from './objects/modules/textsUI'
import moduleEmbed from './objects/modules/embedUI'
import moduleProjects from './objects/modules/projectsUI'
import linkFile from './objects/linkFile'

export const schemaTypes = [
  home,
  // projects,
  infos,
  settings,
  pageModulaire,
  project,
  tag,
  // tagGroup,

  localeString,
  localeBlockContent,

  blockContent,
  linkExternal,
  linkInternal,
  linkFile,

  seo,
  embed,
  keyVal,
  keyValGroup,
  video,

  moduleImage,
  moduleImages,
  moduleText,
  // moduleTexts,
  // moduleEmbed,
  moduleProjects,
]
export default schemaTypes
