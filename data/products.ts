export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Wireless Headphones',
        price: 129.99,
        description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300',
        category: 'Electronics'
    },
    {
        id: '2',
        name: 'Smart Watch',
        price: 199.99,
        description: 'Fitness tracker with heart rate monitoring, GPS, and water resistance.',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=300',
        category: 'Electronics'
    },
    {
        id: '3',
        name: 'Coffee Maker',
        price: 79.99,
        description: 'Programmable coffee maker with built-in grinder and timer.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=300',
        category: 'Home'
    },
    {
        id: '4',
        name: 'Running Shoes',
        price: 89.99,
        description: 'Lightweight running shoes with responsive cushioning.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300',
        category: 'Sports'
    },
    {
        id: '5',
        name: 'Backpack',
        price: 49.99,
        description: 'Durable backpack with laptop compartment and water bottle holder.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300',
        category: 'Fashion'
    }
]; 