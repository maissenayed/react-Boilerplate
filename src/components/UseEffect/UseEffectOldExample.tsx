import { Button } from 'antd'
import * as React from 'react'

export default class UseStateOldExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log('Button not clicked yet!')
  }

  componentDidUpdate() {
    console.log(`Clicked ${this.state.count} times`)
  }

  componentWillUnmount() {
    console.log('Button destroyed!')
  }

  render() {
    return (
      <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </Button>
    )
  }
}
