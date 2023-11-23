import { MutationTree } from 'vuex'
import { LoadingState } from '@/store/modules/loading/state'

export default {
  mutateLoading(state, payload: boolean) {
    state.loading = payload
  },
} as MutationTree<LoadingState>
