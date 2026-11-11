# FLORY E-commerce Website
https://elmahdi25.github.io/flory-e-commerce-website/
FLORY is a front-end practice project for a hijab and modest fashion store, built with HTML, CSS, and vanilla JavaScript.

## Current Features

- Responsive storefront with FLORY branding, a custom favicon, and a blush and cream color palette.
- A catalog of 32 products, including hijabs, abayas, undercaps, and accessories.
- Product cards generated from JavaScript data with images, star ratings, review counts, and euro prices formatted from cents.
- An **Add to Bag** button that adds one unit per click. Repeated clicks on the same product increase its quantity in the existing bag entry.
- A shopping bag badge that displays the total number of units across all products in the bag.

## Work in Progress

- Each product card has a quantity selector from 1 to 10. The button currently adds one unit per click.
- The shopping bag is stored in memory and resets on refresh.
- The header includes a search form and links to the shopping bag and Orders & Returns. Product search, separate pages, and checkout are outside the current storefront implementation shown here.

## Project Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Storefront header, product grid, and footer |
| `style/index/header.css` | Shared colors and responsive header styles |
| `style/index/main.css` | Product grid and card styles |
| `style/index/footer.css` | Responsive footer styles |
| `script/product.js` | Product catalog data |
| `script/bag_cart.js` | In-memory shopping bag array |
| `script/index.js` | Product rendering, add-to-bag logic, and badge updates |
| `images/` | Logos, favicon, product photos, and rating graphics |

## Run Locally

Open `index.html` in your browser with the project folders in place. Click **Add to Bag** twice on the same product to see the badge increase from 0 to 2.

## Author

Developed by [Elmahdi25](https://github.com/Elmahdi25).

## License

The FLORY source code is licensed under the MIT License. See [LICENSE](LICENSE) for the full text.
