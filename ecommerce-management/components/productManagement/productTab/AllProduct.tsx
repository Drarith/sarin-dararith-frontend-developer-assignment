import { DataTable } from "./data-table";

import {columns} from "./columns";

const testData = {
  products: [
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      sku: "BEA-GLA-EYE-002",
      stock: 34,
      category: "beauty",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9170275171413",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 3,
      title: "Powder Canister",
      price: 14.99,
      sku: "BEA-VEL-POW-003",
      stock: 89,
      category: "beauty",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "8418883906837",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 4,
      title: "Red Lipstick",
      price: 12.99,
      sku: "BEA-CHI-LIP-004",
      stock: 91,
      category: "beauty",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9467746727219",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 5,
      title: "Red Nail Polish",
      price: 8.99,
      sku: "BEA-NAI-NAI-005",
      stock: 79,
      category: "beauty",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "4063010628104",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      price: 49.99,
      sku: "FRA-CAL-CAL-006",
      stock: 29,
      category: "fragrances",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "2451534060749",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      price: 129.99,
      sku: "FRA-CHA-CHA-007",
      stock: 58,
      category: "fragrances",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "4091737746820",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 8,
      title: "Dior J'adore",
      price: 89.99,
      sku: "FRA-DIO-DIO-008",
      stock: 98,
      category: "fragrances",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "1445086097250",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 9,
      title: "Dolce Shine Eau de",
      price: 69.99,
      sku: "FRA-DOL-DOL-009",
      stock: 4,
      category: "fragrances",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "3023868210708",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      price: 79.99,
      sku: "FRA-GUC-GUC-010",
      stock: 91,
      category: "fragrances",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "3170832177880",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      price: 1899.99,
      sku: "FUR-ANN-ANN-011",
      stock: 88,
      category: "furniture",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "3610757456581",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
    },
  ],
};

export default function AllProduct() {
  return (
    <div>
      <DataTable columns={columns} data={testData.products} />
    </div>
  );
}
