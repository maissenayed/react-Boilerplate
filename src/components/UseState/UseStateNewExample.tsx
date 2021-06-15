import { Button, Card, Row } from 'antd'
import React, { useState } from 'react'

const UseStateNewExample = () => {
  const [count, setCount] = useState(0)

  return (
    <Card title="Use State">
      <Row justify="center">
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </Row>
    </Card>
  )
}
export default UseStateNewExample
