import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Input, Toast } from 'antd-mobile'

export default () => {
  let { id } = useParams();
  const na = useNavigate()
  return (
    <div>
      <Button onClick={() => na(-1)}>返回上一页</Button>
      <br />
      id: {id}
    </div>
  )
}