import { Col, Divider, Row, Typography } from 'antd'

import * as React from 'react'
import styled from 'styled-components'
import UseStateNewExample from '../components/UseState/UseStateNewExample'
import UseEffectNewExample from '../components/UseEffect/UseEffectNewExample'
import PrototypalInheritance from '../components/PrototypalInheritance/PrototypalInheritance'
import EventLoop from '../components/eventLoop/EventLoop'

const LandingLayout = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  align-items: center;
  grid-template-columns: auto;
`
const Home = () => (
  <>
    <LandingLayout>
      <Row justify="center">
        <Typography.Title level={4}>
          Welcome back, let it be a productive day
        </Typography.Title>
      </Row>
      <Divider />
      <Row justify="center" gutter={[16, 16]}>
        {/* <Col span={8}>
          <PrototypalInheritance />
        </Col> */}
        {/* <Col span={8}>
          <EventLoop />
        </Col> */}
      </Row>
      <Divider />
      <Row justify="center" gutter={[16, 16]}>
        {/* <Col span={8}>
          <UseStateNewExample />
        </Col> */}
        <Col span={8}>
          <UseEffectNewExample />
        </Col>
      </Row>
    </LandingLayout>
  </>
)

export default Home
