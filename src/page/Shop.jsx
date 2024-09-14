import React, { useState, useEffect } from 'react';
import ShopBanner from '../Components/Shop/ShopBanner';
import Filter from '../Components/Shop/Filter';
import ProductList from '../Components/Shop/ProductList';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState('All Price');

    // Fetch products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            try {
                const response = await fetch(`${API_URL}/product`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchProducts();
    }, []);

    // Extract unique categories and price ranges
    const categories = [...new Set(products.map(product => product.category))];
    const prices = products.map(product => parseFloat(product.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const priceRanges = [
        'All Price',
        `$${minPrice.toFixed(2)} - $${(minPrice + 99.99).toFixed(2)}`,
        `$${(minPrice + 100).toFixed(2)} - $${(minPrice + 199.99).toFixed(2)}`,
        `$${(minPrice + 200).toFixed(2)} - $${(minPrice + 299.99).toFixed(2)}`,
        `$${(minPrice + 300).toFixed(2)} - $${maxPrice.toFixed(2)}`,
        `$${maxPrice.toFixed(2)}+`,
    ];

    const filterProducts = (products) => {
        return products.filter((product) => {
            if (selectedCategory && product.category !== selectedCategory) {
                return false;
            }
            if (selectedPrice !== 'All Price') {
                const [minPrice, maxPrice] = selectedPrice.split(' - ').map((p) => parseFloat(p.replace('$', '')));
                const productPrice = parseFloat(product.price);
                if (maxPrice) {
                    return productPrice >= minPrice && productPrice <= maxPrice;
                } else {
                    return productPrice >= minPrice;
                }
            }
            return true;
        });
    };

    const filteredProducts = filterProducts(products);

    return (
        <>
            <ShopBanner />
            
                <div className='flex justify-between items-start gap-6 w-full container mx-auto mt-14'>
                    <Filter
                        categories={categories}
                        priceRanges={priceRanges}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice}
                    />
                    <ProductList
                        products={filteredProducts}
                        categories={categories}
                        priceRanges={priceRanges}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice}
                        loading={loading}

                    />
                </div>
            
        </>
    );
};

export default Shop;
