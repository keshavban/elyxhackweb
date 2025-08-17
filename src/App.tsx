import React, { useState, useEffect } from 'react';
import { ChevronRight, User, Heart, Activity, Calendar, MessageCircle, Award, TrendingUp, Users, FileText, Zap, Target } from 'lucide-react';
import Header from './components/Header';
import JourneyTimeline from './components/JourneyTimeline';
import TeamSection from './components/TeamSection';
import HealthMetrics from './components/HealthMetrics';
import TestResults from './components/TestResults';
import PersonaInsights from './components/PersonaInsights';
import InteractiveChat from './components/InteractiveChat';
import MilestoneCard from './components/MilestoneCard';
import MemberProfile from './components/MemberProfile';

function App() {
  const [activeSection, setActiveSection] = useState('journey');
  const [currentWeek, setCurrentWeek] = useState(12);
  const [showChat, setShowChat] = useState(false);

  const navigationItems = [
    { id: 'journey', label: 'My Journey', icon: TrendingUp },
    { id: 'team', label: 'My Team', icon: Users },
    { id: 'metrics', label: 'Health Metrics', icon: Activity },
    { id: 'results', label: 'Test Results', icon: FileText },
    { id: 'insights', label: 'Personal Insights', icon: Zap },
    { id: 'milestones', label: 'Achievements', icon: Target },
    { id: 'profile', label: 'My Profile', icon: User }
  ];

  const milestones = [
    {
      title: "Health Journey Started",
      description: "Completed comprehensive health assessment and persona analysis",
      date: "Week 1",
      completed: true,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Full Health Scan Complete",
      description: "All biological samples collected and physical examination done",
      date: "Week 4",
      completed: true,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Personalized Plan Created",
      description: "Custom intervention plan developed based on test results",
      date: "Week 8",
      completed: true,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "First Progress Review",
      description: "Quarterly health assessment showing significant improvements",
      date: "Week 12",
      completed: currentWeek >= 12,
      color: "from-sky-500 to-sky-600"
    },
    {
      title: "Health Goals Achieved",
      description: "Target health metrics reached ahead of schedule",
      date: "Week 16",
      completed: currentWeek >= 16,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/85 backdrop-blur-lg border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-teal-50/60'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeSection === 'journey' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent mb-4">
                Your Health Transformation Story
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Follow your personalized health journey with Elyx. Every step is carefully crafted for your unique needs and goals.
              </p>
            </div>
            <JourneyTimeline currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
          </div>
        )}

        {activeSection === 'team' && <TeamSection />}
        {activeSection === 'metrics' && <HealthMetrics currentWeek={currentWeek} />}
        {activeSection === 'results' && <TestResults />}
        {activeSection === 'insights' && <PersonaInsights />}
        {activeSection === 'profile' && <MemberProfile />}
        
        {activeSection === 'milestones' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent mb-4">
                Your Health Achievements
              </h1>
              <p className="text-xl text-slate-600">
                Celebrating every milestone in your wellness journey
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {milestones.map((milestone, index) => (
                <MilestoneCard key={index} milestone={milestone} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Interactive Chat */}
      {showChat && (
        <InteractiveChat onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}

export default App;