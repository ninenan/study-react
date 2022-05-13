import "./index.css";

function Item() {
  return (
    <li>
      <label>
        <div>
          <input type="checkbox" defaultValue={true} />
          <span>xxxxx</span>
        </div>
        <button className="btn">删除</button>
      </label>
    </li>
  )
}

export default Item
