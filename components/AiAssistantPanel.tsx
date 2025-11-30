
import React, { useState } from 'react';
import { Send, CornerDownLeft } from 'lucide-react';

const AiAssistantPanel: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  
  const aiAvatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiMxMTIyNDAiLz48cGF0aCBkPSJNNDAgMzAgQyAyMCA1MCwgMjAgNzAsIDQwIDkwIiBzdHJva2U9IiMyMmQzZWUiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgLz48cGF0aCBkPSJNNjAgMzAgQyA4MCA1MCwgODAgNzAsIDYwIDkwIiBzdHJva2U9IiMyMmQzZWUiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxMCIgc3Ryb2tlPSIjZmRlMDQ3IiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNTAiIHkxPSIzNSIgeDI9IjUwIiB5Mj0iMjUiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSI0IiAvPjxsaW5lIHgxPSI1MCIgeTE9IjY1IiB4Mj0iNTAiIHkyPSI3NSIgc3Ryb2tlPSIjMjJkM2VlIiBzdHJva2Utd2lkdGg9IjQiIC8+PGxpbmUgeDE9IjM1IiB5MT0iNTAiIHgyPSIyNSIgeTI9IjUwIiBzdHJva2U9IiMyMmQzZWUiIHN0cm9rZS13aWR0aD0iNCIgLz48bGluZSB4MT0iNjUiIHkxPSI1MCIgeDI9Ijc1IiB5Mj0iNTAiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSI0IiAvPjwvc3ZnPg==";

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "Tôi đang xử lý yêu cầu của bạn...", sender: 'ai' }]);
    }, 1000);
  };

  return (
    <aside className="w-1/4 max-w-sm flex-shrink-0 self-center flex flex-col h-[80vh] m-4 mr-6">
      <div className="relative w-full h-full bg-navy-light/50 backdrop-blur-md rounded-2xl border border-accent-yellow/30 shadow-glow-yellow flex flex-col overflow-hidden">
        <div className="p-5 border-b border-slate-dark/30 flex flex-col items-center">
            <div className="relative w-20 h-20 mb-2">
                <div className="absolute inset-0 bg-accent-yellow rounded-full animate-pulse opacity-20"></div>
                <img src={aiAvatar} alt="AI Assistant Avatar" className="w-full h-full rounded-full object-cover border-2 border-accent-yellow/50" />
            </div>
          <h2 className="text-lg font-bold text-slate-lightest">Trợ lý AI</h2>
          <p className="text-sm text-slate">Luôn sẵn sàng hỗ trợ bạn!</p>
        </div>
        
        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'ai' && <img className="w-8 h-8 rounded-full" src={aiAvatar} alt="AI Avatar"/>}
              <div className={`flex flex-col max-w-[80%] leading-1.5 p-3 border-gray-200 rounded-xl ${msg.sender === 'user' ? 'rounded-br-none bg-accent-yellow text-navy-dark' : 'rounded-bl-none bg-navy-light'}`}>
                <p className="text-sm font-normal">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 mt-auto border-t border-slate-dark/30">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi trợ lý AI..."
              className="w-full bg-navy/80 border border-slate-dark rounded-lg pl-4 pr-10 py-2 text-sm text-slate-lightest placeholder-slate focus:outline-none focus:ring-2 focus:ring-accent-yellow/80 transition-all"
            />
            <button onClick={handleSend} className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-slate hover:text-accent-yellow transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AiAssistantPanel;
