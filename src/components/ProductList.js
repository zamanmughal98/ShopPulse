import './styles.product/ProductList.css';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

import Loader from './Loader';
import ErrorPage from './ErrorPage';

const ProductCard = lazy(() => import('./ProductCard'));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorPage error={error} />;

  return (
    <section className="productListingContainer">
      <Suspense fallback={<Loader />}>
        {products?.map((item) => (
          <ProductCard
            key={item?.id}
            title={item?.title}
            price={item?.price}
            description={item?.description}
            category={item?.category}
            rating={item?.rating.rate}
            count={item?.rating.count}
            image={item?.image ? item?.image : null}
          />
        ))}
      </Suspense>
    </section>
  );
};

export default ProductList;
