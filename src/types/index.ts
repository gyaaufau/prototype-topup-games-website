// Type definitions for GyaStore

export interface Game {
    id: string;
    title: string;
    image: string;
    developer: string;
    status: string;
    category: string;
}

export interface Nominal {
    id: number;
    amount: string;
    price: number;
    bonus: number;
}

export interface Payment {
    id: string;
    name: string;
    logo: string;
    category: string;
}

export interface OrderData {
    game: string;
    userId: string;
    serverId: string;
    item: string;
    price: number;
    payment: string;
}

export interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    gradient: string;
}
