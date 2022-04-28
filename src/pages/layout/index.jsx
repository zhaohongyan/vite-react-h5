import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { LeftOutline, CloseOutline } from 'antd-mobile-icons'
import styles from './index.module.less'

export default () => {
  const na = useNavigate()
  useEffect(() => {
    console.log('layout render')
  })

  const back = () => {
    na(-1)
  }

  return (
    <div className={styles.container}>
      <main>
        <header>
          <LeftOutline onClick={back} />
          <span className={styles.text}>头部</span>
        </header>

        <section>
          <h3>网站开发中，敬请期待。。。</h3>
          <Outlet />
        </section>

      </main>
      <footer>
        <a href="http://beian.miit.gov.cn/" target="_blank">豫ICP备2021036443号-1</a>
      </footer>
    </div>
  )
}