import { Product } from '@/types/api/productInterface'
import { SORT_BY_TYPES } from '@/types/api/sortInterface'

export interface ProductsState {
  products: Array<Product> | null
  product: Product | null
  filteredProducts: Array<Product> | null
  filterValue: null | string
  sortBy: null | SORT_BY_TYPES
}

export default (): ProductsState => {
  return {
    products: null,
    product: null,
    filteredProducts: null,
    filterValue: null,
    sortBy: null,
  }
}
