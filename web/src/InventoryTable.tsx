import React from 'react';
import { Pencil, Trash, Plus } from 'lucide-react';

export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const items: InventoryItem[] = [
  {
    id: 1,
    name: 'Logitech MX Master 3',
    category: 'Electronics',
    quantity: 25,
    price: 99.99,
  },
  {
    id: 2,
    name: 'Dell Ultrasharp 27" Monitor',
    category: 'Electronics',
    quantity: 10,
    price: 379.99,
  },
  {
    id: 3,
    name: 'Office Chair Ergonomic Mesh',
    category: 'Furniture',
    quantity: 5,
    price: 149.99,
  },
  {
    id: 4,
    name: 'Pilot G2 Gel Pens (Pack of 12)',
    category: 'Office Supplies',
    quantity: 100,
    price: 14.99,
  },
  {
    id: 5,
    name: 'Standing Desk Converter',
    category: 'Furniture',
    quantity: 7,
    price: 199.99,
  },
  {
    id: 6,
    name: 'A4 Printer Paper (500 sheets)',
    category: 'Office Supplies',
    quantity: 250,
    price: 8.99,
  },
  {
    id: 7,
    name: 'Water Bottle (1L)',
    category: 'Groceries',
    quantity: 60,
    price: 1.99,
  },
];

export function InventoryTable() {
  return (
    <div className="overflow-x-auto p-4">
      <div className="flex items-center mb-4 gap-2">
        <h2 className="text-xl font-semibold">Inventory</h2>
        <button
          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>
      <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 border-t border-gray-200">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">{item.quantity}</td>
              <td className="px-4 py-2">${item.price.toFixed(2)}</td>
              <td
                className={`px-4 py-2 font-semibold ${
                  item.quantity > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.quantity > 0 ? 'In Stock' : 'Out of Stock'}
              </td>
              <td className="px-4 py-2 space-x-2">
                <button
                  className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  className="inline-flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
