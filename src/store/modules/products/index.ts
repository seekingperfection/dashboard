import { Module } from 'vuex'
import { RootState } from '@/types/api/store'
import actions from '@/store/modules/products/actions'
import getters from '@/store/modules/products/getters'
import mutations from '@/store/modules/products/mutations'
import state, { ProductsState } from '@/store/modules/products/state'

const list: Module<ProductsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
}

export default list
