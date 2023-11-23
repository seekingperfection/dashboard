import { ActionTree } from 'vuex'
import { RootState } from '@/types/api/store'
import { LoadingState } from '@/store/modules/loading/state'

export default {
  setLoadingState({ commit }, payload: boolean) {
    commit('mutateLoading', payload)
  },
} as ActionTree<LoadingState, RootState>
