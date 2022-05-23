import CONSTANT from "./conutConstant";
export const createIncrementAction = data => ({ type: CONSTANT.INCREMENT, data })
export const createDecrementAction = data => ({ type: CONSTANT.DECREMENT, data })
