import React, { useEffect, useState } from 'react'
import { useRoutes } from "react-router-dom";
import moment from 'moment'
import routes from './routers'
import styles from './App.module.less'

let timerId
function App() {
  let element = useRoutes(routes);
  // now moment对象
  let [now, setNow] = useState(moment())

  const timer = () => {
    timerId = setTimeout(() => {
      setNow(moment())
    }, 1000);
  }

  useEffect(() => {
    timer()
    return () => {
      clearTimeout(timerId)
    }
  })

  console.log('===')

  return (
    <div className={styles.container}>
      <main>
        <header>头部</header>
        <section>
          <h3>网站开发中,敬请期待……</h3>
          <h4>当前时间:{now.format('YYYY-MM-DD HH:mm:ss')}</h4>
          {element}
        </section>
      </main>
      <footer>
        <a href="http://beian.miit.gov.cn/" target="_blank">豫ICP备2021036443号-1</a>
      </footer>
    </div>
  );
}

export default App
