export default function Doctors({ onOpenBooking }) {
  const doctorsList = [
    {
      name: "Dr. Alisher Karimov",
      specialty: "Jarroh-veterinar",
      experience: "10 yil tajriba",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Dr. Malika Umarova",
      specialty: "Terapevt / Dermatolog",
      experience: "7 yil tajriba",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Dr. Jasur Rahimov",
      specialty: "Kardiolog mutaxassis",
      experience: "12 yil tajriba",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Bizning mutaxassislar
        </h3>
        <p className="text-gray-600">
          Tajribali va malakali veterinarlarimiz har doim jonivoringizga yordam berishga tayyor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctorsList.map((doc, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="h-72 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                  ⭐ {doc.rating}
                </span>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{doc.specialty}</span>
                <h4 className="text-xl font-bold text-gray-900 mt-1 mb-2">{doc.name}</h4>
                <p className="text-gray-500 text-sm flex items-center gap-1.5">
                  <span>⏱️</span> {doc.experience}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onOpenBooking(`${doc.name} qabuli`)}
                className="w-full bg-emerald-50 text-emerald-700 font-semibold py-3 px-4 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
              >
                Qabulga yozilish
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}