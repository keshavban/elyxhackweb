import React from 'react';
import { X, Utensils, Dumbbell, Lightbulb, Clock } from 'lucide-react';

interface TodaysPlanProps {
  onClose: () => void;
}

const TodaysPlan: React.FC<TodaysPlanProps> = ({ onClose }) => {
  const todaysDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const todaysPlan = {
    diet: {
      breakfast: 'Oatmeal with berries and nuts',
      lunch: 'Grilled Chicken Salad with vinaigrette',
      dinner: 'Baked Salmon with steamed asparagus'
    },
    exercise: {
      activity: 'Zone 2 Incline Walk',
      duration: '35 Minutes',
      goal: 'Maintain Heart Rate between 120-130 bpm'
    },
    healthFact: 'Did you know? Staying hydrated can improve your mood and cognitive function by up to 12%. Aim for 8-10 glasses of water today!'
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-top duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Your Plan for Today</h2>
              <p className="text-white/90">{todaysDate}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Today's Diet */}
          <div className="bg-emerald-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
              <Utensils className="mr-3" size={24} />
              Today's Diet
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <span className="font-semibold text-slate-800">Breakfast</span>
                  <p className="text-slate-600 text-sm">{todaysPlan.diet.breakfast}</p>
                </div>
                <div className="text-emerald-600 font-semibold">7:30 AM</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <span className="font-semibold text-slate-800">Lunch</span>
                  <p className="text-slate-600 text-sm">{todaysPlan.diet.lunch}</p>
                </div>
                <div className="text-emerald-600 font-semibold">12:30 PM</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <span className="font-semibold text-slate-800">Dinner</span>
                  <p className="text-slate-600 text-sm">{todaysPlan.diet.dinner}</p>
                </div>
                <div className="text-emerald-600 font-semibold">7:00 PM</div>
              </div>
            </div>
          </div>

          {/* Today's Exercise */}
          <div className="bg-cyan-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
              <Dumbbell className="mr-3" size={24} />
              Today's Exercise
            </h3>
            <div className="bg-white rounded-lg p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-semibold text-slate-800">Activity</div>
                  <div className="text-cyan-600 font-bold">{todaysPlan.exercise.activity}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-800">Duration</div>
                  <div className="text-cyan-600 font-bold">{todaysPlan.exercise.duration}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-800">Goal</div>
                  <div className="text-cyan-600 font-bold text-sm">{todaysPlan.exercise.goal}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Clock size={16} />
                  <span className="text-sm">Scheduled for 6:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Health Fact */}
          <div className="bg-sky-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
              <Lightbulb className="mr-3" size={24} />
              Daily Health Fact
            </h3>
            <div className="bg-white rounded-lg p-4">
              <p className="text-slate-700 leading-relaxed">{todaysPlan.healthFact}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Mark Diet Complete
            </button>
            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Log Exercise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysPlan;