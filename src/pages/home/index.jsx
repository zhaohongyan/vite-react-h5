import { useState } from 'react'
import { Button, Input, Toast } from 'antd-mobile'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'

export default function Home() {
  const [value, setValue] = useState('')
  let location = useLocation();
  let navigate = useNavigate();

  const submit = () => {
    if (!value) {
      Toast.show({
        content: '请输入姓名',
        position: 'top',
      })
      return
    }
    navigate(`/page1/${value}`)
  }

  return (
    <div className={styles.container}>
      <p>请输入被表白人的姓名</p>
      <div className={styles.border_b}>
        <Input
          clearable
          placeholder='请输入姓名'
          value={value}
          onChange={val => {
            setValue(val)
          }}
        />
      </div>

      <Button block color='primary' size='middle' onClick={submit}>确定</Button>
    </div>
  )
}