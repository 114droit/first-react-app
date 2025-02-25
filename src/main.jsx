import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGallery from './components/ProductGallery';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ProductGallery />
    <Footer />
  </StrictMode>,
);
