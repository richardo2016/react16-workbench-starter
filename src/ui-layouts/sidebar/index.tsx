import React from 'react'
import { NavLink, useRouteMatch } from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';

import { ROUTE_CONFIG, computePath, computeMenuAnchorSelector, flattendPathMenus, findMatchedIndex } from '../../ui-routes/router'

import "./index.less";

const { SubMenu } = Menu;

function getNavLinkNode (
  child_item: any,
  route_path: false | string = computePath(child_item)
) {
  return (
    route_path ? (
      <NavLink
        id={computeMenuAnchorSelector(child_item.index)}
        to={route_path}
      >
        {child_item.label}
      </NavLink>
    ) : <>{child_item.label}</>
  )
}

function renderIcon(input: string | React.ReactComponentElement<any, any>, props?: any) {
  if (typeof input === 'string')
    return <Icon type={input} />
  else if (typeof input === 'object')
    return <input {...props} />
  else
    return null

}

/**
 * @global_state
 */
export default ({
  collapsed = false,
}) => {
  const matchedRoute = useRouteMatch(flattendPathMenus.map(x => x.path))

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="workbench-page__sidebar"
    >
      <div className="logo" />
      <Menu
        selectedKeys={(
          [matchedRoute ? findMatchedIndex(matchedRoute.path) : null].filter(x => x)
        ) as string[]}
        defaultOpenKeys={ROUTE_CONFIG.defaultOpeneds}
        mode="inline"
      >
        {ROUTE_CONFIG.menus.map((child_item, idx_l0) => {
          const { children = [] } = child_item || {};
          const hasChildren = !!(children && children.length)

          const key_l0 = child_item.index || `item-${child_item.index}-pidx-${0}-idx-${idx_l0}`

          if (!hasChildren) {
            return (
              <Menu.Item
                key={key_l0}
              >
                {child_item.icon && renderIcon(child_item.icon)}

                {getNavLinkNode(child_item, !hasChildren && computePath(child_item))}
              </Menu.Item>
            )
          }

          return (
            <SubMenu
              key={key_l0}
              title={
                <span>
                  {child_item.icon && renderIcon(child_item.icon)}

                  <span>{child_item.label}</span>
                </span>
              }
            >
              {children.map((child_route_cfg, idx_l1_group) => {
                const childItems = child_route_cfg.menus.map((child_item, idx_l2) => {
                  const key_l1_item = child_item.index || `item-${child_item.index}-pidx-${idx_l0}-group-${idx_l1_group}/${idx_l2}`

                  return (
                    <Menu.Item
                      key={key_l1_item}
                    >
                      {getNavLinkNode(child_item)}
                    </Menu.Item>
                  )
                })

                if (!child_route_cfg.group)
                  return childItems;

                const key_l1_group = `item-${child_item.index}-pidx-${idx_l0}-group-${idx_l1_group}`

                return (
                  <Menu.ItemGroup
                    key={key_l1_group}
                    title={child_route_cfg.group}
                  >
                    {childItems}
                  </Menu.ItemGroup>
                )
              })}
            </SubMenu>
          )
        })}
      </Menu>
    </Layout.Sider>
  )
}
