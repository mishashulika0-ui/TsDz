type State =
  | { status: 'loading' }
  | { status: 'success'; data: number[] }
  | { status: 'error'; message: string }

function show(state: State): string {
  if (state.status === 'loading') {
    return 'Loading'
  }
  if (state.status === 'success') {
    return 'OK: ' + state.data.length
  }
  return 'Error: ' + state.message
}

console.log(show({ status: 'loading' }))
console.log(show({ status: 'success', data: [1, 2] }))
console.log(show({ status: 'error', message: 'fail' }))