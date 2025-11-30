import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const yearData = [
  { name: 'HK1 23-24', he10: 8.5, he4: 3.4 },
  { name: 'HK2 23-24', he4: 3.2, he10: 8.0 },
];

const semesterGpa = 8.0; // GPA for the current semester, hệ 10
const radialData = [{ name: 'GPA', value: semesterGpa }];

const Grades: React.FC = () => {
    const [activeTab, setActiveTab] = useState('year');

    const renderByYear = () => (
        <div className="bg-navy-light p-6 rounded-lg border border-slate-dark/30">
            <h3 className="text-lg font-bold text-slate-lightest mb-4">Điểm trung bình các học kỳ</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={yearData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#495670" />
                        <XAxis dataKey="name" stroke="#8892b0" />
                        <YAxis yAxisId="left" orientation="left" stroke="#facc15" domain={[0, 10]} />
                        <YAxis yAxisId="right" orientation="right" stroke="#22d3ee" domain={[0, 4]} />
                        <Tooltip contentStyle={{ backgroundColor: '#020c1b', border: '1px solid #495670' }}/>
                        <Legend wrapperStyle={{ color: '#ccd6f6' }}/>
                        <Bar yAxisId="left" dataKey="he10" fill="#facc15" name="Điểm TBC Học kỳ (Hệ 10)" />
                        <Bar yAxisId="right" dataKey="he4" fill="#22d3ee" name="Điểm TBC Tích lũy (Hệ 4)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    const renderBySemester = () => (
        <div className="bg-navy-light p-6 rounded-lg border border-slate-dark/30 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-lightest mb-4">Điểm trung bình Học kỳ 2 (2023-2024)</h3>
            <div className="relative" style={{ width: 300, height: 300 }}>
                <ResponsiveContainer>
                    <RadialBarChart
                        innerRadius="70%"
                        outerRadius="100%"
                        data={radialData}
                        startAngle={90}
                        endAngle={-270}
                        barSize={30}
                    >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 10]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            background={{ fill: '#112240' }}
                            dataKey="value"
                            angleAxisId={0}
                            fill="#fde047"
                            cornerRadius={15}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-5xl font-bold text-accent-yellow">{semesterGpa.toFixed(1)}</span>
                    <span className="text-slate text-lg">/ 10</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-6 lg:p-8 space-y-8 animate-page-transition">
            <div className="flex justify-between items-center">
                <div>
                     <div className="flex space-x-1">
                        <button onClick={() => setActiveTab('year')} className={`px-4 py-2 text-sm font-semibold rounded-md transition ${activeTab === 'year' ? 'bg-accent-yellow text-navy-dark' : 'bg-navy-light text-slate'}`}>Theo năm học</button>
                        <button onClick={() => setActiveTab('semester')} className={`px-4 py-2 text-sm font-semibold rounded-md transition ${activeTab === 'semester' ? 'bg-accent-yellow text-navy-dark' : 'bg-navy-light text-slate'}`}>Theo học kỳ</button>
                    </div>
                </div>
                 <div className="text-right bg-navy-light px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium text-slate">Năm học: 2023-2024</p>
                    <p className="font-bold text-lg text-slate-lightest">GPA: 3.2/4.0 | 8.0/10</p>
                </div>
            </div>

            {activeTab === 'year' ? renderByYear() : renderBySemester()}

            <div>
                <h3 className="text-xl font-bold text-accent-yellow mb-4">Phân tích từ AI</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-navy-light p-6 rounded-lg border-t-4 border-accent-cyan">
                        <div className="flex items-center mb-2">
                            <TrendingUp className="w-6 h-6 text-accent-cyan mr-3"/>
                            <h4 className="font-bold text-slate-lightest">Tiến độ học tập</h4>
                        </div>
                        <p className="text-sm text-slate">Bạn đang hoàn thành 70% chương trình học kỳ này. Rất tốt!</p>
                    </div>
                    <div className="bg-navy-light p-6 rounded-lg border-t-4 border-red-500">
                        <div className="flex items-center mb-2">
                            <AlertTriangle className="w-6 h-6 text-red-500 mr-3"/>
                            <h4 className="font-bold text-slate-lightest">Dự báo rủi ro</h4>
                        </div>
                         <p className="text-sm text-slate">Nguy cơ trượt môn Toán cao cấp là 40%, nếu không cải thiện điểm chuyên cần.</p>
                    </div>
                    <div className="bg-navy-light p-6 rounded-lg border-t-4 border-accent-yellow">
                        <div className="flex items-center mb-2">
                            <Lightbulb className="w-6 h-6 text-accent-yellow mr-3"/>
                            <h4 className="font-bold text-slate-lightest">Gợi ý học tập</h4>
                        </div>
                        <p className="text-sm text-slate">Điểm môn Tiếng Anh đang giảm. Gợi ý: học thêm hoặc nhóm học.</p>
                         <a href="#" className="text-sm text-accent-yellow font-semibold mt-2 inline-block hover:underline">Link Video tại đây</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grades;