import "./index.css";

function Header(props) {
  const handleKeyUp = (event) => {
    const { key, target: { value = '' } } = event
    const { addList } = props
    if (key !== 'Enter' || !value.trim()) return

    addList({ id: props.list.length, name: value, checked: false })
  }

  return (
    <div>
      <input onKeyUp={(e) => handleKeyUp(e)} className="header-input" type="text" placeholder="请输入你的任务名称，回车确认" />
    </div>
  )
}

export default Header
