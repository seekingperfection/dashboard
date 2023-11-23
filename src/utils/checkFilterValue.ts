export const checkFilterValue = (filterValue: string | null): boolean => {
  return (filterValue !== null && /[a-zA-Z]/.test(filterValue)) || filterValue === ''
}
