
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, ChevronDown } from 'lucide-react';

const pageTitles: { [key: string]: string } = {
  '/dashboard': 'Gợi ý đăng ký học phần',
  '/profile': 'Thông tin cá nhân',
  '/schedule': 'Lịch học & Sự kiện',
  '/grades': 'Kết quả học tập',
  '/ai-assistant': 'Trợ lý AI',
  '/settings': 'Cài đặt',
};

const Header: React.FC = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Thông tin cá nhân';
  const userAvatar = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiM0RjQ2RTUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI1MCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiBkeT0iLjA1ZW0iPkI8L3RleHQ+PC9zdmc+";

  return (
    <header className="flex-shrink-0 bg-navy/80 backdrop-blur-sm border-b border-slate-dark/20 h-20 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-slate-lightest">{title}</h1>
      <div className="flex items-center space-x-6">
        <button className="relative text-slate hover:text-slate-lightest transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div className="hidden md:block">
            <p className="font-semibold text-sm text-slate-lightest">VÕ VĂN QUỐC BẢO</p>
            <p className="text-xs text-slate">Sinh viên</p>
          </div>
          <ChevronDown className="w-5 h-5 text-slate" />
        </div>
      </div>
    </header>
  );
};

export default Header;
