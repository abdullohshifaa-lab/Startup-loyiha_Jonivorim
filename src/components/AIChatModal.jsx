import { useState } from 'react';

export default function AIChatModal({ isOpen, onClose, onOpenBooking }) {
  const [messages, setMessages] = useState([
    { 
      sender: 'ai', 
      text: "Salom! Men Jonivorim AI veterinariya yordamchisiman. Uy hayvoningizda (it, mushuq, qush va h.k.) qanday o'zgarish sezdingiz? Batafsil yozing, birga tahlil qilamiz!" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Haqiqiy AI kabi matnni tahlil qilib, dinamik javob va shifokor tanlab beruvchi funksiya
  const generateAIResponse = (userQuery) => {
    const text = userQuery.toLowerCase();
    
    let aiResponse = "";
    let doctor = {
      name: "Dr. Jasur Rahimov",
      specialty: "Umumiy amaliyot veterinari",
      experience: "12 yil tajriba",
      phone: "+998 99 888-77-66",
      address: "Toshkent sh., Chilonzor tumani, Muqimiy ko'chasi"
    };

    // Muammoni aniqlash va mos shifokorni biriktirish
    if (text.includes('qusvotti') || text.includes('qusyapti') || text.includes('qusish') || text.includes('ich ketdi') || text.includes('ichburug') || text.includes('ovqat yemayapti') || text.includes('ishtaha yoq')) {
      aiResponse = `Tahlil qildim: "${userQuery}" — bu alomatlar oshqozon-ichak trakti infeksiyasi, zaharli narsa yeb qo'yganlik yoki ovqat hazm qilish tizimidagi o'tkir yallig'lanishdan darak berishi mumkin. Uy hayvoningiz suvsizlanib qolmasligi muhim. Zudlik bilan parvarishni to'xtatib, quyidagi mutaxassisimizga ko'rsatishingizni qat'iy tavsiya qilaman:`;
      doctor = {
        name: "Dr. Malika Umarova",
        specialty: "Gastroenterolog / Terapevt",
        experience: "9 yil tajriba",
        phone: "+998 90 123-45-67",
        address: "Toshkent sh., Yunusobod tumani, 14-mavze, 'VetHelp' klinikasi"
      };
    } 
    else if (text.includes('oqsoqlayapti') || text.includes('oyog\'i') || text.includes('shikast') || text.includes('singan') || text.includes('og\'riyapti') || text.includes('sakray olmayapti')) {
      aiResponse = `Tahlil qildim: Bergan ma'lumotingizga ko'ra, jonivoringizda jarohat, suyak yoriq-sinishi yoki bo'g'imlar bilan bog'liq muammo bo'lishi ehtimoli yuqori. Uni ortiqcha harakatlantirmang va tinch qo'ying. Zudlik bilan jarrohlik ko'rigidan o'tkazish lozim:`;
      doctor = {
        name: "Dr. Alisher Karimov",
        specialty: "Jarroh-traumatolog",
        experience: "11 yil tajriba",
        phone: "+998 93 555-44-33",
        address: "Toshkent sh., Mirzo Ulug'bek tumani, Mustaqillik shoh ko'chasi"
      };
    }
    else if (text.includes('qichishyapti') || text.includes('jun') || text.includes('bit') || text.includes('burga') || text.includes('dog\'') || text.includes('tushyapti')) {
      aiResponse = `Tahlil qildim: Teri muammolari, allergik reaksiya yoki parazitlar (burga/kanal) faollashgan bo'lishi mumkin. Hayvon o'zini tinchsiz tutishi aniq. Sizga dermatologimiz yordam bera oladi:`;
      doctor = {
        name: "Dr. Dilshodbek Normatov",
        specialty: "Dermatolog-parazitolog",
        experience: "8 yil tajriba",
        phone: "+998 91 333-22-11",
        address: "Toshkent sh., Shayxontohur tumani, Labzak ko'chasi"
      };
    }
    else {
      aiResponse = `Sizning murojaatingizni tahlil qildim. Har qanday noodatiy holat veterinarning shaxsiy ko'rigini talab qiladi, chunki aniq tashxis faqat tahlillar orqali qo'yiladi. SIZGA quyidagi mutaxassisimizga uchrashni maslahat beraman:`;
      doctor = {
        name: "Dr. Jasur Rahimov",
        specialty: "Kardiolog va Umumiy amaliyot veterinari",
        experience: "12 yil tajriba",
        phone: "+998 99 888-77-66",
        address: "Toshkent sh., Chilonzor tumani, Muqimiy ko'chasi"
      };
    }

    return { aiResponse, doctor };
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    // Haqiqiy AI o'ylash jarayonini 1.2 soniya pauza bilan taqlid qilamiz
    setTimeout(() => {
      const { aiResponse, doctor } = generateAIResponse(userText);

      setMessages(prev => [
        ...prev, 
        { sender: 'ai', text: aiResponse, doctor: doctor }
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col h-[620px] border border-gray-100">
        
        {/* Header */}
        <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">🤖</span>
            <div>
              <h3 className="font-bold text-base">Jonivorim AI Maslahatchi</h3>
              <p className="text-xs text-emerald-100">Sun'iy intellekt asosidagi tezkor veterinariya tahlili</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-emerald-700 p-1.5 rounded-lg font-bold text-lg cursor-pointer transition"
          >
            &times;
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm ${
                msg.sender === 'user' 
                  ? 'bg-emerald-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none leading-relaxed'
              }`}>
                <p>{msg.text}</p>
              </div>

              {/* AI tavsiya qilgan doktor kartochkasi */}
              {msg.doctor && (
                <div className="mt-3 w-full bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 shadow-sm animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">AI Tavsiya etgan mutaxassis:</span>
                    <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">100% mos</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 text-base mt-1.5">{msg.doctor.name}</h4>
                  <p className="text-xs text-gray-600 font-medium">{msg.doctor.specialty} • {msg.doctor.experience}</p>
                  
                  <div className="mt-2.5 space-y-1 text-xs text-gray-700 bg-white/60 p-2.5 rounded-lg border border-emerald-100">
                    <p className="flex items-center gap-1.5"><span>📞</span> <b>Telefon:</b> <a href={`tel:${msg.doctor.phone}`} className="text-emerald-700 font-semibold hover:underline">{msg.doctor.phone}</a></p>
                    <p className="flex items-center gap-1.5"><span>📍</span> <b>Manzil:</b> {msg.doctor.address}</p>
                  </div>

                  <button 
                    onClick={() => {
                      onClose();
                      onOpenBooking(`${msg.doctor.name} (${msg.doctor.specialty}) qabuli`);
                    }}
                    className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-3 rounded-xl transition text-xs shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>📅</span> Shifokor qabuliga yozilish
                  </button>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start">
              <div className="bg-white text-gray-500 p-3.5 rounded-2xl text-sm shadow-sm border border-gray-100 animate-pulse flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs font-medium text-gray-600">AI simptomlarni tahlil qilmoqda...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input 
            type="text" 
            placeholder="Masalan: Mushugim qusyapti va ovqat yemayapti..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-sm bg-gray-50/50"
          />
          <button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm cursor-pointer flex items-center gap-1"
          >
            <span>Yuborish</span>
          </button>
        </form>

      </div>
    </div>
  );
}