import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Button, Empty } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

const NotificationBox = styled.div<{ open: boolean }>`
  max-width: calc(100vw - 32px);
  position: fixed;
  z-index: 1010;
  bottom: ${(props) => props.theme.paddingUnit * 2}px;
  left: ${(props) => props.theme.paddingUnit * 5}px;
  transform: translateY(${(props) => (props.open ? 0 : 64)}px);
  opacity: ${(props) => (props.open ? 1 : 0.1)};
  visibility: ${(props) => (!props.open ? 'hidden' : 'visible')};
  transition: transform 0.2s, opacity 0.18s,
    visibility ${(props) => (props.open ? '0s' : '0s linear 0.2s')};
  font-size: 16px;

  & .ant-notification-notice {
    padding-left: 48px;
  }

  & span.anticon {
    left: 16px;
    top: 16px;
    font-size: 22px;
    position: absolute;
  }
  & span.anticon.anticon-close-circle {
    color: ${(props) => props.theme.colors.red};
  }
  & span.anticon.anticon-check-circle {
    color: ${(props) => props.theme.colors.primary};
  }
`

const duration = 3000

const Notification = ({ notification, close }: any) => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {}, [notification])

  return (
    <NotificationBox open={open}>
      <div className="ant-notification-notice ant-notification-notice-closable">
        {notification.value[1] === 'success' ? (
          <CheckCircleOutlined />
        ) : (
          <CloseCircleOutlined />
        )}
        <Empty description="No data found...">
          <Button type="primary">Add one now</Button>
        </Empty>
      </div>
    </NotificationBox>
  )
}

export default Notification
