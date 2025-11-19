import React from 'react';
import { Clock, MapPin, Bot, Users, Code, BrainCircuit } from 'lucide-react';

const weeklySchedule = [
  { day: 'Thứ 2', date: '04/11', classes: [] },
  { day: 'Thứ 3', date: '05/11', classes: [{ name: 'Kinh tế vĩ mô', time: '9:00 - 11:30', location: 'A201', color: 'bg-teal-500/20 border-teal-400 text-teal-300' }] },
  { day: 'Thứ 4', date: '06/11', classes: [{ name: 'Lập trình Web', time: '7:30 - 10:00', location: 'C301', color: 'bg-blue-500/20 border-blue-400 text-blue-300' }] },
  { day: 'Thứ 5', date: '07/11', classes: [] },
  { day: 'Thứ 6', date: '08/11', classes: [{ name: 'Lập trình', time: '13:00 - 15:30', location: 'B105', color: 'bg-indigo-500/20 border-indigo-400 text-indigo-300' }] },
  { day: 'Thứ 7', date: '09/11', classes: [{ name: 'Tiếng Anh chuyên ngành', time: '8:00 - 10:30', location: 'F402', color: 'bg-purple-500/20 border-purple-400 text-purple-300' }] },
  { day: 'Chủ nhật', date: '10/11', classes: [] },
];

const timelineEvents = [
    { title: 'Hội thảo AI', date: '15/11/2025 - 9:00 AM', icon: BrainCircuit, color: 'text-accent-yellow' },
    { title: 'Học thuật cùng AI', date: '18/11/2025 - 10:00 AM', icon: Bot, color: 'text-accent-cyan' },
    { title: 'Ngày hội sinh viên', date: '20/11/2025 - 2:00 PM', icon: Users, color: 'text-pink-400' },
    { title: 'Cuộc thi Hackathon', date: '25/11/2025 - 8:00 AM', icon: Code, color: 'text-green-400' },
];

const Schedule: React.FC = () => {
  return (
    <div className="animate-page-transition grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <div className="flex justify-between items-center">
            <div>
                 <p className="text-xl font-bold text-slate-lightest">Tuần 04/11 - 10/11/2024</p>
                 <p className="text-sm text-slate">Đây là lịch học trong tuần của bạn.</p>
            </div>
            <div className="flex space-x-2">
                <button className="bg-navy-light text-slate-lightest px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-dark/50 transition">Xuất iCal</button>
                 <button className="bg-accent-yellow text-navy-dark px-4 py-2 rounded-md text-sm font-semibold hover:bg-accent-yellow-dark transition">Nhắc nhở</button>
            </div>
        </div>
        
        <div className="space-y-3">
          {weeklySchedule.map((day) => (
            <div key={day.day} className="flex items-start">
              <div className="w-28 text-right mr-6 flex-shrink-0 pt-1">
                <p className="font-bold text-slate-lightest">{day.day}</p>
                <p className="text-sm text-slate">{day.date}</p>
              </div>
              <div className="flex-grow border-l-2 border-slate-dark/30 pl-6 min-h-[4rem]">
                {day.classes.length > 0 ? (
                  day.classes.map((cls, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${cls.color}`}>
                      <p className="font-bold">{cls.name}</p>
                      <div className="flex items-center text-sm mt-1 space-x-4 opacity-80">
                        <span className="flex items-center"><Clock size={14} className="mr-1.5" /> {cls.time}</span>
                        <span className="flex items-center"><MapPin size={14} className="mr-1.5" /> {cls.location}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-slate italic pt-1">Không có lớp học</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-1 flex flex-col">
          <h3 className="text-xl font-bold text-slate-lightest mb-4">Sự kiện sắp tới</h3>
          <ol className="relative border-l-2 border-slate-dark/30 ml-4 flex-grow flex flex-col justify-around">                  
            {timelineEvents.map((event, index) => (
                <li className="ml-8" key={index}>            
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-navy rounded-full -left-4 border-2 border-slate-dark/50 ring-4 ring-navy-light">
                        <event.icon className={`w-4 h-4 ${event.color}`} />
                    </span>
                    <div className="bg-navy-light p-4 rounded-lg border border-slate-dark/30 hover:border-accent-yellow/50 transition-all cursor-pointer">
                        <h4 className="font-semibold text-slate-lightest">{event.title}</h4>
                        <p className="text-sm text-slate">{event.date}</p>
                    </div>
                </li>
            ))}
          </ol>
      </div>
    </div>
  );
};

export default Schedule;