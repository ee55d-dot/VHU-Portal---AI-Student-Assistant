import React from 'react';
import { Settings as SettingsIcon, Shield, Bell, Languages } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="animate-page-transition flex flex-col items-center justify-center h-full text-center">
      <div className="bg-navy-light p-10 rounded-lg border border-slate-dark/30">
        <SettingsIcon className="w-16 h-16 text-accent-yellow mx-auto mb-4 animate-spin-slow" />
        <h2 className="text-3xl font-bold text-slate-lightest mb-2">Cài đặt</h2>
        <p className="text-slate max-w-sm">
          Trang cài đặt đang được xây dựng. Các tính năng như thay đổi ngôn ngữ, chế độ sáng/tối, thông báo và bảo mật sẽ sớm có mặt.
        </p>
        <div className="mt-8 flex justify-center gap-6">
            <div className="flex flex-col items-center text-slate">
                <Languages className="w-8 h-8 mb-1"/>
                <span className="text-xs">Ngôn ngữ</span>
            </div>
             <div className="flex flex-col items-center text-slate">
                <Bell className="w-8 h-8 mb-1"/>
                <span className="text-xs">Thông báo</span>
            </div>
             <div className="flex flex-col items-center text-slate">
                <Shield className="w-8 h-8 mb-1"/>
                <span className="text-xs">Bảo mật</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;