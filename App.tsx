import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onCartOpen={() => setIsCartOpen(true)} />
        <main>
          <Hero />
          <CategoryGrid />
          <ProductGrid />
          <Newsletter />
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;