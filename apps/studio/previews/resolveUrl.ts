import {Slug, SanityDocument} from 'sanity'
import {StructureContext} from 'sanity/desk'
import {getSecret} from './getSecret'

export let productionUrl: URL | undefined = new URL( 'http://localhost:3000')

export async function resolvePreviewUrl(
  document: SanityDocument & {slug: Slug},
  context: StructureContext
) {
  if (!productionUrl || !document.slug?.current) {
    return false
  }
  const secret = await getSecret(context)
  const searchParams = new URLSearchParams()
  searchParams.set('secret', secret)
  searchParams.set('type', document._type)
  searchParams.set('id', document._id)
  searchParams.set('slug', document?.slug?.current)
  if ('category' in document && typeof document.category === 'string') {
    searchParams.set('category', document.category)
  }
  return `${productionUrl.origin}/api/preview?${searchParams}`
}