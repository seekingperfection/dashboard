import { GetterTree } from 'vuex'
import { RootState } from '@/types/api/store'
import { LoadingState } from '@/store/modules/loading/state'

export default {
  loading: (state) => state.loading,
} as GetterTree<LoadingState, RootState>
