import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './category'
import { product } from './product'
import { Chairs } from './chairs'
import { Tables } from './table'
import { Crockery } from './crockery'
import { Tablewares } from './tableware'
import { Cutlery } from './cutlery'
import { Ceramic } from './ceramic'
import { Plant } from './plantpont'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,product,Chairs,Tables,Crockery,Tablewares,Cutlery,Ceramic,Plant,order]
}
