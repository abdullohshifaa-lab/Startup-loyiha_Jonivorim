export default function Services({ onOpenBooking }) {
  const servicesList = [
    {
      title: "Vrachni uyga chaqirish",
      desc: "Tajribali veterinarni uyingizga chaqiring. Jonivoringizni tinch muhitda ko'rikdan o'tkazing.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500",
      tag: "Tezkor chiqish"
    },
    {
      title: "Onlayn maslahat",
      desc: "Istalgan vaqtda video yoki chat orqali malakali veterinarlar bilan bog'laning.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=500",
      tag: "24/7 rejimda"
    },
    {
      title: "Grooming salonlar",
      desc: "Toshkentdagi eng yaxshi salonlarda yuvish, taroqlash va qirqish xizmatlarini band qiling.",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=500",
      tag: "Go'zallik"
    },
    {
      title: "Klinikalar xaritasi",
      desc: "Yaqin-atrofdagi veterinariya klinikalari, dorixonalari va ularning ish vaqtini toping.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=500",
      tag: "Manzillar"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Bizning xizmatlar
        </h3>
        <p className="text-gray-600">
          Uy hayvoningiz salomatligi uchun barcha kerakli qulayliklar bitta joyda
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesList.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                  {item.tag}
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onOpenBooking(item.title)}
                className="w-full bg-emerald-50 text-emerald-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 cursor-pointer text-sm"
              >
                Batafsil / Band qilish
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}