import CONSTANT from "../constant";

export const addPerson = personObj => ({
  type: CONSTANT.ADD_PERSON, data: personObj
})
