/// <reference types="react-router" />

interface MenuItemChildNode {
  group?: string
  menus: MenuItem[]
}

interface MenuItem {
  index: string;
  label: string;
  to?: string;

  icon?: string;
  exact?: boolean;
  component?: WithRouterStatics<any>
  hideInSidebar?: boolean
  children?: MenuItemChildNode[]
}

interface FlattendMenuItem extends MenuItem {
  path: string
}
