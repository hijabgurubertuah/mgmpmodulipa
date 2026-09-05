import React from 'react';

/**
 * Reusable garden decorations (floating plants, sparkles, etc.)
 * to be used in various views for consistent "Kebun Kita" theme.
 */
export const GardenDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sparkles */}
      <div className="sparkle-dot" style={{ top: '12%', left: '8%', background: '#fde68a', animationDelay: '0s' }}></div>
      <div className="sparkle-dot" style={{ top: '20%', left: '85%', background: '#86efac', animationDelay: '0.7s' }}></div>
      <div className="sparkle-dot" style={{ top: '60%', left: '12%', background: '#fde68a', animationDelay: '1.4s' }}></div>
      <div className="sparkle-dot" style={{ top: '75%', left: '90%', background: '#86efac', animationDelay: '0.3s' }}></div>
      <div className="sparkle-dot" style={{ top: '40%', left: '92%', background: '#fde68a', animationDelay: '1.8s' }}></div>
      <div className="sparkle-dot" style={{ top: '85%', left: '50%', background: '#86efac', animationDelay: '1.1s' }}></div>

      {/* Floating botanicals - now with more and clearer vegetables/fruits */}
      <div className="absolute top-10 left-[5%] text-6xl float1 opacity-100 select-none">🍅</div>
      <div className="absolute top-20 right-[8%] text-5xl float2 opacity-100 select-none">🌶️</div>
      <div className="absolute bottom-40 left-[10%] text-6xl float3 opacity-100 select-none sway">🥬</div>
      <div className="absolute bottom-24 right-[12%] text-5xl float1 opacity-100 select-none" style={{ animationDelay: '1.5s' }}>🥕</div>
      <div className="absolute top-1/4 left-[15%] text-5xl float2 opacity-100 select-none">🥦</div>
      <div className="absolute top-1/2 right-[5%] text-6xl float3 opacity-100 select-none">🌽</div>
      <div className="absolute top-[15%] right-[25%] text-5xl float1 opacity-100 select-none">🍆</div>
      <div className="absolute bottom-[20%] left-[25%] text-5xl float2 opacity-100 select-none">🥔</div>
      <div className="absolute top-[60%] left-[8%] text-4xl float3 opacity-100 select-none">🧅</div>
      <div className="absolute bottom-[35%] right-[10%] text-4xl float1 opacity-100 select-none">🧄</div>
      
      {/* New floating items for a richer garden feel */}
      <div className="absolute top-[45%] left-[20%] text-5xl float2 opacity-100 select-none" style={{ animationDelay: '2s' }}>🥒</div>
      <div className="absolute top-[75%] right-[20%] text-5xl float1 opacity-100 select-none" style={{ animationDelay: '1.2s' }}>🥑</div>
      <div className="absolute top-[5%] left-[40%] text-4xl float2 opacity-100 select-none">🍓</div>
      <div className="absolute bottom-[5%] right-[45%] text-5xl float3 opacity-100 select-none">🍉</div>
      <div className="absolute top-[35%] right-[40%] text-4xl float1 opacity-100 select-none">🍍</div>
      <div className="absolute bottom-[50%] left-[45%] text-5xl float2 opacity-100 select-none">🍇</div>
      <div className="absolute top-[85%] left-[40%] text-4xl float3 opacity-100 select-none">🍋</div>
      <div className="absolute top-[25%] left-[50%] text-5xl float1 opacity-100 select-none">🍎</div>
      <div className="absolute bottom-[70%] right-[35%] text-4xl float2 opacity-100 select-none">🍐</div>

      {/* Bottom garden scene - now with vegetables */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 opacity-40 md:opacity-60">
        <span className="text-3xl grow-up" style={{ animationDelay: '0.2s' }}>🥬</span> 
        <span className="text-4xl grow-up" style={{ animationDelay: '0.4s' }}>🍅</span> 
        <span className="text-2xl grow-up" style={{ animationDelay: '0.6s' }}>🌿</span> 
        <span className="text-4xl grow-up" style={{ animationDelay: '0.3s' }}>🌶️</span> 
        <span className="text-3xl grow-up" style={{ animationDelay: '0.7s' }}>🥕</span> 
        <span className="text-2xl grow-up" style={{ animationDelay: '0.5s' }}>🥦</span> 
        <span className="text-3xl grow-up" style={{ animationDelay: '0.8s' }}>🌽</span>
      </div>
    </div>
  );
};
