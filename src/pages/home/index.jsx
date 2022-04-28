import { useState } from 'react'
import { Button, Input, Toast } from 'antd-mobile'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'

export default function Home() {
  const [value, setValue] = useState('')
  let location = useLocation();
  let na = useNavigate();

  return (
    <div className={styles.container}>
      <h3>首页</h3>
      <h4>百度测试 所有路由必须replace:true</h4>
      <Button onClick={() => na('/page1/百度', { replace: true })}>replace: true</Button>

      <h4>sarafi测试</h4>
      <Button onClick={() => na('/page1/1')}>replace: false</Button>

      <h4>原生跳转</h4>
      <Button onClick={() => { location.href = '/page1/1' }}>location.href</Button>

      <h3>history.length: {history.length}</h3>
      <h3>history.state: {JSON.stringify(history.state)}</h3>
    </div>
  )
}
