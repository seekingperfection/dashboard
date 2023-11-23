import { GetterTree } from 'vuex'
import { RootState } from '@/types/api/store'
import { ProductsState } from '@/store/modules/products/state'

export default {
  products: (state) => state.products,
  product: (state) => state.product,
  filteredProducts: (state) => state.filteredProducts,
  sortBy: (state) => state.sortBy,
} as GetterTree<ProductsState, RootState>
