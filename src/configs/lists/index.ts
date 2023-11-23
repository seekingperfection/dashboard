import { SORT_BY_TYPES, SortOptions } from '@/types/api/sortInterface'

export enum LIST_TYPES {
  PRODUCT_LIST = 'PRODUCT_LIST',
}

export interface ListHeaderItem {
  title: string
  sortOptions?: SortOptions
}

export interface ListOptions {
  markAsChecked?: true
}

export interface List {
  id: LIST_TYPES
  listOptions?: ListOptions
  listHeader?: Array<ListHeaderItem>
}

export const lists: Array<List> = [
  {
    id: LIST_TYPES.PRODUCT_LIST,
    listOptions: {
      markAsChecked: true,
    },
    listHeader: [
      {
        title: 'Title',
        sortOptions: {
          sortBy: SORT_BY_TYPES.TITLE,
        },
      },
      {
        title: 'Category',
      },
      {
        title: 'Brand',
        sortOptions: {
          sortBy: SORT_BY_TYPES.BRAND,
        },
      },
      {
        title: 'Price',
      },
      {
        title: 'Stock',
      },
      {
        title: 'Rating',
      },
    ],
  },
]
