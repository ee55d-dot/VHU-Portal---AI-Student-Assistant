
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const behaviorData = [
    {
        id: 1,
        content: "Đánh giá về ý thức tham gia học tập",
        maxScore: 30,
    },
    {
        id: 2,
        content: "Đánh giá về ý thức chấp hành nội quy, quy chế, quy định trong nhà trường",
        maxScore: 20,
    },
    {
        id: 3,
        content: "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị – xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội",
        maxScore: 25,
    },
    {
        id: 4,
        content: "Đánh giá về ý thức công dân trong quan hệ cộng đồng",
        maxScore: 15,
    },
    {
        id: 5,
        content: "Đánh giá về ý thức và kết quả tham gia công tác cán bộ lớp, các đoàn thể, tổ chức trong cơ sở giáo dục đại học hoặc người học đạt được thành tích đặc biệt trong học tập, rèn luyện",
        maxScore: 10,
    },
    {
        id: 6,
        content: "Điểm cộng – Điểm trừ",
        maxScore: 30,
    },
];

const BehaviorScore: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <div className="animate-page-transition">
            <div className="flex justify-between items-center mb-6">
                <div className="flex border-b-2 border-slate-dark/20">
                    <button 
                        onClick={() => setActiveTab('personal')}
                        className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${activeTab === 'personal' ? 'text-accent-yellow border-b-2 border-accent-yellow' : 'text-slate'}`}
                    >
                        ĐIỂM CÁ NHÂN
                    </button>
                </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1">
                    <label htmlFor="year" className="block text-xs text-slate mb-1">Năm học</label>
                    <select id="year" className="w-full bg-navy border border-slate-dark/50 rounded-md p-2 text-sm text-slate-lightest focus:outline-none focus:ring-2 focus:ring-accent-yellow/80">
                        <option>2024-2025</option>
                        <option>2023-2024</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="semester" className="block text-xs text-slate mb-1">Học kỳ</label>
                    <select id="semester" className="w-full bg-navy border border-slate-dark/50 rounded-md p-2 text-sm text-slate-lightest focus:outline-none focus:ring-2 focus:ring-accent-yellow/80">
                        <option>Học kỳ 1</option>
                        <option>Học kỳ 2</option>
                    </select>
                </div>
                <button className="self-end bg-slate-dark/50 text-slate-light cursor-not-allowed px-4 py-2 rounded-md text-sm">
                    Chưa tới thời gian đánh giá
                </button>
            </div>
            
            <div className="bg-navy rounded-lg border border-slate-dark/30 overflow-hidden">
                <div className="grid grid-cols-12 px-4 py-3 bg-navy-dark text-slate-lightest font-bold text-sm">
                    <div className="col-span-1">STT</div>
                    <div className="col-span-7">Nội dung ý kiến đánh giá</div>
                    <div className="col-span-2 text-center">Mức điểm</div>
                    <div className="col-span-2 text-center">Điểm SV</div>
                </div>
                <ul className="divide-y divide-slate-dark/50">
                    {behaviorData.map((item) => (
                        <li key={item.id} className="grid grid-cols-12 px-4 py-3 items-center hover:bg-slate-dark/20 transition-colors">
                            <div className="col-span-1 text-slate">{item.id}</div>
                            <div className="col-span-7 text-slate-lightest">{item.content}</div>
                            <div className="col-span-2 text-center text-slate">{item.maxScore}</div>
                            <div className="col-span-2 flex justify-center text-slate-lightest">
                                <ChevronDown className="w-5 h-5"/>
                            </div>
                        </li>
                    ))}
                    <li className="grid grid-cols-12 px-4 py-3 bg-navy-dark/50 font-semibold">
                        <div className="col-span-8 text-slate-lightest">Tổng điểm đánh giá</div>
                        <div className="col-span-2 text-center"></div>
                        <div className="col-span-2 text-center text-accent-yellow">50</div>
                    </li>
                     <li className="grid grid-cols-12 px-4 py-3 bg-navy-dark/50 font-semibold">
                        <div className="col-span-8 text-slate-lightest">Xếp loại</div>
                        <div className="col-span-2 text-center"></div>
                        <div className="col-span-2 text-center text-accent-cyan">Trung bình</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BehaviorScore;