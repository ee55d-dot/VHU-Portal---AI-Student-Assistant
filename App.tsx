
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AiAssistantPanel from './components/AiAssistantPanel';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import Grades from './pages/Grades';
import AiChat from './pages/AiChat';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-navy text-slate-light overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex min-w-0"> {/* Wrapper for main content and AI panel */}
          <div className="flex-grow flex flex-col h-screen overflow-y-auto">
            <Header />
            <main className="flex-grow p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<Navigate to="/profile" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/ai-assistant" element={<AiChat />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
          <AiAssistantPanel />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
