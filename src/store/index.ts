import { createStore } from 'vuex'
import { RootState } from '@/types/api/store'
import products from '@/store/modules/products'
import loading from '@/store/modules/loading'

export default createStore<RootState>({
  modules: {
    products,
    loading,
  },
})
