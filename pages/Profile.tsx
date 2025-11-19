
import React, { useState, useEffect } from 'react';
import { User, Cake, BookOpen, Building, Mail, CreditCard, Users, Binary, Clipboard, Thermometer, Sun, Cloud, CloudRain } from 'lucide-react';

const Profile: React.FC = () => {
  const profileData = {
    name: "VÕ VĂN QUỐC BẢO",
    major: "Thương mại điện tử",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiM0RjQ2RTUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI1MCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiBkeT0iLjA1ZW0iPkI8L3RleHQ+PC9zdmc+",
    studentId: "231A290036",
    dob: "01/01/2005 (Tuổi: 19)",
    class: "23ITTMDT1011",
    faculty: "Kinh tế - Quản trị",
    gender: "Nam",
    email: "bao.vg_231a290036@vhu.edu.vn",
    progress: 25,
    studyYears: "2023-2027"
  };

  const infoItems = [
      { icon: CreditCard, label: "Mã sinh viên", value: profileData.studentId, copyable: true },
      { icon: Cake, label: "Ngày sinh", value: profileData.dob },
      { icon: Users, label: "Lớp", value: profileData.class },
      { icon: Building, label: "Khoa", value: profileData.faculty },
      { icon: Binary, label: "Giới tính", value: profileData.gender },
      { icon: Mail, label: "Email", value: profileData.email },
  ];
  
  const [weather, setWeather] = useState({
    temperature: 28,
    condition: 'sunny' as 'sunny' | 'cloudy' | 'rainy',
    suggestion: 'Trời nắng, nhớ mang nón nhé ☀️'
  });

  useEffect(() => {
    const weatherConditions = [
      { temp: 28, cond: 'sunny', sugg: 'Trời nắng, nhớ mang nón nhé ☀️' },
      { temp: 24, cond: 'cloudy', sugg: 'Hôm nay trời mát, đi học thoải mái 😌' },
      { temp: 22, cond: 'rainy', sugg: 'Có mưa nhẹ, mang ô theo bạn nhé ☔' }
    ];
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    setWeather({
      temperature: randomWeather.temp,
      condition: randomWeather.cond as 'sunny' | 'cloudy' | 'rainy',
      suggestion: randomWeather.sugg
    });
  }, []);

  const WeatherIcon = () => {
    switch(weather.condition) {
      case 'sunny': return <Sun className="w-20 h-20 text-accent-yellow" />;
      case 'cloudy': return <Cloud className="w-20 h-20 text-slate" />;
      case 'rainy': return <CloudRain className="w-20 h-20 text-accent-cyan" />;
      default: return null;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add a toast notification here in a real app
  };

  return (
    <div className="animate-page-transition grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 flex flex-col items-center bg-navy-light p-8 rounded-lg border border-slate-dark/30">
        <div className="relative mb-4">
          <img src={profileData.avatar} alt="Student Avatar" className="w-32 h-32 rounded-full border-4 border-accent-yellow/50" />
           <span className="absolute bottom-2 right-2 block h-5 w-5 rounded-full bg-green-400 border-2 border-navy-light ring-2 ring-green-400"></span>
        </div>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-lightest text-center">{profileData.name}</h2>
        <p className="text-accent-cyan font-medium">{profileData.major}</p>
        <div className="w-full mt-8">
            <div className="flex justify-between mb-1 text-sm">
                <span className="text-slate">Tiến độ học tập ({profileData.studyYears})</span>
                <span className="font-semibold text-accent-cyan">{profileData.progress}% Hoàn thành</span>
            </div>
            <div className="w-full bg-navy rounded-full h-2.5">
                <div className="bg-gradient-to-r from-accent-cyan to-accent-yellow h-2.5 rounded-full" style={{ width: `${profileData.progress}%` }}></div>
            </div>
        </div>
      </div>
      
      <div className="lg:col-span-2 bg-navy-light p-8 rounded-lg border border-slate-dark/30">
          <h3 className="text-xl font-bold text-slate-lightest mb-6">Thông tin chi tiết</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {infoItems.map(item => (
                <div key={item.label} className="flex items-start py-2">
                    <item.icon className="w-6 h-6 text-accent-yellow mr-4 mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                        <p className="text-sm text-slate">{item.label}</p>
                        <div className="flex items-center">
                            <p className="text-base font-semibold text-slate-lightest break-all">{item.value}</p>
                            {item.copyable && (
                                <button onClick={() => copyToClipboard(item.value)} title="Copy" className="ml-2 text-slate hover:text-accent-yellow transition-colors flex-shrink-0">
                                    <Clipboard size={16}/>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
          </div>
      </div>
      
      <div className="lg:col-span-3 bg-navy-light p-6 rounded-lg border border-slate-dark/30 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
            <WeatherIcon />
            <div>
                <p className="text-slate text-sm">Nhiệt độ hiện tại</p>
                <p className="text-5xl font-bold text-slate-lightest">{weather.temperature}°C</p>
            </div>
        </div>
        <div className="text-right">
            <p className="text-lg font-medium text-slate-lightest">{weather.suggestion}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
