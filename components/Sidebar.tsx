
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, User, Calendar, BarChart3, Bot, Settings as SettingsIcon, HelpCircle, LogOut } from 'lucide-react';

const navigation = [
  { name: 'Thông tin cá nhân', href: '/profile', icon: User },
  { name: 'Lịch học', href: '/schedule', icon: Calendar },
  { name: 'Gợi ý đăng ký học phần', href: '/dashboard', icon: LayoutGrid },
  { name: 'Kết quả học tập', href: '/grades', icon: BarChart3 },
  { name: 'Trợ lý AI', href: '/ai-assistant', icon: Bot },
  { name: 'Cài đặt', href: '/settings', icon: SettingsIcon },
];

const Sidebar: React.FC = () => {
  const userAvatar = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiM0RjQ2RTUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI1MCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiBkeT0iLjA1ZW0iPkI8L3RleHQ+PC9zdmc+";

  return (
    <aside className="w-64 bg-navy-light flex-shrink-0 flex flex-col justify-between p-4 border-r border-slate-dark/20">
      <div>
        <div className="flex items-center space-x-3 p-2 mb-6">
            <div className="w-10 h-10 bg-accent-yellow rounded-md flex items-center justify-center font-bold text-navy-dark text-2xl">
                V
            </div>
            <h1 className="text-xl font-bold text-slate-lightest">VHU Portal</h1>
        </div>
        <nav className="flex flex-col space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-yellow text-navy-dark shadow-md'
                    : 'text-slate hover:bg-slate-dark/40 hover:text-slate-lightest'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col space-y-4">
          <div className="bg-navy rounded-lg p-4 text-center">
            <HelpCircle className="mx-auto w-8 h-8 text-accent-yellow mb-2"/>
            <p className="text-sm text-slate mb-2">Cần hỗ trợ?</p>
            <button className="w-full bg-slate-dark/50 hover:bg-slate-dark text-slate-lightest py-2 rounded-md text-sm font-semibold transition-colors">
              Hỏi trợ lý AI
            </button>
          </div>

          <div className="flex items-center p-2 rounded-md hover:bg-slate-dark/40 transition-colors cursor-pointer">
              <img src={userAvatar} alt="VÕ VĂN QUỐC BẢO" className="w-10 h-10 rounded-full mr-3 border-2 border-slate-dark"/>
              <div>
                  <p className="font-semibold text-sm text-slate-lightest">VÕ VĂN QUỐC BẢO</p>
                  <p className="text-xs text-slate">231A290036</p>
              </div>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
