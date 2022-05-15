import styles from './index.module.css'
import PubSub from "pubsub-js";

function Home() {
  let count = 1

  const toTestData = () => {
    count += 1

    PubSub.publish('changeData', {
      count: count,
      gun: {
        type: 'AK-47',
        bullet: 7.62,
      }
    })
  }

  return (
    <div className={styles['p-home-container']}>
      <div className={styles['p-home-title']}>
        我是 Home 组件
        <button onClick={() => toTestData()}> 传输数据 </button>
      </div>
    </div>
  )
}

export default Home
