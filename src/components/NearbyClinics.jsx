import { useState } from 'react';

export default function NearbyClinics({ onOpenBooking }) {
  const [selectedDistrict, setSelectedDistrict] = useState('barchasi');

  // Toshkentdagi klinikalar bazasi
  const clinics = [
    {
      id: 1,
      name: "'VetHelp' Oliy Kategoriya Klinikasi",
      district: 'yunusobod',
      districtName: 'Yunusobod tumani',
      address: 'Toshkent sh., Yunusobod tumani, 14-mavze, 12-uy',
      phone: '+998 90 123-45-67',
      distance: '1.2 km uzoqlikda',
      openTime: '24/7 ishlaydi',
      rating: '4.9',
      image: '🏥'
    },
    {
      id: 2,
      name: "'Animal Care' Tibbiyot Markazi",
      district: 'chilonzor',
      districtName: 'Chilonzor tumani',
      address: 'Toshkent sh., Chilonzor tumani, Muqimiy ko\'chasi, 45',
      phone: '+998 99 888-77-66',
      distance: '2.5 km uzoqlikda',
      openTime: '08:00 - 22:00',
      rating: '4.8',
      image: '🐾'
    },
    {
      id: 3,
      name: "'MegaVet' Jarrohlik Markazi",
      district: 'mirzo-ulugbek',
      districtName: 'Mirzo Ulug\'bek tumani',
      address: 'Toshkent sh., Mustaqillik shoh ko\'chasi, 88',
      phone: '+998 93 555-44-33',
      distance: '3.1 km uzoqlikda',
      openTime: '24/7 ishlaydi',
      rating: '5.0',
      image: '🩺'
    },
    {
      id: 4,
      name: "'VetDerm' Mutaxassislik Kliniği",
      district: 'shayxontohur',
      districtName: 'Shayxontohur tumani',
      address: 'Toshkent sh., Labzak ko\'chasi, 20-uy',
      phone: '+998 91 333-22-11',
      distance: '1.8 km uzoqlikda',
      openTime: '09:00 - 20:00',
      rating: '4.7',
      image: '💊'
    },
    {
      id: 5,
      name: "'PetLux' VIP Vet Servis",
      district: 'yakkaasar',
      districtName: 'Yakkasaroy tumani',
      address: 'Toshkent sh., Shota Rustaveli ko\'chasi, 15',
      phone: '+998 94 444-55-66',
      distance: '4.0 km uzoqlikda',
      openTime: '24/7 ishlaydi',
      rating: '4.9',
      image: '🌟'
    }
  ];

  const filteredClinics = selectedDistrict === 'barchasi' 
    ? clinics 
    : clinics.filter(c => c.district === selectedDistrict);

  return (
    <section className="py-16 bg-gray-50/70" id="nearby-clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sarlavha qismi */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            📍 Geolokatsiya & Xarita
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
            Eng yaqindagi veterinariya joyi va klinikalar
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base font-medium">
            Tumaningizni tanlang va o'zingizga eng yaqin bo'lgan ishonchli veterinariya markazini topib, darhol bog'laning.
          </p>
        </div>

        {/* Tumanlar bo'yicha filter tugmalari */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'barchasi', label: 'Barcha tumanlar' },
            { id: 'yunusobod', label: 'Yunusobod' },
            { id: 'chilonzor', label: 'Chilonzor' },
            { id: 'mirzo-ulugbek', label: 'Mirzo Ulug\'bek' },
            { id: 'shayxontohur', label: 'Shayxontohur' },
            { id: 'yakkaasar', label: 'Yakkasaroy' }
          ].map((district) => (
            <button
              key={district.id}
              onClick={() => setSelectedDistrict(district.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all cursor-pointer ${
                selectedDistrict === district.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {district.label}
            </button>
          ))}
        </div>

        {/* Klinikalar kartochkalari gridi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic) => (
            <div 
              key={clinic.id} 
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl shadow-inner">
                    {clinic.image}
                  </span>
                  <div className="flex items-center gap-1 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                    <span>⭐</span> {clinic.rating}
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">{clinic.districtName}</span>
                  <h3 className="text-xl font-extrabold text-gray-900 mt-0.5">{clinic.name}</h3>
                </div>

                <div className="mt-4 space-y-2 text-xs md:text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-base">📍</span> 
                    <span>{clinic.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-base">⏰</span> 
                    <span className="font-semibold text-gray-800">{clinic.openTime}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-base">📏</span> 
                    <span className="font-semibold text-emerald-700">{clinic.distance}</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <a 
                  href={`tel:${clinic.phone}`}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-3 rounded-xl transition text-center text-xs flex items-center justify-center gap-1.5"
                >
                  <span>📞</span> Qo'ng'iroq
                </a>
                <button 
                  onClick={() => onOpenBooking(`${clinic.name} qabuli`)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl transition text-center text-xs shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Bron qilish
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}