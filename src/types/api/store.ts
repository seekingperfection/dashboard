import { ProductsState } from '@/store/modules/products/state'
import { LoadingState } from '@/store/modules/loading/state'

export interface RootState {
  products: ProductsState
  loading: LoadingState
}
