import React from 'react'
import { HashRouter, Route, useHistory, useRouteMatch } from "react-router-dom";

import { Layout } from 'antd';
import { connect, useCtxState } from './App.store';

import Sidebar from './ui-layouts/sidebar';
import Header from './ui-layouts/header';
import Content from './ui-layouts/content';

import "./App.less";

import { ROUTE_CONFIG, flattendPathMenus } from './ui-routes/router';

const RouterAnchor = () => {
  const history = useHistory();
  const routeMatched = useRouteMatch(flattendPathMenus.map(x => x.path));

  React.useEffect(() => {
    if (!ROUTE_CONFIG.defaultPathname || routeMatched) return ;

    history.replace(ROUTE_CONFIG.defaultPathname);
  }, []);

  return null;
}

const App = () => {
  const [
    {
      sidebarCollapsed = false
    }
  ] = useCtxState()

  return (
    <Layout className="workbench-page">
      <HashRouter basename={`/`}>
        <RouterAnchor />
        <Sidebar collapsed={sidebarCollapsed} />
        <Layout>
          <Header />
          <Content>
            {flattendPathMenus.map((menuItem) => {
              if (!menuItem.component)
                return null;

              return (
                <Route
                  key={menuItem.index}
                  path={menuItem.path}
                  exact={menuItem.exact}
                  strict
                  render={props => <menuItem.component {...props} MenuItemProp={menuItem} />}
                >
                  <menuItem.component MenuItemProp={menuItem} />
                </Route>
              );
            }) as any}
          </Content>
        </Layout>
      </HashRouter>
    </Layout>
  )
}

export default connect(App)
