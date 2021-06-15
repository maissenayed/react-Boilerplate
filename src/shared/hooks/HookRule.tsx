import { Button } from 'antd'
import React from 'react'

const useHook = () => () => {}

const HookRule = () => {
  useHook() // ? always call them at the top level of a functional component or custom hook

  const fun = () => {
    useHook() // ! this is wrong
  }
  return <Button onClick={() => useHook()} /> // ! this is wrong
}

export default HookRule
