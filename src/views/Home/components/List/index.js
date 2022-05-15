import "./index.css";
import Item from '../Item'

function List(props) {
  const { list, changeList, removeItem } = props

  return (
    <ul className="list">
      {list.length ?
        list.map((item, index) => {
          return <Item key={item.id} content={{ ...item }} index={index} changeList={changeList} removeItem={removeItem} />
        }) : '暂无数据'
      }
    </ul>
  )
}

export default List
