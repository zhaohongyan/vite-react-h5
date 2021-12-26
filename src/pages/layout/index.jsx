import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.less'

export default () => {
  return (
    <div className={styles.container}>
      <main>
        <header>头部</header>

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