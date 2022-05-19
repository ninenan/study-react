import { useState } from 'react';
import styles from './index.module.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from './components/Footer'

function Home() {
  const [list, setList] = useState([
    { id: 0, name: '吃饭', checked: true },
    { id: 1, name: '睡觉', checked: false },
    { id: 2, name: '打豆豆', checked: true },
  ])

  const addList = (newItem) => {
    setList([
      newItem,
      ...list
    ])
  }

  const changeList = (index, val) => {
    list[index].checked = val
    setList([...list])
  }

  const resetList = () => {
    setList(prevList => prevList.map(item => {
      item.checked = false
      return item
    }))
  }

  const removeItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  const removeList = () => {
    setList([])
  }

  const handleCheckAll = (val) => {
    list.forEach((item) => item.checked = val)

    setList([...list])
  }

  return (
    <div className={styles['p-home-container']}>
      <div className={styles['p-home-title']}>
        Home Page
      </div>
      <div className='container'>
        <Header addList={addList} list={list} />
        <List list={list} changeList={changeList} removeItem={removeItem} />
        <Footer list={list} resetList={resetList} removeList={removeList} handleCheckAll={handleCheckAll} />
      </div>
    </div>
  )
}

export default Home
