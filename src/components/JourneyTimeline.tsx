import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight, User, FlaskConical, Stethoscope, TrendingUp, MessageSquare, Users, Heart, Activity, Utensils, Dumbbell, Brain } from 'lucide-react';

interface JourneyTimelineProps {
  currentWeek: number;
  setCurrentWeek: (week: number) => void;
}

const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ currentWeek, setCurrentWeek }) => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const getJourneyPhases = (week: number) => {
    const phases = [];
    
    if (week >= 1 && week <= 1) {
      phases.push({
        week: '1',
        title: 'Week 1: The Wake-Up Call',
        status: 'completed',
        icon: User,
        color: 'from-blue-500 to-blue-600',
        description: 'Mr. Arun Sharma begins his transformative health journey with Elyx.',
        activities: [
          'Initial consultation and comprehensive health assessment',
          'Medical history review and goal setting',
          'Introduction to the Elyx care team',
          'Baseline measurements and lifestyle evaluation'
        ],
        teamInvolved: ['Ruby (Concierge)', 'Dr. Warren (Medical Strategist)'],
        insights: 'This foundational week establishes your health baseline and creates the personalized framework for your entire journey.',
        detailedDescription: 'Mr. Arun Sharma, a 45-year-old executive, starts his health journey feeling overwhelmed by work stress and concerned about his family history of heart disease. The initial consultation reveals elevated stress levels and poor sleep patterns.',
        conversations: [
          {
            speaker: 'Dr. Warren',
            message: 'Mr. Sharma, your stress levels and family history are concerning. We need to take a comprehensive approach to your health.',
            alignment: 'left'
          },
          {
            speaker: 'Arun',
            message: 'I know I need to make changes, but I travel constantly for work. How can I maintain consistency?',
            alignment: 'right'
          },
          {
            speaker: 'Ruby',
            message: 'That\'s exactly why we\'re here. We\'ll create a plan that works with your lifestyle, not against it.',
            alignment: 'left'
          }
        ]
      });
    }

    if (week >= 2 && week <= 4) {
      phases.push({
        week: '2-4',
        title: 'Week 2-4: Building Momentum',
        status: 'completed',
        icon: FlaskConical,
        color: 'from-green-500 to-green-600',
        description: 'Comprehensive testing and initial lifestyle modifications begin.',
        activities: [
          'Complete blood panel and biomarker analysis',
          'Sleep study and stress assessment',
          'Nutritional evaluation with Carla',
          'Initial exercise program with Rachel'
        ],
        teamInvolved: ['Dr. Warren', 'Carla (Nutritionist)', 'Rachel (Physiotherapist)', 'Advik (Performance Scientist)'],
        insights: 'Early testing reveals key areas for improvement, setting the stage for targeted interventions.',
        detailedDescription: 'The comprehensive testing phase reveals elevated cholesterol, poor sleep quality, and high cortisol levels. The team begins implementing targeted interventions.',
        conversations: [
          {
            speaker: 'Carla',
            message: 'Your cholesterol is at 245 mg/dL. We need to focus on anti-inflammatory foods and omega-3s.',
            alignment: 'left'
          },
          {
            speaker: 'Arun',
            message: 'I eat out constantly for business. How do I control what I eat?',
            alignment: 'right'
          },
          {
            speaker: 'Carla',
            message: 'I\'ll work with your assistant to pre-select restaurants and meals. We\'ll make this seamless.',
            alignment: 'left'
          }
        ],
        keyMetrics: [
          { metric: 'Cholesterol', value: '245 mg/dL', status: 'elevated' },
          { metric: 'Sleep Quality', value: '4/10', status: 'poor' },
          { metric: 'Stress Level', value: '8/10', status: 'high' }
        ]
      });
    }

    if (week >= 4 && week <= 8) {
      phases.push({
        week: '4-8',
        title: 'Week 4-8: Finding Rhythm',
        status: week >= 8 ? 'completed' : 'in-progress',
        icon: Stethoscope,
        color: 'from-purple-500 to-purple-600',
        description: 'Establishing sustainable routines and seeing first improvements.',
        activities: [
          'Daily meditation practice implementation',
          'Travel-friendly exercise routines',
          'Supplement protocol optimization',
          'Weekly progress check-ins'
        ],
        teamInvolved: ['Ruby', 'Rachel', 'Advik'],
        insights: 'Consistency begins to pay off with measurable improvements in energy and sleep.',
        detailedDescription: 'Arun starts seeing real changes. His energy levels improve, and he successfully maintains his routine during a business trip to Singapore.',
        conversations: [
          {
            speaker: 'Advik',
            message: 'Your HRV data shows a 15% improvement. The stress management techniques are working.',
            alignment: 'left'
          },
          {
            speaker: 'Arun',
            message: 'I actually felt energized after my Singapore trip instead of exhausted. This is new for me.',
            alignment: 'right'
          },
          {
            speaker: 'Rachel',
            message: 'That\'s the power of consistent movement. Your body is adapting beautifully.',
            alignment: 'left'
          }
        ],
        keyMetrics: [
          { metric: 'Energy Level', value: '+25%', status: 'improved' },
          { metric: 'HRV', value: '+15%', status: 'improved' },
          { metric: 'Sleep Quality', value: '6.5/10', status: 'improving' }
        ]
      });
    }

    if (week >= 8 && week <= 12) {
      phases.push({
        week: '8-12',
        title: 'Week 8-12: Breakthrough Moment',
        status: week >= 12 ? 'completed' : 'in-progress',
        icon: TrendingUp,
        color: 'from-orange-500 to-orange-600',
        description: 'Major health improvements and lifestyle transformation.',
        activities: [
          'Advanced cardiovascular training',
          'Personalized nutrition optimization',
          'Stress resilience building',
          'Mid-journey comprehensive review'
        ],
        teamInvolved: ['Full Elyx Team', 'Dr. Warren', 'Neal (Concierge Lead)'],
        insights: 'Significant health improvements validate the personalized approach and motivate continued progress.',
        detailedDescription: 'The 12-week mark brings remarkable results. Arun\'s cholesterol drops significantly, his resting heart rate improves, and he feels the best he has in years.',
        conversations: [
          {
            speaker: 'Dr. Warren',
            message: 'Your latest results are outstanding. LDL cholesterol down 15%, resting heart rate decreased by 16 bpm.',
            alignment: 'left'
          },
          {
            speaker: 'Arun',
            message: 'I can\'t believe these numbers. I feel like I\'ve gained 10 years of my life back.',
            alignment: 'right'
          },
          {
            speaker: 'Neal',
            message: 'This is just the beginning. We\'re building a foundation for lifelong health.',
            alignment: 'left'
          }
        ],
        keyMetrics: [
          { metric: 'LDL Cholesterol', value: '-15%', status: 'excellent' },
          { metric: 'Resting Heart Rate', value: '-16 bpm', status: 'excellent' },
          { metric: 'Overall Energy', value: '+40%', status: 'excellent' }
        ]
      });
    }

    if (week >= 12) {
      phases.push({
        week: '12+',
        title: 'Week 12+: The New You',
        status: 'in-progress',
        icon: MessageSquare,
        color: 'from-pink-500 to-pink-600',
        description: 'Sustained transformation and planning for the future.',
        activities: [
          'Long-term health strategy development',
          'Advanced optimization protocols',
          'Family health planning discussions',
          'Celebration of achievements'
        ],
        teamInvolved: ['Full Elyx Team'],
        insights: 'The transformation is complete, but the journey continues with advanced optimization and family health planning.',
        detailedDescription: 'Six months later, Arun and his 12-year-old son embark on a challenging trek in the Himalayas - something he never thought possible before starting his health journey.',
        conversations: [
          {
            speaker: 'Arun',
            message: 'You didn\'t just give me a plan; you gave me back my future. I\'m hiking with my son in the Himalayas!',
            alignment: 'right'
          },
          {
            speaker: 'Ruby',
            message: 'Seeing you achieve your goals and create these memories with your family - this is why we do what we do.',
            alignment: 'left'
          }
        ],
        finalImage: {
          description: 'A picture of Mr. Sharma and his son hiking in the mountains, both smiling and healthy.',
          quote: 'You didn\'t just give me a plan; you gave me back my future.'
        }
      });
    }

    return phases;
  };

  const getCurrentPhases = (week: number) => {
    return getJourneyPhases(week).filter(phase => {
      const weekRange = phase.week.split('-');
      if (weekRange.length === 1) {
        if (phase.week.includes('+')) {
          return week >= parseInt(phase.week.replace('+', ''));
        }
        return week === parseInt(phase.week);
      } else {
        const startWeek = parseInt(weekRange[0]);
        const endWeek = parseInt(weekRange[1]);
        return week >= startWeek && week <= endWeek;
      }
    });
  };

  const currentPhases = getCurrentPhases(currentWeek);

  const getPhaseTitle = (week: number) => {
    if (week === 1) return 'Week 1: The Wake-Up Call';
    if (week >= 2 && week <= 4) return 'Weeks 2-4: Building Momentum';
    if (week >= 4 && week <= 8) return 'Weeks 4-8: Finding Rhythm';
    if (week >= 8 && week <= 12) return 'Weeks 8-12: Breakthrough Moment';
    if (week >= 12) return 'Week 12+: The New You';
    return `Week ${week}`;
  };

  return (
    <div className="space-y-8">
      {/* Progress Bar with Running Man */}
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg font-semibold text-gray-800">Week {currentWeek} of your journey</div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentWeek(Math.max(1, currentWeek - 1))}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Previous Week
            </button>
            <button
              onClick={() => setCurrentWeek(Math.min(20, currentWeek + 1))}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Next Week
            </button>
          </div>
        </div>
        
        <div className="relative mb-4">
          <div className="text-4xl absolute top-0 transition-all duration-500 ease-out" 
               style={{ left: `calc(${(currentWeek / 20) * 100}% - 24px)` }}>
            🏃‍♂️
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-12 mt-12">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(currentWeek / 20) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Week's Journey Phases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {getPhaseTitle(currentWeek)}
        </h2>
        
        {currentPhases.length > 0 ? (
          currentPhases.map((phase, index) => {
            const Icon = phase.icon;
            const isExpanded = selectedPhase === index;

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border-blue-200 ${isExpanded ? 'shadow-2xl' : 'hover:shadow-xl'}`}
                onClick={() => setSelectedPhase(isExpanded ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                          <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                            Week {phase.week}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1">{phase.description}</p>
                        <p className="text-gray-700 mt-2 text-sm leading-relaxed">{phase.detailedDescription}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        phase.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : phase.status === 'in-progress'
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {phase.status === 'completed' ? <CheckCircle size={16} /> : <Clock size={16} />}
                      </div>
                      <ArrowRight 
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                        size={20} 
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-6 animate-in slide-in-from-top duration-300">
                      {/* Conversations */}
                      {phase.conversations && (
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <MessageSquare className="mr-2" size={18} />
                            Team Conversations
                          </h4>
                          <div className="space-y-4">
                            {phase.conversations.map((conv, idx) => (
                              <div key={idx} className={`flex ${conv.alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                                  conv.alignment === 'right' 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-white border border-gray-200 text-gray-800'
                                }`}>
                                  <div className="font-medium text-sm mb-1">{conv.speaker}</div>
                                  <div className="text-sm">{conv.message}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Metrics */}
                      {phase.keyMetrics && (
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                            <Activity className="mr-2" size={18} />
                            Key Health Improvements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {phase.keyMetrics.map((metric, idx) => (
                              <div key={idx} className="bg-white rounded-lg p-4 text-center">
                                <div className="font-bold text-lg text-gray-800">{metric.value}</div>
                                <div className="text-sm text-gray-600">{metric.metric}</div>
                                <div className={`text-xs mt-1 px-2 py-1 rounded-full ${
                                  metric.status === 'excellent' ? 'bg-green-100 text-green-800' :
                                  metric.status === 'improved' ? 'bg-blue-100 text-blue-800' :
                                  metric.status === 'improving' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {metric.status}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Final Success Image */}
                      {phase.finalImage && (
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
                          <div className="mb-6">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl mb-4">
                              🏔️
                            </div>
                            <p className="text-gray-600 mb-4">{phase.finalImage.description}</p>
                          </div>
                          <blockquote className="text-2xl font-bold text-gray-800 italic">
                            "{phase.finalImage.quote}"
                          </blockquote>
                          <p className="text-gray-600 mt-2">- Arun Sharma</p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-gray-600">
                                <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Team Members Involved</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {phase.teamInvolved.map((member, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {member}
                              </span>
                            ))}
                          </div>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">Phase Insights</h4>
                          <p className="text-gray-600 italic bg-gray-50 p-3 rounded-lg text-sm leading-relaxed">
                            {phase.insights}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="text-gray-400 mb-4">
              <Clock size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Journey Phase Coming Soon</h3>
            <p className="text-gray-500">
              This phase of your health journey will be available as you progress through your program.
            </p>
          </div>
        )}
      </div>

      {/* Week Navigation Helper */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore Arun's Journey</h3>
        <p className="text-gray-600 mb-4">Follow the complete transformation story week by week</p>
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentWeek(1)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 1
          </button>
          <button
            onClick={() => setCurrentWeek(4)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 4
          </button>
          <button
            onClick={() => setCurrentWeek(8)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 8
          </button>
          <button
            onClick={() => setCurrentWeek(12)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 12
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;