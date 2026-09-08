import { useState } from 'react';

export default function Navbar({ onOpenAIChat }) {
  const [activeTab, setActiveTab] = useState('asosiy');

  const scrollToSection = (id, tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo qismi */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveTab('asosiy'); }}
        >
          <div className="w-11 h-11 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-md shadow-emerald-600/20 text-white text-xl font-black">
            🐾
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-gray-900">
              Jonivorim<span className="text-emerald-600">.uz</span>
            </h1>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Veterinariya & AI</p>
          </div>
        </div>

        {/* Markaziy Navigatsiya Tugmalari */}
        <nav className="hidden lg:flex items-center bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200/60 shadow-inner">
          <button 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveTab('asosiy'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'asosiy' 
                ? 'bg-white text-emerald-700 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            🏠 Asosiy
          </button>
          
          <button 
            onClick={() => scrollToSection('ai-consultant', 'ai')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'ai' 
                ? 'bg-white text-emerald-700 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <span>🤖</span> AI Vrach
          </button>

          <button 
            onClick={() => scrollToSection('nearby-clinics', 'nearby')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'nearby' 
                ? 'bg-white text-emerald-700 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <span>📍</span> Eng yaqin joylar
          </button>

          <button 
            onClick={() => scrollToSection('doctors', 'doctors')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'doctors' 
                ? 'bg-white text-emerald-700 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <span>🩺</span> Vrachlar
          </button>

          <button 
            onClick={() => scrollToSection('grooming', 'grooming')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'grooming' 
                ? 'bg-white text-emerald-700 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <span>✂️</span> Grooming
          </button>
        </nav>

        {/* O'ng tarafdagi harakatlantiruvchi tugmalar */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollToSection('ai-consultant', 'ai')}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-emerald-600 text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition shadow-sm cursor-pointer active:scale-95"
          >
            <span>💬</span> AI Maslahat
          </button>

          <button 
            onClick={() => alert("Kirish oynasi tez orada qo'shiladi!")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-600/30 transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
          >
            <span>👤</span> Kirish
          </button>
        </div>

      </div>
    </header>
  );
}