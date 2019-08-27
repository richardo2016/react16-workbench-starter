import React from 'react'
import { Layout, Icon } from 'antd';

import "./index.less";
import { useCtxState } from '@/App.store';

/**
 * @global_state
 */
export default () => {
  const [{
    sidebarCollapsed = false
  }, dispatch] = useCtxState()

  return (
    <Layout.Header className="workbench-page__header">
      <Icon
        className="trigger"
        type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => {
          dispatch({ type: 'toggle:sidebarCollapsed' })
        }}
      />
    </Layout.Header>
  )
}
