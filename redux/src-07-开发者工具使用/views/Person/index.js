import { connect } from "react-redux";
import { createRef } from "react";
import { createAddPersonAction } from "../../redux/person/personAction";
import "./index.css";

export const PersonUI = (props) => {

  const nameRef = createRef(null)
  const ageRef = createRef(null)
  const { persons } = props

  const addPerson = () => {
    const name = nameRef.current.value.trim()
    const age = ageRef.current.value.trim()
    const RE = /^[0-9]\d*$/

    if (!name.trim() || !age.trim()) return alert('请输入内容')

    if (!RE.test(age)) {
      return alert('请输入数字')
    }
    props.addPerson({
      name,
      age: +age,
      id: persons.length + 1
    })

    nameRef.current.value = null
    ageRef.current.value = null
  }

  return (
    <>
      <div className="person__container">
        <p>count 组件的值为 {props.count}</p>
        <div className="person__operate">
          <input ref={nameRef} type="text" placeholder="姓名" />
          <input ref={ageRef} type="text" placeholder="年龄" />
          <button onClick={() => addPerson()}>添加</button>
        </div>
        <ul className="person__list">
          {
            persons.map(item => {
              return <li key={item.id}>姓名{item.name}--年龄{item.age}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default connect(
  state => ({
    persons: state.persons,
    count: state.count
  }),
  {
    addPerson: createAddPersonAction
  }
)(PersonUI)
