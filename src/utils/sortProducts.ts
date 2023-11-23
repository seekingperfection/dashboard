import { Product } from '@/types/api/productInterface'
import { SORT_BY_TYPES, SORT_METHOD_TYPES } from '@/types/api/sortInterface'

export const sortProducts = (
  products: Array<Product>,
  payload: { sortBy: SORT_BY_TYPES; sortMethod: SORT_METHOD_TYPES },
): Array<Product> => {
  return products.sort((a: any, b: any) => {
    const aValue = a[payload.sortBy.toLowerCase()]
    const bValue = b[payload.sortBy.toLowerCase()]

    if (payload.sortMethod === SORT_METHOD_TYPES.ASC) {
      return aValue.localeCompare(bValue)
    } else {
      return bValue.localeCompare(aValue)
    }
  })
}
