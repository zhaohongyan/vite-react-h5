import React from 'react'
import { useParams } from 'react-router-dom'

export default () => {
  let { id } = useParams();
  return (
    <div>{id}</div>
  )
}