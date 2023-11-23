import { MutationTree } from 'vuex'
import { ProductsState } from '@/store/modules/products/state'
import { Product } from '@/types/api/productInterface'
import { SORT_BY_TYPES } from '@/types/api/sortInterface'

export default {
  mutateProductItems(state, payload: Array<Product> | null) {
    state.products = payload
    state.filteredProducts = null
  },
  mutateProductItem(state, payload: Product) {
    state.product = payload
  },
  mutateFilteredProductItems(state, payload: { products: Array<Product> | null; filterValue: string | null }) {
    state.filteredProducts = payload.products
    state.filterValue = payload.filterValue
  },
  mutateSortBy(state, payload: SORT_BY_TYPES) {
    state.sortBy = payload
  },
} as MutationTree<ProductsState>
