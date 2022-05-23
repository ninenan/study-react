/* eslint-disable import/no-anonymous-default-export */
import CONSTANT from "./conutConstant";
const map = new Map([
  [CONSTANT.INCREMENT, (pre, cur) => pre + cur],
  [CONSTANT.DECREMENT, (pre, cur) => pre - cur],
  ['DEFAULT', () => 0],
])

const DEFAULT_STATE = 0

export default (preState = DEFAULT_STATE, action) => {
  const { type = 'DEFAULT', data } = action
  if (map.get(type)) {
    return map.get(type)(preState, data)
  }
  return DEFAULT_STATE
}

