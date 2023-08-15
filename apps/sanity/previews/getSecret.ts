import { DEFAULT_STUDIO_CLIENT_OPTIONS } from 'sanity'
import { StructureContext } from 'sanity/desk'

export const getSecret = async (context: StructureContext) => {
  const client = context.getClient(DEFAULT_STUDIO_CLIENT_OPTIONS)
  const secret = await client.fetch('*[_id == "secrets.preview"][0].value')

  return secret
}