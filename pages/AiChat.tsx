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
    <div className="animate-page-transition bg-navy-light border border-slate-dark/30 rounded-lg h-[calc(100vh-10rem)] flex flex-col">
      <div className="p-4 border-b border-slate-dark/30 flex items-center justify-center text-center flex-col">
        <BrainCircuit className="w-12 h-12 text-accent-yellow mb-2" />
        <h2 className="text-xl font-bold text-slate-lightest">Trợ lý AI</h2>
        <p className="text-sm text-slate">Người bạn đồng hành thông minh cho hành trình học tập của bạn.</p>
      </div>

      <div className="flex-grow p-6 overflow-y-auto space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'ai' && <img className="w-10 h-10 rounded-full border-2 border-accent-cyan/50" src="https://i.imgur.com/3B0k6f8.png" alt="AI Avatar"/>}
            <div className={`flex flex-col max-w-xl leading-1.5 p-4 rounded-xl ${msg.sender === 'user' ? 'bg-accent-yellow text-navy-dark rounded-br-none' : 'bg-navy text-slate-lightest rounded-bl-none'}`}>
              <p className="text-sm font-normal">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-dark/30">
        <div className="bg-navy p-2 rounded-lg flex items-center gap-2">
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
  );
};

export default AiChat;