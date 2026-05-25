import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const StorePage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [cart, setCart] = useState(() => {
    // Cargar carrito inicial desde localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const categories = ['Todos', 'Cascos', 'Neumáticos', 'Repuestos', 'Accesorios'];

  const products = [
    {
      id: 1,
      name: 'Casco Carbon Apex X1',
      price: 'S/ 499.00',
      category: 'Cascos',
      tag: 'Nuevo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrfUU1DX6Km-j0sRRKvrb7-UJuoWiXgUDzXwiQ4vKud5FBXigMPUuDcsI7vzQVie7ew6cNEyvhsnpcL90VFGUP5gVZU36f168SLDfXeHdiQw8q99ewyk1SoXTqoZn_MvPsisqZLwM0PoXohyM5MQTYqB-_DL872XcxEllu6EnjjXId243UnBWz2Qq1Fj7t6dYCNvZ00815yzJ8FBOQEzN5iCj_GESVfJAANihmkB18kTvOgRBUYkbxzdwANwEmycfzKxpG9jIWiQ',
    },
    {
      id: 2,
      name: 'Neumático Pirelli Rosso IV',
      price: 'S/ 215.50',
      category: 'Neumáticos',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzXVZHKf_vaw-Y5sy0aFyPvzVRZrwdaTNvbvHzyMzI-bjidXoK9dVgwiRn4yrRzuiRS-CT6hMn-KhsHBrxKIs3LPe-ec0tcHgnrPl3E-XGerjRvC_h2hbxpacDlFgvPQWzmfL-BQ4l86Y7XPKXV6wv5Vp2KEM_qrP8DWvumJigFCYOrXQ-1IUm9heMw0fe37X3CANLlSw7u-6mYlN17luqQJwn7bS529cLy0_j3ZiIBS5f4HZv9iqirU6t3LqB7on25XaO9lZ_Xw',
    },
    {
      id: 3,
      name: 'Disco de Freno Brembo Serie Oro',
      price: 'S/ 185.00',
      category: 'Repuestos',
      tag: 'Top',
      tagColor: 'bg-on-surface-variant text-surface',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuG6EjlFQj0ed3Mbknw1kReEZTJ6leP4ncoNx2i20GcDy1hWzfkUpaaXq9L78P51-YXfRzGq7Q3Sgfj_DBYcx9uXW1IsAwQl2jqGtxcmxmnSjzE5L2m590oHFuXuJ8yopFmcwx7r_zwoyM5B7gq2FjY9pbjugXr7op_IeX_wMCX_YFBILCR4Tao2QLJtyVRMCUyw-gJGuCa7fdqShBA-6Kxczw8xs-bP-sabmbCdQ9sfQGKDDC2D_b_LaJ9Elv3iRxoYgYAYpXkQ',
    },
    {
      id: 4,
      name: 'Guantes Alpinestars GP Pro',
      price: 'S/ 120.00',
      category: 'Accesorios',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3PtjNd8BVkv0s9oIzmZ8RrYdjEUo8WXnY6lNqhG-94J1Ou1ZG-RYwXnWHK67w34jnjvECVJ-aog2QF31L03abWwkBbw4Ql_b17Q0tvk7oZxA_qtTNPqVfgI-L8BHehKgT-7DwneKhC4mGOkLpHHC9VYH09SjSLU-0nQczwFf3_6FTIqtiRfWyZFGpMzKOZ6reF7-oWzp_ZXrdgL8mOOV66mGUUNauxnoQN3xxQjzVjhunTaIZDAsXkleFeT5GVAIjI8PwLSnjWA',
    },
    {
      id: 5,
      name: 'Kit de Bujías Iridium NGK',
      price: 'S/ 45.00',
      category: 'Repuestos',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwDDWLFBZ75K8C5pd0O1tzp_SZBANLpQTAXUIMUkK9GT29AJH6XCf2dKSU1-fRn_BeSC7vvfm3uFSmKJZtRE6O-gRhTt7GkWRfY4pRSGb3N4QmASN4GjaJ-hUMACg5UC0-vYixGLiMCG4VFu5r3YbS1B2080fF5Ql7b1ITXti-5cCaNmzARLqqYImdNaWbW0U2w47HpANg1TvGhCtHtSrYDY6wDbiaduJYk2eQzOEXLjBnJ4u8Yc6KGzq0-69b9AXfRoRKyhIzAg',
    },
    {
      id: 6,
      name: 'Soporte de Caballete Trasero Pro',
      price: 'S/ 89.99',
      category: 'Accesorios',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXUaCa-p9sJVuDlW9V3qCZeF7vrxR5lZSpQmuhQBRysqFMN93maR7nqPzuxiki5a2zN9CSxdRWNmj99RlmKU9iqgVJ-kI89b0AqOj4BkYwLeznHdFiJTvaOz3mo7mAfDor77pjpV-cbVpUvf3MVbIo1reMQXNc-c1cYiZRjx2YmkIyZVrU5mVhIZpZSOrRYKRUNfZMA47JYh17E0pKUeFP-SzNwcoV4iFldArtitCdfEAT49H9ALL29lQ4t7PSDKzM3pM88nMfuQ',
    },
  ];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`¡${product.name} añadido al carrito!`);
  };

  return (
    <div className="font-body-md text-on-surface bg-background min-h-screen flex flex-col">
      {/* TopAppBar Shell */}
      <Header>
        <div className="relative">
          <button 
            onClick={() => {
              if (cart.length > 0) {
                if (window.confirm('¿Deseas vaciar el carrito?')) {
                  setCart([]);
                  localStorage.removeItem('cart');
                }
              }
            }}
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high transition-colors p-base rounded-full cursor-pointer focus:outline-none"
          >
            shopping_cart
          </button>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-primary-container text-on-primary-container text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
              {cart.length}
            </span>
          )}
        </div>
      </Header>

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-24 px-margin-mobile">
        {/* Search & Filter Section */}
        <section className="mt-base mb-lg">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
            <input 
              className="w-full bg-surface-container-low border border-outline-variant text-body-md rounded-lg py-sm pl-11 pr-base focus:border-primary-container focus:ring-0 placeholder:text-on-tertiary-fixed-variant font-label-technical focus:outline-none" 
              placeholder="Buscar cascos, piezas o accesorios..." 
              type="text" 
            />
          </div>
          {/* Category Chips */}
          <div className="flex gap-sm mt-md overflow-x-auto pb-xs scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-label-sm text-label-sm px-md py-xs rounded-full transition-all ${activeCategory === cat ? 'bg-primary-container text-on-primary-container shadow-lg' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant border border-outline-variant'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden flex flex-col group transition-all hover:border-primary-container/50">
              <div className="relative aspect-square overflow-hidden bg-surface-container-highest">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={product.image} 
                  alt={product.name}
                />
                {product.tag && (
                  <div className="absolute top-xs left-xs">
                    <span className={`${product.tagColor || 'bg-primary-container text-white'} text-[10px] font-bold px-xs py-[2px] rounded uppercase`}>
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-sm flex flex-col flex-grow">
                <h3 className="font-label-sm text-label-sm text-on-surface line-clamp-2 min-h-[32px]">{product.name}</h3>
                <div className="mt-auto pt-xs flex items-center justify-between">
                  <span className="font-label-technical text-primary-container font-bold">{product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-surface-container-highest p-xs rounded-lg text-primary hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-90"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-xl flex justify-center">
          <button className="border border-outline text-on-surface font-label-sm text-label-sm px-xl py-sm rounded-lg hover:bg-surface-container-high transition-all active:scale-95">
            Cargar más productos
          </button>
        </div>
      </main>

      {/* BottomNavBar */}
      <BottomNav />
    </div>
  );
};

export default StorePage;
