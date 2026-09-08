import { useState } from 'react';

export default function BookingModal({ isOpen, onClose, serviceName }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petType: 'It',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rahmat, ${formData.name}! Arizangiz qabul qilindi. Tez orada operatorimiz siz bilan bog'lanadi.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden p-6 relative animate-fadeIn">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Qabulga yozilish
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {serviceName && (
          <p className="text-sm text-emerald-600 font-medium mb-4 bg-emerald-50 p-2.5 rounded-xl">
            Tanlangan xizmat: {serviceName}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Ismingiz</label>
            <input 
              type="text" 
              required
              placeholder="Masalan: Alisher" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Telefon raqamingiz</label>
            <input 
              type="tel" 
              required
              placeholder="+998 (90) 123-45-67" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Jonivor turi</label>
              <select 
                value={formData.petType}
                onChange={(e) => setFormData({...formData, petType: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-sm bg-white"
              >
                <option value="It">It</option>
                <option value="Mushuk">Mushuk</option>
                <option value="Qush">Qush</option>
                <option value="Boshqa">Boshqa</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Sana</label>
              <input 
                type="date" 
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Muammo haqida qisqacha</label>
            <textarea 
              rows="3"
              placeholder="Jonivoringizning holati..."
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-sm resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md cursor-pointer mt-2"
          >
            Ariza yuborish
          </button>
        </form>

      </div>
    </div>
  );
}