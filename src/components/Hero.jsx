export default function Hero({ onOpenBooking }) {
  
  const scrollToAI = () => {
    const el = document.getElementById('ai-consultant');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/30 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Chap tomon: Sarlavha va ishlaydigan tugmalar */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              <span>📍</span> Toshkent bo'ylab 24/7 Tezkor Yordam
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Uy hayvoningiz uchun professional <span className="text-emerald-600">parvarish va veterinariya</span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
              Malakali veterinarni uyga chaqiring, sun'iy intellekt orqali onlayn maslahat oling yoki eng yaxshi klinikalar va grooming salonlarini bron qiling.
            </p>
            
            {/* Ishlaydigan Tugmalar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onOpenBooking("Uyga vrach chaqirish")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2.5 text-base"
              >
                <span>🩺</span> Vrach chaqirish
              </button>
              
              <button 
                onClick={scrollToAI}
                className="bg-white hover:bg-emerald-50 text-emerald-700 border-2 border-emerald-600 font-extrabold px-8 py-4 rounded-2xl shadow-sm transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2.5 text-base"
              >
                <span>🤖</span> AI Qidiruvni ko'rish
              </button>
            </div>

            {/* Statistikaviy kichik ma'lumotlar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-100/80">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900">15+</p>
                <p className="text-xs text-gray-500 font-semibold">Malakali Vrachlar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900">24/7</p>
                <p className="text-xs text-gray-500 font-semibold">AI Yordam Markazi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900">100%</p>
                <p className="text-xs text-gray-500 font-semibold">Kafolatlangan Natija</p>
              </div>
            </div>

          </div>

          {/* O'ng tomon: Bo'sh yashil quti o'rniga juda chiroyli va foydali Jonivorim kartochkasi */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-3xl p-8 shadow-2xl shadow-emerald-600/30 text-white overflow-hidden">
              
              {/* Orqa fondagi bezak doiralar */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-lg"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    ✨ Jonivorim Startap
                  </span>
                  <span className="text-2xl">🐾</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">Sizning ishonchli veterinariya hamkoringiz</h3>
                  <p className="text-emerald-100 text-xs mt-2 leading-relaxed">
                    Hayvoningiz kasallandimi yoki parvarish kerakmi? Endi uzoq qidirib vaqt yo'qotmaysiz.
                  </p>
                </div>

                {/* Mini interaktiv karta */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center font-bold text-lg shadow">
                      🐶
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Tezkor Tahlil & Bron</h4>
                      <p className="text-[11px] text-emerald-100">1 daqiqada kerakli mutaxassisni toping</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenBooking("Tezkor maslahat")}
                  className="w-full bg-white text-emerald-800 font-extrabold py-3.5 rounded-xl shadow-lg hover:bg-emerald-50 transition text-sm cursor-pointer"
                >
                  Hoziroq bog'lanish 🚀
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}