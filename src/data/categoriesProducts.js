

import clothes from '../assets/categories/clothes.png'
import shoes from '../assets/categories/shoes.png'
import electronics from '../assets/categories/electronics.png'
import home from '../assets/categories/home.png'

import { v4 as uuidv4 } from "uuid"

export const categoriesProducts = [
    {
        id: uuidv4(),
        category: "Clothing",
        image: clothes,
        icon: 'fa-shirt',
        path: '/clothing'
    },
    {
        id: uuidv4(),
        category: "Shoes",
        image: shoes,
        icon: 'fa-person-walking',
        path: '/shoes'
    },
    {
        id: uuidv4(),
        category: "electronics",
        image: electronics,
        icon: 'fa-headphones',
        path: '/electronics'
    },
    {
        id: uuidv4(),
        category: "Home & Living",
        image: home,
        icon: 'fa-house',
        path: '/home&living'
    },
];