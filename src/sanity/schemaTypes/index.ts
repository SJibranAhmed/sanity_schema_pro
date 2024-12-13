import { type SchemaTypeDefinition } from 'sanity'
 import content from './content'
import header from './header'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [content,header],
}
