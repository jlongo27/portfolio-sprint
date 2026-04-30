import { type SchemaTypeDefinition } from 'sanity'
import { homepage } from './homepage'
import { newsItem } from './newsItem'
import { portfolio } from './portfolio'
import { service } from './service'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, portfolio, service, testimonial, newsItem],
}
