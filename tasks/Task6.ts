class Api {
  #url: string
  #cache = new Map<string, unknown>()

  constructor(url: string) {
    this.#url = url
  }

  async get<T>(path: string): Promise<T> {
    const key = this.#url + path

    if (this.#cache.has(key)) {
      console.log('cache hit')
      return this.#cache.get(key) as T
    }

    const result = { path: path, ok: true } as unknown as T
    this.#cache.set(key, result)
    return result
  }
}

const api = new Api('https://api.com')

async function main() {
  await api.get('/users')
  await api.get('/users')
}
main()