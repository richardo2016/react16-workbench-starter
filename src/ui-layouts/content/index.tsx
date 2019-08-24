import React from 'react'
import { Layout } from 'antd';

import "./index.less";

export default ({
  children
}: {
  children: React.ReactChildren
}) => {
  return (
    <div
      className="workbench-page__content-wrapper"
    >
      <Layout.Content className="workbench-page__content"
      >
        {children}
      </Layout.Content>
    </div>
  )
}
