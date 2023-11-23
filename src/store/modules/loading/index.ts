import { Module } from 'vuex'
import { RootState } from '@/types/api/store'
import actions from '@/store/modules/loading/actions'
import getters from '@/store/modules/loading/getters'
import mutations from '@/store/modules/loading/mutations'
import state, { LoadingState } from '@/store/modules/loading/state'

const loading: Module<LoadingState, RootState> = {
  state,
  getters,
  actions,
  mutations,
}

export default loading
