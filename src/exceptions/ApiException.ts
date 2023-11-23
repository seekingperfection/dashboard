class ApiError extends Error {
  content: any = null

  constructor(message: string, content: any) {
    super(message)

    this.content = content
  }
}

export default ApiError
