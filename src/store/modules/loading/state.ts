export interface LoadingState {
  loading: boolean
}

export default (): LoadingState => {
  return {
    loading: false,
  }
}
