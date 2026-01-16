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

export type ProductTable = {
  id: number;
  title: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  thumbnail: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
};
