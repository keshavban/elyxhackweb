import React from 'react';
import { Heart, Bell, Settings, Calendar, Brain } from 'lucide-react';
import TodaysPlan from './TodaysPlan';
import AIHealthPredictor from './AIHealthPredictor';

const Header: React.FC = () => {
  const [showTodaysPlan, setShowTodaysPlan] = React.useState(false);
  const [showAIPredictor, setShowAIPredictor] = React.useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-2 rounded-xl">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
                  Elyx Health
                </h1>
                <p className="text-sm text-slate-500">Your Personal Health Journey</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="font-semibold text-slate-800">Arun Sharma</p>
                <p className="text-sm text-slate-500">Member since Jan 2024</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setShowTodaysPlan(true)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Calendar size={18} />
                  <span className="font-medium">Today</span>
                </button>
                <button 
                  onClick={() => setShowAIPredictor(true)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Brain size={18} />
                  <span className="font-medium">AI Health Predictor</span>
                </button>
                <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
                  <Bell size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
                  <Settings size={20} />
                </button>
              </div>
              
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                AS
              </div>
            </div>
          </div>
        </div>
      </header>
            
      {/* Today's Plan Modal */}
      {showTodaysPlan && (
        <TodaysPlan onClose={() => setShowTodaysPlan(false)} />
      )}
      
      {/* AI Health Predictor Modal */}
      {showAIPredictor && (
        <AIHealthPredictor onClose={() => setShowAIPredictor(false)} />
      )}
    </>
  );
};

export default Header;