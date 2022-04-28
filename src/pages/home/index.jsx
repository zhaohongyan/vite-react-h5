import { useState } from 'react'
import { Button, Input, Toast } from 'antd-mobile'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'

export default function Home() {
  const [value, setValue] = useState('')
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h3>首页</h3>
      <Link to="/page1/1">link to page1</Link>
      <br />
      <Button onClick={() => navigate('/page1/2')}>navigate</Button>
    </div>
  )
}