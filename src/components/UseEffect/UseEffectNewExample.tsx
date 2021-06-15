import { Button, Card, Row } from 'antd'
import React, { useState, useEffect } from 'react'

const UseEffectNewExample = () => {
  const [count, setCount] = useState(0)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // initialized and will render with every component render
    console.info('hello side effect')
  })

  useEffect(() => {
    fetch('foo').then(() => {
      setLoaded(true)
    })
    console.log('one time effect')
  }, []) // run one time  on the initialization of the component

  useEffect(() => {
    // Fetch something
    fetch('foo').then(() => {
      setLoaded(true)
    })
    console.info('count dependency effect')
  }, [count]) // Run when the count change

  useEffect(() => {
    // Destroyed
    return () => console.info('GoodBye component')
  })

  return (
    <Card title="Use Effect">
      <Row justify="center">
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </Row>
    </Card>
  )
}
export default UseEffectNewExample
