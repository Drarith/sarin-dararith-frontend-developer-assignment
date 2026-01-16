export type UserMenu = {
  name: string;
  label: string;
  groups: MenuGroup[];
};

type MenuItem = {
  label: string;
  shortcut?: string;
  type?: string;
  disabled?: boolean;
  subItems?: MenuItem[];
};

type MenuGroup = {
  items: MenuItem[];
};
