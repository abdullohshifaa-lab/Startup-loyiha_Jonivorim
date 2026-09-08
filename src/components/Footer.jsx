export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 px-4 mt-20 border-t-2 border-emerald-500 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        {/* Brend haqida */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🐾</span>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-wide">
              Jonivorim<span className="text-emerald-600">.uz</span>
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
            Toshkent shahridagi uy hayvonlari egalari uchun ishonchli yordamchi. Malakali veterinarlar, onlayn konsultatsiya va eng yaxshi grooming salonlar bitta maskanda.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 shadow-sm border border-gray-200 transition-all duration-300">
              ✈️
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 shadow-sm border border-gray-200 transition-all duration-300">
              📷
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 shadow-sm border border-gray-200 transition-all duration-300">
              📞
            </a>
          </div>
        </div>

        {/* Tezkor havolalar */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-base border-l-2 border-emerald-600 pl-3">Xizmatlar</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Vrachni uyga chaqirish</a></li>
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Onlayn maslahat</a></li>
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Grooming bron qilish</a></li>
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Klinikalar xaritasi</a></li>
          </ul>
        </div>

        {/* Kompaniya */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-base border-l-2 border-emerald-600 pl-3">Platforma</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Biz haqimizda</a></li>
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Mutaxassislarimiz</a></li>
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Hamkorlik</a></li>
            <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition">Aloqa</a></li>
          </ul>
        </div>

        {/* Aloqa va manzil */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-base border-l-2 border-emerald-600 pl-3">Bog'lanish</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">📍</span>
              <span>Toshkent shahri, Chilonzor tumani, 9-mavze</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600">📞</span>
              <span className="text-gray-900 font-medium">+998 (71) 123-45-67</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600">✉️</span>
              <span>support@jonivorim.uz</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Pastki copyright qismi */}
      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
        <p>&copy; 2026 Jonivorim. Barcha huquqlar himoyalangan.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-emerald-600 transition">Maxfiylik siyosati</a>
          <a href="#" className="hover:text-emerald-600 transition">Foydalanish shartlari</a>
        </div>
      </div>
    </footer>
  );
}