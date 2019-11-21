import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";

import { Layout } from 'antd';
import { connect, useCtxState } from './App.store';

import Sidebar from './ui-layouts/sidebar';
import Header from './ui-layouts/header';
import Content from './ui-layouts/content';

import "./App.less";

const { flattendPathMenus } = require('./ui-routes/router');

const App = () => {
  const [{
    sidebarCollapsed = false
  }] = useCtxState()

  return (
    <Layout className="workbench-page">
      <Router basename={`/`}>
        <Sidebar collapsed={sidebarCollapsed} />
        <Layout>
          <Header />
          <Content>
            {flattendPathMenus.map((menuItem: any) => {
              if (!menuItem.component)
                  return null;

              return (
                <Route
                    key={menuItem.index}
                    path={menuItem.path}
                    exact={menuItem.exact}
                    render={props => <menuItem.component {...props} MenuItemProp={menuItem} />}
                />
              );
            })}
          </Content>
        </Layout>
      </Router>
    </Layout>
  )
}

export default connect(App)
