import { withRouter } from "react-router-dom";

import * as Routes from "./";

import { ensurePrefix } from "../utils/string";

export const ROUTE_CONFIG = {
  defaultActive: "svc+component",
  defaultOpeneds: ["svc+component"],
  menus: [
    {
      index: "svc+component",
      label: "服务 & 组件",
      icon: "menu",

      children: [
        {
          group: "服务管理",
          menus: [
            {
              index: "svc-list",
              label: "服务列表",
              to: "/base/svc-list",
              component: withRouter(Routes.BackendServiceHome)
            }
          ]
        },
        {
          group: "组件管理",
          menus: [
            {
              index: "component-list",
              label: "组件列表",
              to: "/base/component-list",
              component: withRouter(Routes.ComponentHome)
            }
          ]
        }
      ]
    },
    {
      index: "routing",
      label: "路由规则",
      icon: "double-right"
    },
    {
      index: "algorithm",
      label: "算法",
      icon: "number"
    },
    {
      index: "sample",
      label: "样例",
      component: withRouter(Routes.Sample)
    }
  ]
};

export function routeHasChildren(menu_item) {
  return Array.isArray(menu_item.children) && menu_item.children.length;
}

export function walkOnMenus(
  menus,
  mapper,
  opts = {
    index_levels: [],
    node_levels: [],
    orig_parent: null,
    mapped_parent: null,
    root: null,
  }
) {
  const {
    index_levels = [],
    node_levels = [],
    // orig_parent = null,
    // mapped_parent = null,
    root: _root = null,
  } = opts || {};

  menus.forEach((menu_item, idx) => {
    const new_opts = {
      node_levels: node_levels.concat(menu_item),
      index_levels: index_levels.concat(idx),
      orig_parent: menu_item,
      mapped_parent: null,
      root: _root,
    };

    new_opts.mapped_parent = mapper(menu_item, new_opts)

    if (routeHasChildren(menu_item))
      menu_item.children.forEach((child_menu_item) => {
        return walkOnMenus(child_menu_item.menus, mapper, new_opts);
      });
  });
}

export function computePath(menu_item) {
  return menu_item.to || menu_item.path || ensurePrefix(menu_item.index);
}

export function computeMenuAnchorSelector(index_path) {
  return `J_app-sideber-anchor__${index_path}`;
}

const flattendPathMenus = [];

walkOnMenus(ROUTE_CONFIG.menus, menu_item => {
  if (routeHasChildren(menu_item)) return;

  flattendPathMenus.push({
    ...menu_item,
    path: computePath(menu_item),
  });
});

export { flattendPathMenus };
