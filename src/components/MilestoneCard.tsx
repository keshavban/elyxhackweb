import React from 'react';
import { Award, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface Milestone {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  color: string;
}

interface MilestoneCardProps {
  milestone: Milestone;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
      milestone.completed ? 'border-green-200 bg-gradient-to-br from-white to-green-50' : 'border-gray-200'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color} text-white`}>
          {milestone.completed ? <CheckCircle size={24} /> : <Clock size={24} />}
        </div>
        <div className="text-sm text-gray-500">{milestone.date}</div>
      </div>
      
      <h3 className="font-bold text-gray-800 text-lg mb-2">{milestone.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
      
      <div className={`flex items-center justify-center py-2 px-4 rounded-full text-sm font-medium ${
        milestone.completed 
          ? 'bg-green-100 text-green-800' 
          : 'bg-gray-100 text-gray-600'
      }`}>
        {milestone.completed ? (
          <>
            <Award size={16} className="mr-2" />
            Completed
          </>
        ) : (
          <>
            <Sparkles size={16} className="mr-2" />
            In Progress
          </>
        )}
      </div>
    </div>
  );
};

export default MilestoneCard;