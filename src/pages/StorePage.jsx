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
    <div className="font-body-md text-on-surface bg-background min-h-screen flex flex-col selection:bg-primary selection:text-white">
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
            className="material-symbols-outlined text-primary hover:bg-surface-lvl1 transition-colors p-base rounded-full cursor-pointer focus:outline-none"
          >
            shopping_cart
          </button>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full pointer-events-none shadow-glow-sm">
              {cart.length}
            </span>
          )}
        </div>
      </Header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-24 px-margin-mobile max-w-6xl mx-auto w-full">
        {/* Search & Filter Section */}
        <section className="mt-base mb-lg">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-primary transition-colors">search</span>
            <input 
              className="w-full bg-surface-lvl1 border border-divider text-on-surface-variant rounded-sm py-4 pl-12 pr-base focus:border-primary placeholder:text-on-surface-variant/30 font-label-technical focus:outline-none transition-all shadow-sm uppercase tracking-wider text-sm" 
              placeholder="SEARCH STREET PARTS..." 
              type="text" 
            />
          </div>
          {/* Category Chips (Tabs style) */}
          <div className="flex gap-1 mt-md overflow-x-auto pb-xs scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-label-technical text-[12px] px-8 py-3 transition-all uppercase tracking-widest font-black ${activeCategory === cat ? 'bg-primary text-white' : 'bg-surface-lvl1 text-on-surface-variant hover:bg-surface-lvl2 border-b-2 border-transparent'}`}
              >
                {cat === 'Todos' ? 'ALL' : cat === 'Cascos' ? 'HELMETS' : cat === 'Neumáticos' ? 'TIRES' : cat === 'Repuestos' ? 'PARTS' : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-surface-lvl1 border border-divider rounded-sm overflow-hidden flex flex-col group transition-all hover:border-primary/50 shadow-industrial-lift">
              <div className="relative aspect-square overflow-hidden bg-surface-lvl2">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={product.image} 
                  alt={product.name}
                />
                {product.tag && (
                  <div className="absolute top-4 left-0">
                    <span className={`${product.tag === 'STREET SPEC' || product.tag === 'OFERTA' ? 'bg-primary' : 'bg-secondary'} text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest italic shadow-md inline-block transform -skew-x-12 ml-[-4px]`}>
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-md flex flex-col flex-grow bg-surface-lvl1">
                <h3 className="font-display-lg text-[12px] text-on-surface line-clamp-2 min-h-[34px] uppercase font-black tracking-tight leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-label-technical text-primary font-black text-xl tracking-tighter">{product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-primary p-2 text-white hover:bg-primary/90 transition-all active:scale-90 shadow-glow-sm"
                  >
                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-xl flex justify-center">
          <button className="bg-surface-lvl1 border border-divider text-on-surface font-label-technical text-[10px] px-xl py-md rounded-sm hover:bg-surface-lvl2 transition-all active:scale-95 uppercase tracking-widest font-black shadow-sm">
            LOAD MORE PARTS
          </button>
        </div>
      </main>

      {/* BottomNavBar */}
      <BottomNav />
    </div>
  );
};

export default StorePage;
