interface ApiResponse<T> {
  data: T
  status: number
  timestamp: Date
}

function ok<T>(data: T): ApiResponse<T> {
  return { data: data, status: 200, timestamp: new Date() }
}

function fail<T>(data: T, status: number): ApiResponse<T> {
  return { data: data, status: status, timestamp: new Date() }
}

console.log(ok({ id: 1, name: 'A' }))
console.log(ok([1, 2, 3]))
console.log(fail('error', 500))