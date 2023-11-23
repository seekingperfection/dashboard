export enum SORT_METHOD_TYPES {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum SORT_BY_TYPES {
  TITLE = 'Title',
  BRAND = 'Brand',
}

export interface SortOptions {
  sortBy: SORT_BY_TYPES
  sortMethod?: SORT_METHOD_TYPES
}
