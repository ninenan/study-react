import './index.css'

function Footer(props) {
  const { list, handleCheckAll } = props
  const count = list.reduce((previous, current) => {
    if (current.checked) {
      previous += 1
    }

    return previous
  }, 0)

  const checked = list.length === count && count > 0

  return (
    <div className='footer'>
      <label>
        <div>
          <input type="checkbox" checked={checked} onChange={(event) => handleCheckAll(event.target.checked)} />
          <span>已选择{count}/总共{list.length}条</span>
        </div>
        <button className="btn" onClick={() => props.removeList()}>清空</button>
      </label>
    </div>
  )
}

export default Footer
