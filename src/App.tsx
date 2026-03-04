import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProductCategories from './components/ProductCategories';
import OrderForm from './components/OrderForm';
import Clients from './components/Clients';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProductCategories />
        <OrderForm />
        <Clients />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
