import { useState } from 'react';

export default function AIConsultant({ onOpenBooking }) {
  const [messages, setMessages] = useState([
    { 
      sender: 'ai', 
      text: "Salom! Men 'Jonivorim' veterinariya tizimining bosh sun'iy intellekt maslahatchisiman. Uy hayvoningiz qayeridadir og'riyaptimi, qusyaptimi yoki o'zini g'alati tutayotgan bo'lsa, menga batafsil yozing. Men zudlik bilan eng yaxshi veterinarni, uning manzilini va telefon raqamini topib beraman!" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Kengaytirilgan professional AI bazasi (klinikalar va shifokorlar)
  const generateAIResponse = (userQuery) => {
    const text = userQuery.toLowerCase();
    
    let aiResponse = "";
    let doctorsList = [];

    if (text.includes('qusvotti') || text.includes('qusyapti') || text.includes('qusish') || text.includes('ich ketdi') || text.includes('ovqat yemayapti') || text.includes('ishtaha') || text.includes('zahar')) {
      aiResponse = `Tahlil natijasi: "${userQuery}". Bu alomatlar o'tkir zaharlanish, gastrit yoki ovqat hazm qilish tizimidagi infeksiyadan dalolat beradi. Hayvon tezda suvsizlanishi mumkin, shuning uchun darhol quyidagi mutaxassislar va klinikalarga murojaat qilishingiz shart:`;
      doctorsList = [
        {
          name: "Dr. Malika Umarova",
          clinic: "'VetHelp' Oliy Kategoriya Klinikasi",
          specialty: "Gastroenterolog / Terapevt",
          experience: "9 yil tajriba",
          phone: "+998 90 123-45-67",
          address: "Toshkent sh., Yunusobod tumani, 14-mavze",
          rating: "4.9"
        },
        {
          name: "Dr. Jasur Rahimov",
          clinic: "'Animal Care' Tibbiyot Markazi",
          specialty: "Umumiy amaliyot veterinari",
          experience: "12 yil tajriba",
          phone: "+998 99 888-77-66",
          address: "Toshkent sh., Chilonzor tumani, Muqimiy ko'chasi",
          rating: "4.8"
        }
      ];
    } 
    else if (text.includes('oqsoqlayapti') || text.includes('oyog\'i') || text.includes('shikast') || text.includes('singan') || text.includes('og\'riyapti') || text.includes('urib yubordi')) {
      aiResponse = `Tahlil natijasi: "${userQuery}". Jonivoringiz jarohat olgan yoki suyak/bo'g'im qismida muammo bor. Uni mutlaqo harakatlantirmasdan, zudlik bilan travmatolog-jarrohga ko'rsatish zarur. Mana eng yaqin ixtisoslashgan shifokorlar:`;
      doctorsList = [
        {
          name: "Dr. Alisher Karimov",
          clinic: "'MegaVet' Jarrohlik Markazi",
          specialty: "Jarroh-Traumatolog",
          experience: "11 yil tajriba",
          phone: "+998 93 555-44-33",
          address: "Toshkent sh., Mirzo Ulug'bek tumani, Mustaqillik shoh ko'chasi",
          rating: "5.0"
        }
      ];
    }
    else if (text.includes('qichishyapti') || text.includes('jun') || text.includes('bit') || text.includes('burga') || text.includes('dog\'') || text.includes('yara')) {
      aiResponse = `Tahlil natijasi: "${userQuery}". Teri infeksiyalari, allergik reaksiyalar yoki parazitlar faollashgan ko'rinadi. Professional dermatolog ko'rigi va tahlillar kerak:`;
      doctorsList = [
        {
          name: "Dr. Dilshodbek Normatov",
          clinic: "'VetDerm' Mutaxassislik Kliniği",
          specialty: "Dermatolog-Parazitolog",
          experience: "8 yil tajriba",
          phone: "+998 91 333-22-11",
          address: "Toshkent sh., Shayxontohur tumani, Labzak ko'chasi",
          rating: "4.7"
        }
      ];
    }
    else {
      aiResponse = `Tahlil natijasi: "${userQuery}". Har qanday o'zgarish e'tiborsiz qoldirilmasligi kerak. Sizga umumiy ko'rikdan o'tish va quyidagi yetakchi mutaxassislarimizdan biriga bog'lanishni maslahat beraman:`;
      doctorsList = [
        {
          name: "Dr. Jasur Rahimov",
          clinic: "'Animal Care' Tibbiyot Markazi",
          specialty: "Bosh shifokor / Terapevt",
          experience: "12 yil tajriba",
          phone: "+998 99 888-77-66",
          address: "Toshkent sh., Chilonzor tumani, Muqimiy ko'chasi",
          rating: "4.8"
        },
        {
          name: "Dr. Malika Umarova",
          clinic: "'VetHelp' Klinikasi",
          specialty: "Terapevt",
          experience: "9 yil tajriba",
          phone: "+998 90 123-45-67",
          address: "Toshkent sh., Yunusobod tumani, 14-mavze",
          rating: "4.9"
        }
      ];
    }

    return { aiResponse, doctorsList };
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const { aiResponse, doctorsList } = generateAIResponse(userText);
      setMessages(prev => [
        ...prev, 
        { sender: 'ai', text: aiResponse, doctors: doctorsList }
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Sarlavha qismi - Saytning yuragi ekanini ko'rsatib turadi */}
        <div className="text-center mb-8">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            🚨 Asosiy Xizmat • 24/7 Tezkor Yordam
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Jonivoringiz bezovta qilvaptimi? AI orqali zudlik bilan Vrach toping!
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Hayvoningizdagi alomatlarni yozing. Sun'iy intellektimiz darhol kasallikni aniqlab, sizga eng yaqin malakali veterinarni, uning klinikasini, telefon raqamini va manzilini topib beradi.
          </p>
        </div>

        {/* Katta Asosiy Oyna */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden flex flex-col h-[650px]">
          
          {/* Top Bar */}
          <div className="bg-emerald-600 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <h3 className="font-bold text-lg">Jonivorim • AI Veterinariya Markazi & Shifokor Qidiruv Tizimi</h3>
            </div>
            <span className="text-xs bg-emerald-700 px-3 py-1 rounded-lg font-medium">Real vaqt rejimida ishlaydi</span>
          </div>

          {/* Chat / Natijalar Maydoni */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Xabar matni */}
                <div className={`max-w-[90%] md:max-w-[80%] p-4 rounded-2xl text-sm md:text-base ${
                  msg.sender === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none shadow-md' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none leading-relaxed'
                }`}>
                  <p>{msg.text}</p>
                </div>

                {/* Agar AI vrachlar/klinikalar ro'yxatini chiqargan bo'lsa */}
                {msg.doctors && msg.doctors.length > 0 && (
                  <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    {msg.doctors.map((doc, docIndex) => (
                      <div key={docIndex} className="bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold bg-emerald-600 text-white px-2.5 py-1 rounded-lg">
                            ⭐ {doc.rating} Reyting
                          </span>
                          <span className="text-xs text-gray-500 font-semibold">{doc.experience}</span>
                        </div>

                        <h4 className="font-extrabold text-gray-900 text-lg mt-3">{doc.name}</h4>
                        <p className="text-xs font-bold text-emerald-700">{doc.specialty}</p>
                        <p className="text-xs font-medium text-gray-700 mt-1">🏥 {doc.clinic}</p>

                        <div className="mt-3 pt-3 border-t border-emerald-200/60 space-y-1.5 text-xs text-gray-800">
                          <p className="flex items-center gap-2">
                            <span>📞</span> <b>Tel:</b> 
                            <a href={`tel:${doc.phone}`} className="text-emerald-700 font-bold hover:underline">{doc.phone}</a>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>📍</span> <b>Manzil:</b> {doc.address}
                          </p>
                        </div>

                        <button 
                          onClick={() => onOpenBooking(`${doc.name} (${doc.specialty}) qabuli`)}
                          className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl transition text-xs shadow-md cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>📅</span> Shifokor qabuliga yozilish & Joy band qilish
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-start">
                <div className="bg-white text-gray-600 p-4 rounded-2xl text-sm shadow-sm border border-gray-100 flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce"></span>
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="font-semibold text-xs">AI simptomlarni chuqur tahlil qilib, eng yaqin veterinarlar va klinikalarni qidirmoqda...</span>
                </div>
              </div>
            )}
          </div>

          {/* Pastdagi So'rov Yuborish Formasi */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-3">
            <input 
              type="text" 
              placeholder="Masalan: Mushugim qusyapti va hech narsa yemayapti, qaysi klinikaga oboray?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-emerald-500 text-sm md:text-base bg-gray-50/50 font-medium"
            />
            <button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-2xl font-bold text-sm md:text-base transition shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>Qidirish & Tahlil</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}