import React from 'react';
import { products } from 'entities/product/model/products';
import { ProductGallery } from 'widgets/productGallery/ProductGallery';
import styles from './ProductList.module.scss';

const ProductList: React.FC = () => (
  <section id="products" className={styles.products}>
    <span>Кровати, которые помогают заботиться</span>
    <h2>Решения для ухода</h2>
    <div className={styles.productsContainer}>
      {products.map((p) => (
        <ProductGallery key={p.id} product={p} />
      ))}
    </div>
  </section>
);

export default ProductList;
