import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Testimonies from './Testimonies';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Dev Rollins Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <Testimonies />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout