import {StructureBuilder, ViewBuilder} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {resolvePreviewUrl} from './resolveUrl'
import {SanityDocument, Slug} from 'sanity'

export const WebPreview = (S: StructureBuilder): ViewBuilder => {
  return S.view
    .component(Iframe)
    .options({
      url: async (doc: SanityDocument & {slug: Slug}) => {
        const url = await resolvePreviewUrl(doc, S.context)
        return url
      },
    })
    .title('Forhåndsvisning')
}