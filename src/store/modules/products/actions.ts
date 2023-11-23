import { ActionTree } from 'vuex'
import { RootState } from '@/types/api/store'
import { ProductsState } from '@/store/modules/products/state'
import { Product, ProductsResponse } from '@/types/api/productInterface'
import { apiRequest } from '@/lib/apiRequest'
// eslint-disable-next-line unused-imports/no-unused-imports
import ApiError from '@/exceptions/ApiException'
import { SORT_BY_TYPES, SORT_METHOD_TYPES } from '@/types/api/sortInterface'
import { checkFilterValue } from '@/utils/checkFilterValue'
import { sortProducts } from '@/utils/sortProducts'

export default {
  setProductItems({ commit }, payload: Array<Product> | null): void {
    commit('mutateProductItems', payload)
  },
  setProductItem({ commit }, payload: Product): void {
    commit('mutateProductItem', payload)
  },
  async fetchProducts({ dispatch, state }): Promise<void> {
    try {
      dispatch('setLoadingState', true)

      const response = await apiRequest<ProductsResponse>('/products', 'GET', {})

      dispatch('setProductItems', response.products)

      if (state.filterValue !== null && state.filterValue !== '' && /[a-zA-Z]/.test(state.filterValue)) {
        dispatch('filterProductsByBrandLocally', state.filterValue)
      }

      dispatch('setLoadingState', false)
    } catch (error: ApiError) {
      dispatch('setLoadingState', false)
    }
  },
  async fetchProductById({ dispatch }, payload: number): Promise<void> {
    try {
      dispatch('setLoadingState', true)

      const response = await apiRequest<Product>(`/product/${payload}`, 'GET', {})

      dispatch('setProductItem', response)
      dispatch('setLoadingState', false)
    } catch (error: ApiError) {
      dispatch('setLoadingState', false)
    }
  },
  async fetchProductsBySearch({ dispatch, state }, payload: string): Promise<void> {
    try {
      dispatch('setLoadingState', true)

      const response = await apiRequest<ProductsResponse>(`/products/search?q=${payload}`, 'GET', {})

      dispatch('setProductItems', response.products)

      if (checkFilterValue(state.filterValue)) {
        dispatch('filterProductsByBrandLocally', state.filterValue)
      }

      dispatch('setLoadingState', false)
    } catch (error: ApiError) {
      dispatch('setLoadingState', false)
    }
  },
  filterProductsByBrandLocally({ commit, state }, payload: string): void {
    if (checkFilterValue(payload)) {
      const filteredProducts =
        state.products !== null && state.products.length
          ? state.products.filter((product) => product.brand.toLowerCase().includes(payload.toLowerCase()))
          : null

      commit('mutateFilteredProductItems', { products: filteredProducts, filterValue: payload })
    }
  },
  sortProductsByLocally(
    { commit, state, dispatch },
    payload: { sortBy: SORT_BY_TYPES; sortMethod: SORT_METHOD_TYPES },
  ): void {
    commit('mutateSortBy', payload.sortBy)

    if (checkFilterValue(state.filterValue)) {
      const sortedFilteredProducts =
        state.filteredProducts !== null && state.filteredProducts.length
          ? sortProducts(state.filteredProducts, payload)
          : null

      commit('mutateFilteredProductItems', { products: sortedFilteredProducts, filterValue: state.filterValue })

      return
    }

    const sortedProducts =
      state.products !== null && state.products.length ? sortProducts(state.products, payload) : null

    dispatch('setProductItems', sortedProducts)
  },
  clearFilterValue({ commit }): void {
    commit('mutateFilteredProductItems', { products: null, filterValue: null })
  },
} as ActionTree<ProductsState, RootState>
