
import yellowCrop from '../assets/clothes/Yellow-Crop-Set.jpg'
import wireless from "../assets/electronics/Wireless-Headphones.jpg"
import smartWatch from "../assets/electronics/Smart-Watch.jpg"
import retro from "../assets/shoes/Retro-Skate-Sneakers.jpg"
import minimalist from "../assets/shoes/Minimalist-Sneaker.jpg"

import { v4 as uuidv4 } from "uuid"

export const dayProducts = [
    {
        id: uuidv4(),
        title: "Yellow Crop Set",
        price: 59.99,
        category: "clothes",
        rating: 4.9,
        image: yellowCrop
    },
    {
        id: uuidv4(),
        title: "Wireless Headphones",
        price: 65.00,
        category: "electronics",
        rating: 4.7,
        image: wireless
    },
    {
        id: uuidv4(),
        title: "Smart Watch",
        price: 49.99,
        category: "electronics",
        rating: 4.8,
        image: smartWatch
    },
    {
        id: uuidv4(),
        title: "Retro Skate Sneakers",
        price: 89.99,
        category: "shoes",
        rating: 4.6,
        image: retro
    },
    {
        id: uuidv4(),
        title: "Minimalist Sneaker",
        price: 65.00,
        category: "shoes",
        rating: 4.5,
        image: minimalist
    },
];