import bcrypt from "bcryptjs";

const data = {

    users: [
        {
            name: "Basir",
            email: "admin@example.com",
            password: bcrypt.hashSync("123456"),
            isAdmin: true,
        },
        {
            name: "John",
            email: "user@example.com",
            password: bcrypt.hashSync("123456"),
            isAdmin: false,
        },
    ],

    products: [
        {
            // _id: "1",
            name: "Nike Slim Shirt",
            slug: "nike-slim-shirt",
            category: "Shirts",
            image: "images/p1.jpg",
            price: 120,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Command attention in the Velvet Noir Tuxedo Ensemble, an epitome of refined sophistication. The midnight-black velvet jacket is impeccably tailored, boasting satin peak lapels that catch the light like city lights reflected on a rain-soaked street. The ensemble is completed with matching tapered trousers, creating a silhouette that effortlessly merges classic charm with contemporary allure. It's not just an outfit; it's a symphony of elegance.",
        },
        {
            // _id: "2",
            name: "Adidas Fit Shirt",
            slug: "adidas-fit-shirt",
            category: "Shirts",
            image: "images/p2.jpg",
            price: 250,
            countInStock: 10,
            brand: "Adidas",
            rating: 4.0,
            numReviews: 10,
            description: "Enchant the night in the Astral Lace Midnight Gown, a celestial masterpiece that seamlessly blends sensuality and mystique. Layers of midnight-blue lace cascade like liquid moonlight, revealing just enough to evoke curiosity. The gown's illusion neckline is adorned with delicate, hand-sewn silver stars, creating a celestial constellation that mirrors the evening sky. With a daring thigh-high slit, this gown is an invitation to dance under the stars.",
        },
        {
            // _id: "3",
            name: "Nike Slim Pant",
            slug: "nike-slim-pant",
            category: "Pants",
            image: "images/p3.jpg",
            price: 250,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 40,
            description: "Rise from the ashes of fashion norms with the Phoenix Feather-Trimmed Kimono. The velvety fabric, a canvas of onyx, sets the stage for vibrant, iridescent phoenix feathers meticulously adorning the sleeves. Each feather seems to possess a life of its own, shimmering with a kaleidoscope of colors as you move. This kimono is not just a garment; it's a manifestation of rebirth and the eternal flame of style.",
        },
        {
            // _id: "4",
            name: "Adidas Loose Shirt",
            slug: "adidas-loose-shirt",
            category: "Shirt",
            image: "images/p4.jpg",
            price: 165,
            countInStock: 10,
            brand: "Adidas",
            rating: 4.5,
            numReviews: 10,
            description: "Turn heads with the Midas Touch Sequin Blazer, a beacon of glamour and sophistication. Thousands of golden sequins meticulously hand-stitched onto the blazer catch and refract light, transforming you into a walking embodiment of luxury. The tailored fit accentuates your silhouette, while the notched lapels add a dash of classic charm. Prepare to be the center of attention as you radiate opulence with every movement.",
        },
        {
            // _id: "5",
            name: "Wild Silk Cloth",
            slug: "wild-silk-cloth",
            category: "Shirt",
            image: "images/p5.jpg",
            price: 300,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 40,
            description: "The Cerulean Cascade Ballgown is a masterpiece of opulence and grace. Cascading layers of silk chiffon in varying shades of cerulean create a mesmerizing waterfall effect, giving life to the illusion of liquid movement. The bodice is a canvas for hand-appliquéd silver filigree, capturing the essence of moonlit ripples on a tranquil lake. With each stride, you'll command attention, a vision of regality against a canvas of swirling elegance.",
        },
        {
            // _id: "6",
            name: "Cozy Silk's Sweater",
            slug: "cozy-silks-sweater",
            category: "Sweater",
            image: "images/p8.jpg",
            price: 250,
            countInStock: 10,
            brand: "Nike",
            rating: 5,
            numReviews: 20,
            description: "Wrap yourself in the mystique of the Chronicle of Shadows Velvet Jacket. The fabric, as dark as the secrets it keeps, exudes a sumptuous decadence. Intricately embroidered moon phases adorn the lapels, while the midnight-black velvet absorbs and reflects light with a bewitching allure. The jacket's tailored fit ensures a commanding presence, making a statement with every step, a garment that tells tales only the night can share.",
        },
        {
            // _id: "7",
            name: "Extreme Cotton Webber",
            slug: "extreme-cotton-webber",
            category: "Jacket",
            image: "images/p10.jpg",
            price: 170,
            countInStock: 10,
            brand: "Nike",
            rating: 3,
            numReviews: 40,
            description: "The Whispering Meadows Linen Sundress embodies the essence of a sunlit meadow. Fashioned from breathably light linen, its pastel hues mimic the gentle dance of wildflowers in the breeze. Delicate lace trims the hem, reminiscent of morning dew clinging to the petals. The dress features an adjustable drawstring, allowing you to cinch it at the waist for a silhouette that whispers of both sophistication and nature\"s embrace.",
        },
        {
            // _id: "8",
            name: "Long Sleeveless Dickeys Shirt",
            slug: "long-sleeveless-dickeys-shirt",
            category: "Long Sleeve",
            image: "images/p11.jpg",
            price: 170,
            countInStock: 10,
            brand: "Nike",
            rating: 3,
            numReviews: 40,
            description: "Immerse yourself in the divine allure of the Ethereal Elegance Silk Gown. Crafted from the finest, pearlescent silk, this resplendent gown drapes like liquid moonlight, embracing your silhouette with a celestial grace. The bodice is adorned with hand-embroidered constellations, each stitch a testament to meticulous artistry. As you twirl, the gown's sweeping train trails behind, leaving a trail of stardust in your wake.",
        },


    ],
};

export default data;