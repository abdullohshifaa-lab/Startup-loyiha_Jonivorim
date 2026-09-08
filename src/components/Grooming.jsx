export default function Grooming({ onOpenBooking }) {
  const groomingList = [
    {
      name: "Paw Spa Tashkent",
      address: "Mirzo Ulug'bek tumani, Mustaqillik shoh ko'chasi",
      services: "Yuvish, taroqlash, tirnoq olish",
      price: "120 000 so'mdan",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Royal Cat Luxury",
      address: "Yunusobod tumani, 14-mavze",
      services: "Zotdor mushuklar uchun VIP SPA va parvarish",
      price: "180 000 so'mdan",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Feather & Care Vet",
      address: "Chilonzor tumani, Muqimiy ko'chasi",
      services: "Qushlar parvarishi, tirnoq va qanot parvarishi",
      price: "90 000 so'mdan",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Grooming Salonlar
        </h3>
        <p className="text-gray-600">
          Itlar, zotdor mushuklar va qushlar uchun professional parvarish va go'zallik xizmatlari
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {groomingList.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="h-64 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                  ⭐ {item.rating}
                </span>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{item.price}</span>
                <h4 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.name}</h4>
                <p className="text-gray-500 text-sm mb-2 flex items-center gap-1.5">
                  <span>📍</span> {item.address}
                </p>
                <p className="text-gray-600 text-sm bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50">
                  ✨ {item.services}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onOpenBooking(item.name)}
                className="w-full bg-emerald-50 text-emerald-700 font-semibold py-3 px-4 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
              >
                Band qilish
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}