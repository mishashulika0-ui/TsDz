class HttpError extends Error {
  readonly code: number

  constructor(message: string, code: number) {
    super(message)
    this.name = 'HttpError'
    this.code = code
  }

  format(): string {
    return '[' + this.code + '] ' + this.message
  }
}

const e = new HttpError('Not found', 404)
console.log(e.format())