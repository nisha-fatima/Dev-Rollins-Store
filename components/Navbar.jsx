import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import styles from './Navbar.module.scss';

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className={styles.navbar_container}>
      <p className={styles.logo}>
        <Link href="/">Nishat Gadgets</Link>
      </p>

      <button type="button" className={styles.cartIcon} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className={styles.cartItemQty}>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar