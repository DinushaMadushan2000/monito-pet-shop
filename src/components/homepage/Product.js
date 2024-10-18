import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './Custom Cards/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className='md:mx-44 my-16 mx-5 hidden md:flex'>
        <div>
        <div className='flex justify-between'>
          <div>
            <h3>Hard to choose the right products for your pets?</h3>
            <h1 className='text-2xl font-semibold text-secondary'>Our Products</h1>
          </div>
          <div>
            <button className='hidden md:flex border border-secondary px-8 py-2 rounded-full flex items-center space-x-2'>
              <span>View more </span>
              <span> &gt; </span>
            </button>
          </div>
        </div>

        {/* Product cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              product={product.product}
              size={product.size}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
        </div>
        

        
      </div>
    </>
  );
};

export default Products;