import { Button, Card } from 'antd'
import * as React from 'react'

export default class UseStateOldExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <Card>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </Button>
      </Card>
    )
  }
}
