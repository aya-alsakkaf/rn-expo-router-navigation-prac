import { Product, products } from './products';

export interface Order {
    id: string;
    orderNumber: string;
    date: string;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    shippingAddress: string;
}

export interface OrderItem {
    product: Product;
    quantity: number;
    price: number;
}

export const orders: Order[] = [
    {
        id: '1',
        orderNumber: 'ORD-2023-001',
        date: '2023-12-10',
        items: [
            {
                product: products[0],
                quantity: 1,
                price: products[0].price
            },
            {
                product: products[2],
                quantity: 2,
                price: products[2].price
            }
        ],
        total: products[0].price + (products[2].price * 2),
        status: 'delivered',
        shippingAddress: '123 Main St, Anytown, CA 94123'
    },
    {
        id: '2',
        orderNumber: 'ORD-2023-002',
        date: '2023-12-15',
        items: [
            {
                product: products[1],
                quantity: 1,
                price: products[1].price
            }
        ],
        total: products[1].price,
        status: 'shipped',
        shippingAddress: '456 Oak Ave, Somewhere, NY 10001'
    },
    {
        id: '3',
        orderNumber: 'ORD-2024-001',
        date: '2024-01-05',
        items: [
            {
                product: products[3],
                quantity: 1,
                price: products[3].price
            },
            {
                product: products[4],
                quantity: 1,
                price: products[4].price
            }
        ],
        total: products[3].price + products[4].price,
        status: 'processing',
        shippingAddress: '789 Pine Rd, Elsewhere, TX 75001'
    },
    {
        id: '4',
        orderNumber: 'ORD-2024-002',
        date: '2024-02-20',
        items: [
            {
                product: products[2],
                quantity: 3,
                price: products[2].price
            }
        ],
        total: products[2].price * 3,
        status: 'pending',
        shippingAddress: '321 Elm Blvd, Nowhere, WA 98001'
    },
    {
        id: '5',
        orderNumber: 'ORD-2024-003',
        date: '2024-03-01',
        items: [
            {
                product: products[0],
                quantity: 1,
                price: products[0].price
            },
            {
                product: products[1],
                quantity: 1,
                price: products[1].price
            },
            {
                product: products[4],
                quantity: 2,
                price: products[4].price
            }
        ],
        total: products[0].price + products[1].price + (products[4].price * 2),
        status: 'processing',
        shippingAddress: '555 Cedar Ln, Anyplace, IL 60001'
    }
]; 