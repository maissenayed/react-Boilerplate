import { Card } from 'antd'
import React from 'react'

const EventLoop = () => {
  // * Task Queue for synchronous functions
  // * Micro Task Queue asynchronous functions
  // * MicroTask are always prioritized when entering the loop

  setTimeout(() => console.log(' do this first? '), 0)

  Promise.resolve().then(() => console.log(' do this second? ')) // ? MicroTask Queue

  console.log('Let there be Javascript! ')

  return <Card>Event loop example</Card>
}
export default EventLoop
