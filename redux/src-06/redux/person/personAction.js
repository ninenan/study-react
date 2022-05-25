import CONSTANT from "../constant";

export const createAddPersonAction = personObj => ({
  type: CONSTANT.ADD_PERSON, data: personObj
})
