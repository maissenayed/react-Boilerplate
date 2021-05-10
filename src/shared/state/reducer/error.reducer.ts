// errorReducer.js

const initState = {
  error: null,
}

export default function errorReducer(state = initState, action: any) {
  const { error } = action

  if (error) {
    return {
      error,
    }
  }

  return state
}
