/// <reference types="react-router" />

interface MenuItemChildNode {
    group?: string
    menus: MenuItem[]
  }[]
  interface MenuItem {
    index?: string;
    label: string;
    icon?: string;
    to?: string;
    component?: WithRouterStatics<any>
    hideInSidebar?: boolean
    children?: MenuItemChildNode[]
  }
  interface FlattendMenuItem extends MenuItem {
    path: string
  }
  