import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Space, Button, Input, Toast } from 'antd-mobile'

export default () => {
  let { id } = useParams();
  const na = useNavigate()
  return (
    <div>
      <h1>Page1 页面</h1>
      id: {id}
      <h4>百度测试 replace:true</h4>
      <Button onClick={() => na('/')}>na('/')跳转首页</Button>

      <h4>sarafi测试</h4>
      <Button onClick={() => na('/')}>na('/')跳转首页</Button>

      <h4>原生跳转</h4>
      <Button onClick={() => { location.href = '/' }}>location.href</Button>

      <h3>history.length: {history.length}</h3>
      <h3>history.state: {JSON.stringify(history.state)}</h3>
    </div>
  )
}