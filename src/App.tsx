import React from 'react';
import { Sidebar } from './components/Sidebar';
import { FloatingAction } from './components/FloatingAction';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

function App() {
  return (
    <div className="min-h-screen flex bg-cream font-sans-tc">
      <Sidebar />
      
      <main className="flex-grow flex flex-col w-full relative">
        {/* Mobile Header (visible only on small screens) */}
        <header className="lg:hidden sticky top-0 bg-cream/90 backdrop-blur-md z-40 border-b border-gold/20 p-4 flex justify-between items-center">
          <div className="font-bold tracking-widest text-navy">內湖黃阿偉</div>
          <button className="text-navy">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </header>

        <div className="flex-grow pb-24 lg:pb-0">
          <Hero />
          <Services />
        </div>
      </main>

      <FloatingAction />
    </div>
  );
}

export default App;
