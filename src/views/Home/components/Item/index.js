import "./index.css";

function Item(props) {
  const { content, index, changeList, removeItem } = props

  const remove = () => {
    removeItem(index)
  }

  const handleCheck = (event) => {
    changeList(index, event.target.checked)
  }

  return (
      <li className="item">
        <label>
          <div>
            <input type="checkbox" checked={content.checked} onChange={(e) => handleCheck(e)}/>
            <span>{content.name}</span>
          </div>
          <button className="btn" onClick={() => remove()}>删除</button>
        </label>
      </li>
  )
}

export default Item
