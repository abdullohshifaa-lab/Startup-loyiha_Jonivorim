import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin ? "Jonivorim xizmatlaridan foydalanish uchun kiring" : "Yangi hisob yaratish va vaqtni tejash"}
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Muvaffaqiyatli bajarildi!"); onClose(); }} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ismingiz</label>
              <input 
                type="text" 
                required 
                placeholder="Masalan: Aziz" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon raqam</label>
            <input 
              type="tel" 
              required 
              placeholder="+998 90 123 45 67" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parol</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition cursor-pointer"
          >
            {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-sm text-emerald-600 hover:underline font-medium"
          >
            {isLogin ? "Hisobingiz yo'qmi? Ro'yxatdan o'ting" : "Akkountingiz bormi? Tizimga kiring"}
          </button>
        </div>
      </div>
    </div>
  );
}