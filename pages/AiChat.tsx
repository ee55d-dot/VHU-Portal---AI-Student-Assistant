
import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, BrainCircuit } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Chào bạn, tôi là trợ lý AI thông minh của bạn. Hãy bắt đầu hành trình học tập của chúng ta nhé!", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const aiAvatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiMxMTIyNDAiLz48cGF0aCBkPSJNNDAgMzAgQyAyMCA1MCwgMjAgNzAsIDQwIDkwIiBzdHJva2U9IiMyMmQzZWUiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgLz48cGF0aCBkPSJNNjAgMzAgQyA4MCA1MCwgODAgNzAsIDYwIDkwIiBzdHJva2U9IiMyMmQzZWUiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxMCIgc3Ryb2tlPSIjZmRlMDQ3IiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNTAiIHkxPSIzNSIgeDI9IjUwIiB5Mj0iMjUiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSI0IiAvPjxsaW5lIHgxPSI1MCIgeTE9IjY1IiB4Mj0iNTAiIHkyPSI3NSIgc3Ryb2tlPSIjMjJkM2VlIiBzdHJva2Utd2lkdGg9IjQiIC8+PGxpbmUgeDE9IjM1IiB5MT0iNTAiIHgyPSIyNSIgeTI9IjUwIiBzdHJva2U9IiMyMmQzZWUiIHN0cm9rZS13aWR0aD0iNCIgLz48bGluZSB4MT0iNjUiIHkxPSI1MCIgeDI9Ijc1IiB5Mj0iNTAiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSI0IiAvPjwvc3ZnPg==";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = { id: Date.now() + 1, text: "Tôi đã nhận được câu hỏi của bạn và đang phân tích. Vui lòng đợi trong giây lát...", sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    }, 1200);
  };

  return (
    <div className="animate-page-transition h-full">
        <div className="bg-navy border border-slate-dark/30 rounded-lg h-full flex flex-col">
          <div className="p-4 border-b border-slate-dark/30 flex items-center justify-center text-center flex-col">
            <BrainCircuit className="w-12 h-12 text-accent-yellow mb-2" />
            <h2 className="text-xl font-bold text-slate-lightest">Trợ lý AI</h2>
            <p className="text-sm text-slate">Người bạn đồng hành thông minh cho hành trình học tập của bạn.</p>
          </div>

          <div className="flex-grow p-6 overflow-y-auto space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'ai' && <img className="w-10 h-10 rounded-full border-2 border-accent-cyan/50" src={aiAvatar} alt="AI Avatar"/>}
                <div className={`flex flex-col max-w-xl leading-1.5 p-4 rounded-xl ${msg.sender === 'user' ? 'bg-accent-yellow text-navy-dark rounded-br-none' : 'bg-navy-dark text-slate-lightest rounded-bl-none'}`}>
                  <p className="text-sm font-normal">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-dark/30">
            <div className="bg-navy-dark p-2 rounded-lg flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Nhập câu hỏi của bạn ở đây..."
                  className="flex-grow bg-transparent focus:outline-none text-slate-lightest placeholder-slate px-2"
                />
                <button onClick={handleSend} className="bg-accent-yellow text-navy-dark rounded-md p-2 hover:bg-accent-yellow-dark transition-colors">
                  <Send className="w-5 h-5" />
                </button>
            </div>
            <p className="text-xs text-center text-slate mt-2">AI có thể mắc lỗi. Hãy cân nhắc kiểm tra các thông tin quan trọng.</p>
          </div>
        </div>
    </div>
  );
};

export default AiChat;