import CONSTANT from "./conutConstant";

// 同步
export const createIncrementAction = data => ({ type: CONSTANT.INCREMENT, data })
export const createDecrementAction = data => ({ type: CONSTANT.DECREMENT, data })
// 异步
export const createIncrementActionAsync = (data, delay) => {
  // debounce()
  return (dispatch) => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(createIncrementAction(data))
        resolve({
          state: 'success'
        })
      }, delay)
    })
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
