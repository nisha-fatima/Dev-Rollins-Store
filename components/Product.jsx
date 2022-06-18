/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Product.module.scss';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className={styles.overall}>
      <Link href={`/product/${slug.current}`} passHref>
        <div className={styles.productCard}>
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className={styles.productImage}
          />
          <p className={styles.productName}>{name}</p>
          <p className={styles.productPrice}>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product