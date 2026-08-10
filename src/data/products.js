// categories products
import clothes from '../assets/categories/clothes.png'
import categoriesShoes from '../assets/categories/shoes.png'
import electronics from '../assets/categories/electronics.png'
import home from '../assets/categories/home.png'

// clothing
import oneClothing from '../assets/clothing/1.png'
import twoClothing from '../assets/clothing/2.png'
import threeClothing from '../assets/clothing/3.png'
import fourClothing from '../assets/clothing/4.png'
import fiveClothing from '../assets/clothing/5.png'
import sixClothing from '../assets/clothing/6.png'
import sevenClothing from '../assets/clothing/7.png'
import eightClothing from '../assets/clothing/8.png'

// electronics
import oneElectronics from "../assets/electronics/1.png"
import twoElectronics from "../assets/electronics/2.jpg"
import threeElectronics from "../assets/electronics/3.png"
import fourElectronics from "../assets/electronics/4.png"
import fiveElectronics from "../assets/electronics/5.png"
import sixElectronics from "../assets/electronics/6.png"
import sevenElectronics from "../assets/electronics/7.png"
import eightElectronics from "../assets/electronics/8.png"

// featuredProducts1
import oneFeaturedProducts1 from '../assets/featured products/1.png'
import twoFeaturedProducts1 from '../assets/featured products/2.png'
import threeFeaturedProducts1 from '../assets/featured products/3.png'
import fourFeaturedProducts1 from '../assets/featured products/4.png'
import fiveFeaturedProducts1 from '../assets/featured products/5.png'
import sixFeaturedProducts1 from '../assets/featured products/6.png'

// featuredProducts2
import oneFeaturedProducts2 from '../assets/featured products/1.png'
import twoFeaturedProducts2 from '../assets/featured products/2.png'
import threeFeaturedProducts2 from '../assets/featured products/3.png'
import fourFeaturedProducts2 from '../assets/featured products/4.png'
import fiveFeaturedProducts2 from '../assets/featured products/5.png'
import sixFeaturedProducts2 from '../assets/featured products/6.png'
import sevenFeaturedProducts2 from '../assets/featured products/7.png'
import eightFeaturedProducts2 from '../assets/featured products/8.png'

// home&living
import oneHomeLiving from '../assets/home&living/1.png'
import twoHomeLiving from '../assets/home&living/2.png'
import threeHomeLiving from '../assets/home&living/3.png'
import fourHomeLiving from '../assets/home&living/4.png'
import fiveHomeLiving from '../assets/home&living/5.png'
import sixHomeLiving from '../assets/home&living/6.png'
import sevenHomeLiving from '../assets/home&living/7.png'
import eightHomeLiving from '../assets/home&living/8.png'

// shoes
import oneShoes from "../assets/shoes/1.png"
import twoShoes from "../assets/shoes/2.png"
import threeShoes from "../assets/shoes/3.png"
import fourShoes from "../assets/shoes/4.png"
import fiveShoes from "../assets/shoes/5.png"
import sixShoes from "../assets/shoes/6.png"
import sevenShoes from "../assets/shoes/7.png"
import eightShoes from "../assets/shoes/8.png"
import nineShoes from "../assets/shoes/9.jpg"
import tenShoes from "../assets/shoes/10.jpg"

// topSellers
import oneTopSellers from "../assets/top sellers/1.png"
import twoTopSellers from "../assets/top sellers/2.png"
import threeTopSellers from "../assets/top sellers/3.png"
import fourTopSellers from "../assets/top sellers/4.png"
import fiveTopSellers from "../assets/top sellers/5.png"
import sixTopSellers from "../assets/top sellers/6.png"
import sevenTopSellers from "../assets/top sellers/7.png"
import eightTopSellers from "../assets/top sellers/8.png"

// topSellers
import oneTopSellers2 from '../assets/top sellers2/1.png'
import twoTopSellers2 from '../assets/top sellers2/2.png'
import threeTopSellers2 from '../assets/top sellers2/3.png'
import fourTopSellers2 from '../assets/top sellers2/4.png'
import fiveTopSellers2 from '../assets/top sellers2/5.png'
import sixTopSellers2 from '../assets/top sellers2/6.png'
import sevenTopSellers2 from '../assets/top sellers2/7.png'
import eightTopSellers2 from '../assets/top sellers2/8.png'
import nineTopSellers2 from '../assets/top sellers2/9.png'
import tenTopSellers2 from '../assets/top sellers2/10.png'
import elevenTopSellers2 from '../assets/top sellers2/11.png'
import twelveTopSellers2 from '../assets/top sellers2/13.png'
import thirteenTopSellers2 from '../assets/top sellers2/14.png'
import fourteenTopSellers2 from '../assets/top sellers2/15.png'
import fifteenTopSellers2 from '../assets/top sellers2/16.png'


// categories
export const categoriesProducts = [
    {
        category: "Clothing",
        image: clothes,
        icon: 'fa-shirt',
        path: '/clothing'
    },
    {
        category: "Shoes",
        image: categoriesShoes,
        icon: 'fa-person-walking',
        path: '/shoes'
    },
    {
        category: "electronics",
        image: electronics,
        icon: 'fa-headphones',
        path: '/electronics'
    },
    {
        category: "Home & Living",
        image: home,
        icon: 'fa-house',
        path: '/home&living'
    },
];

// clothing
export const clothing = [
  {
    id: 9,
    title: "Beige Blazer",
    price: "89",
    rating: 4.8,
    image: oneClothing,
  },
  {
    id: 10,
    title: "Cream Sweater",
    price: "65",
    rating: 4.7,
    image: twoClothing,
  },
  {
    id: 11,
    title: "Black Shirt",
    price: "49",
    rating: 4.6,
    image: threeClothing,
  },
  {
    id: 12,
    title: "Striped Top",
    price: "42",
    rating: 4.5,
    image: fourClothing,
  },
  {
    id: 13,
    title: "Gray Hoodie",
    price: "55",
    rating: 4.8,
    image: fiveClothing,
  },
  {
    id: 14,
    title: "Brown Sweatshirt",
    price: "59",
    rating: 4.7,
    image: sixClothing,
  },
  {
    id: 15,
    title: "Satin Dress",
    price: "95",
    rating: 4.9,
    image: sevenClothing,
  },
  {
    id: 16,
    title: "Classic Trench",
    price: "110",
    rating: 4.8,
    image: eightClothing,
  },
];

// electronics
export const electronic = [
  {
    id: 27,
    title: "Smartphone",
    price: 999,
    rating: 4.9,
    image: oneElectronics,
  },
  {
    id: 28,
    title: "Laptop",
    price: 1499,
    rating: 4.8,
    image: twoElectronics,
  },
  {
    id: 29,
    title: "Headphones",
    price: 249,
    rating: 4.7,
    image: threeElectronics,
  },
  {
    id: 30,
    title: "Smart Watch",
    price: 349,
    rating: 4.6,
    image: fourElectronics,
  },
  {
    id: 31,
    title: "Camera",
    price: 1299,
    rating: 4.8,
    image: fiveElectronics,
  },
  {
    id: 32,
    title: "Earbuds",
    price: 179,
    rating: 4.7,
    image: sixElectronics,
  },
  {
    id: 33,
    title: "Tablet",
    price: 699,
    rating: 4.8,
    image: sevenElectronics,
  },
  {
    id: 34,
    title: "Speaker",
    price: 159,
    rating: 4.6,
    image: eightElectronics,
  },
];

// featuredProducts1
export const featuredProducts1 = [
  {
    title: "Knit Sneakers",
    price: 89.99,
    rating: 4.8,
    image: oneFeaturedProducts1
  },
  {
    title: "Urban Shield Jacket",
    price: 129.99,
    rating: 4.7,
    image: twoFeaturedProducts1
  },
  {
    title: "Halo Table Lamp",
    price: 59.99,
    rating: 4.9,
    image: threeFeaturedProducts1
  },
  {
    title: "Vacuum Pro",
    price: 349.99,
    rating: 4.6,
    image: fourFeaturedProducts1
  },
  {
    title: "Luna Lounge Chair",
    price: 279.99,
    rating: 4.8,
    image: fiveFeaturedProducts1
  },
  {
    title: "Hair Dryer",
    price: 99.99,
    rating: 4.7,
    image: sixFeaturedProducts1
  }
];

// featuredProducts2
export const featuredProducts2 = [
  {
    id: 1,
    title: "Knit Sneakers",
    category: "Shoes",
    price: 89.99,
    rating: 4.8,
    image: oneFeaturedProducts2
  },
  {
    id: 2,
    title: "Urban Shield Jacket",
    category: "Clothing",
    price: 129.99,
    rating: 4.7,
    image: twoFeaturedProducts2
  },
  {
    id: 3,
    title: "Halo Table Lamp",
    category: "Home Decor",
    price: 59.99,
    rating: 4.9,
    image: threeFeaturedProducts2
  },
  {
    id: 4,
    title: "Vacuum Pro",
    category: "Home Appliances",
    price: 349.99,
    rating: 4.6,
    image: fourFeaturedProducts2
  },
  {
    id: 5,
    title: "Luna Lounge Chair",
    category: "Furniture",
    price: 279.99,
    rating: 4.8,
    image: fiveFeaturedProducts2
  },
  {
    id: 6,
    title: "AirFlow Ionic Hair Dryer",
    category: "Beauty",
    price: 99.99,
    rating: 4.7,
    image: sixFeaturedProducts2
  },
  {
    id: 7,
    title: "Luna Lounge Chair",
    category: "Furniture",
    price: 279.99,
    rating: 4.8,
    image: sevenFeaturedProducts2
  },
  {
    id: 8,
    title: "Hair Dryer",
    category: "Beauty",
    price: 99.99,
    rating: 4.7,
    image: eightFeaturedProducts2
  }
];

// home&living
export const homeLiving = [
  {
    id: 35,
    title: "Flower Vase",
    price: 35,
    rating: 4.6,
    image: oneHomeLiving,
  },
  {
    id: 36,
    title: "Table Lamp",
    price: 49,
    rating: 4.9,
    image: twoHomeLiving,
  },
  {
    id: 37,
    title: "Cookware Set",
    price: 129,
    rating: 4.8,
    image: threeHomeLiving,
  },
  {
    id: 38,
    title: "Coffee Machine",
    price: 149,
    rating: 4.8,
    image: fourHomeLiving,
  },
  {
    id: 39,
    title: "Vacuum Cleaner",
    price: 199,
    rating: 4.7,
    image: fiveHomeLiving,
  },
  {
    id: 40,
    title: "Bedding Set",
    price: 89,
    rating: 4.7,
    image: sixHomeLiving,
  },
  {
    id: 41,
    title: "Toaster Oven",
    price: 109,
    rating: 4.5,
    image: sevenHomeLiving,
  },
  {
    id: 42,
    title: "Air Purifier",
    price: 179,
    rating: 4.6,
    image: eightHomeLiving,
  },
];

// shoes
export const shoes = [
  {
    id: 17,
    title: "Classic Heels",
    price: 89,
    rating: 4.8,
    image: oneShoes,
  },
  {
    id: 18,
    title: "White Sneakers",
    price: 75,
    rating: 4.7,
    image: twoShoes,
  },
  {
    id: 19,
    title: "Formal Shoes",
    price: 99,
    rating: 4.9,
    image: threeShoes,
  },
  {
    id: 20,
    title: "Block Heels",
    price: 84,
    rating: 4.6,
    image: fourShoes,
  },
  {
    id: 21,
    title: "Sport Sneakers",
    price: 79,
    rating: 4.8,
    image: fiveShoes,
  },
  {
    id: 22,
    title: "Leather Casual",
    price: 92,
    rating: 4.7,
    image: sixShoes,
  },
  {
    id: 23,
    title: "Ballet Flats",
    price: 59,
    rating: 4.5,
    image: sevenShoes,
  },
  {
    id: 24,
    title: "Suede Loafers",
    price: 88,
    rating: 4.8,
    image: eightShoes,
  },
  {
    id: 25,
    title: "Ballet Flats",
    price: 55,
    rating: 4.5,
    image: nineShoes,
  },
  {
    id: 26,
    title: "Suede Loafers",
    price: 80,
    rating: 4.8,
    image: tenShoes,
  },
];

// topSellers
export const topSellers = [
  {
    image: oneTopSellers,
  },
  {
    image: twoTopSellers,
  },
  {
    image: threeTopSellers,
  },
  {
    image: fourTopSellers,
  },
  {
    image: fiveTopSellers,
  },
  {
    image: sixTopSellers,
  },
  {
    image: sevenTopSellers,
  },
  {
    image: eightTopSellers,
  },
];

// topSellers2
export const topSellers2 = [
  {
    id: 43,
    title: "Sky Blue Hoodie",
    price: 59,
    rating: 4.8,
    image: oneTopSellers2,
  },
  {
    id: 44,
    title: "White Leather Sneakers",
    price: 89,
    rating: 4.9,
    image: twoTopSellers2,
  },
  {
    id: 45,
    title: "Premium Smartphone",
    price: 999,
    rating: 4.9,
    image: threeTopSellers2,
  },
  {
    id: 46,
    title: "Wireless Headphones",
    price: 149,
    rating: 4.8,
    image: fourTopSellers2,
  },
  {
    id: 47,
    title: "Pink Leather Handbag",
    price: 79,
    rating: 4.7,
    image: fiveTopSellers2,
  },
  {
    id: 48,
    title: "Modern Fabric Sofa",
    price: 649,
    rating: 4.8,
    image: sixTopSellers2,
  },
  {
    id: 49,
    title: "Rose Gold Wrist Watch",
    price: 179,
    rating: 4.7,
    image: sevenTopSellers2,
  },
  {
    id: 50,
    title: "Mint Cooking Pot",
    price: 69,
    rating: 4.8,
    image: eightTopSellers2,
  },
  {
    id: 51,
    title: "Olive Casual Shirt",
    price: 49,
    rating: 4.7,
    image: nineTopSellers2,
  },
  {
    id: 52,
    title: "Running Shoes",
    price: 94,
    rating: 4.8,
    image: tenTopSellers2,
  },
  {
    id: 53,
    title: "Tablet Pro",
    price: 699,
    rating: 4.9,
    image: elevenTopSellers2,
  },
  {
    id: 54,
    title: "Gold Watch",
    price: 169,
    rating: 4.6,
    image: twelveTopSellers2,
  },
  {
    id: 55,
    title: "Peach Tote Bag",
    price: 74,
    rating: 4.7,
    image: thirteenTopSellers2,
  },
  {
    id: 56,
    title: "Lounge Chair",
    price: 389,
    rating: 4.8,
    image: fourteenTopSellers2,
  },
  {
    id: 57,
    title: "Lavender Dutch Oven",
    price: 99,
    rating: 4.9,
    image: fifteenTopSellers2,
  },
];