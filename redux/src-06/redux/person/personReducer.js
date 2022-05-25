import CONSTANT from "../constant";

const persons = [{
  name: "NNN",
  age: 18,
  id: 1
}]

// eslint-disable-next-line import/no-anonymous-default-export
export default (preState = persons, action) => {
  const { type, data } = action

  if (type === CONSTANT.ADD_PERSON) {
    return [data, ...preState]
  }
  return persons

}
