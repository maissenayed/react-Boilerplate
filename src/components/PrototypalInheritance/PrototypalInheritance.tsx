import { Card } from 'antd'
import React, { useEffect, useState } from 'react'

const PrototypalInheritance = () => {
  const Dog = { barks: true }

  const Pug = Object.create(Dog)

  console.log('prototype:', Dog, 'object:', Pug)

  const protoInheritance = Pug.barks // ? true

  console.log('did pug get the shallow attribute signature', protoInheritance)

  console.log(
    'Pug has own property',
    Object.prototype.hasOwnProperty.call(Pug, 'barks')
  ) // ! false

  console.log(
    'Dog has own property',
    Object.prototype.hasOwnProperty.call(Dog, 'barks')
  ) // ? true

  console.log('is it a prototype', Object.getPrototypeOf(Pug) === Dog) // ! true

  const [state, setState] = useState(false)
  useEffect(() => {
    const result = { ...Pug, barks: true }

    setState(result.barks)
  }, [Pug])

  return <Card>{`Prototypal Inheritance ${state}`}</Card>
}
export default PrototypalInheritance

// ? function chaining
export class Conversion {
  fromValue: string

  toValue: string

  valueGiven: number

  constructor() {
    this.fromValue = ''
    this.toValue = ''
    this.valueGiven = 0
  }

  value = (valueGiven: number) => {
    this.valueGiven = valueGiven
    return this
  }

  from = (fromValue: any) => {
    this.fromValue = fromValue
    return this
  }

  to = (toValue: any) => {
    this.toValue = toValue

    return `${this.fromValue} ${this.valueGiven} ${this.toValue} `
  }
}
