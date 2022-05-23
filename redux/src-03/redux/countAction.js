import CONSTANT from "./conutConstant";

export const createIncrementAction = data => ({ type: CONSTANT.INCREMENT, data })
export const createDecrementAction = data => ({ type: CONSTANT.DECREMENT, data })
export const createIncrementActionAsync = (data, delay) => {
  debounce()
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, delay)
  }
}

const debounce = (fn, delay) => {
  let timer = null

  const debounced = (...rest) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      return fn.apply(this, rest)
    }, delay)
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = null
  }

  return debounced
}
