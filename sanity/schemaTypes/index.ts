import { type SchemaTypeDefinition } from 'sanity'

import { variant } from "@/sanity/schemaTypes/variant"
import { size } from './size'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [variant, size, product],
}
