import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight, User, FlaskConical, Stethoscope, TrendingUp, MessageSquare, Users } from 'lucide-react';

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
        title: 'Welcome & Discovery - Member Onboarding',
        status: 'completed',
        icon: User,
        color: 'from-blue-500 to-blue-600',
        description: 'This is member onboarding where you share your medical history, priorities, and dietary preferences with our expert team.',
        activities: [
          'The member shares medical history, priorities, diets that they follow, and have test discussions with the Elyx team',
          'Complete member onboarding and comprehensive health assessment',
          'Discussion of health priorities and personal wellness goals',
          'Review of current dietary habits and lifestyle patterns',
          'Initial test discussions and health baseline establishment',
          'Introduction to your dedicated Elyx care team members'
        ],
        teamInvolved: ['Ruby (Concierge)', 'Dr. Warren (Medical Strategist)'],
        insights: 'This foundational week establishes your health baseline and creates the personalized framework for your entire journey. Your medical history and goals become the cornerstone of your customized intervention plan.',
        detailedDescription: 'During your first week, we focus on understanding you as a complete person - not just your medical data. This is member onboarding where you share your medical history, priorities, and dietary preferences with our expert team. We conduct comprehensive test discussions to establish your health baseline and introduce you to the dedicated professionals who will guide your transformation journey.'
      });
    }

    if (week >= 2 && week <= 4) {
      phases.push({
        week: '2-4',
        title: 'Comprehensive Health Assessment & Testing',
        status: 'completed',
        icon: FlaskConical,
        color: 'from-green-500 to-green-600',
        description: 'Elyx collects biological samples and puts you through our complete test scan suite.',
        activities: [
          'Elyx collects biological samples/have them go through test scan suite',
          'The physical exam of the member is done',
          'Complete test scan suite including advanced biomarker panels',
          'Thorough physical examination conducted by medical team',
          'Body composition analysis and metabolic assessment',
          'Cardiovascular health evaluation and fitness baseline testing'
        ],
        teamInvolved: ['Dr. Warren (Medical Strategist)', 'Advik (Performance Scientist)', 'Lab Specialists'],
        insights: 'These weeks provide the scientific foundation for your personalized health plan. Every test is carefully selected based on your individual risk factors and health goals.',
        detailedDescription: 'Weeks 2-4 represent the comprehensive data collection phase of your journey. Elyx collects biological samples and puts you through our complete test scan suite. This includes advanced blood panels, metabolic assessments, and a thorough physical examination. Our performance scientist analyzes your data to identify patterns and opportunities for optimization.'
      });
    }

    if (week >= 4 && week <= 8) {
      phases.push({
        week: '4-8',
        title: 'Results Analysis & Personalized Plan Development',
        status: week >= 8 ? 'completed' : 'in-progress',
        icon: Stethoscope,
        color: 'from-purple-500 to-purple-600',
        description: 'Test results are shared with the member intermittently and categorized into action buckets.',
        activities: [
          'Test results are shared with the member intermittently. Tests results are categorized into three buckets: "major issues", "need followup", "all okay"',
          'Different people in the Elyx team talk to the member and discuss the results',
          'Get member\'s commitment on what interventions (lifestyle changes they want to make)',
          'Results organized into comprehensive action categories',
          'Personalized nutrition, exercise, and supplement protocols developed',
          'Member commitment obtained for lifestyle interventions and changes'
        ],
        teamInvolved: ['Dr. Warren (Medical Strategist)', 'Carla (Nutritionist)', 'Rachel (Physiotherapist)', 'Advik (Performance Scientist)'],
        insights: 'Your test results reveal unique patterns that inform a completely personalized approach. Each recommendation is backed by your specific biomarkers and health profile.',
        detailedDescription: 'During weeks 4-8, your test results are carefully analyzed and shared with you intermittently. We categorize findings into three key buckets: major issues requiring immediate action, areas needing follow-up monitoring, and markers that are performing well. Different people in the Elyx team discuss these results with you, ensuring you understand every aspect of your health picture and commit to the interventions that will drive the best outcomes.'
      });
    }

    if (week >= 8 && week <= 20) {
      phases.push({
        week: '8-20',
        title: 'Active Intervention & Continuous Monitoring',
        status: week >= 20 ? 'completed' : 'in-progress',
        icon: TrendingUp,
        color: 'from-orange-500 to-orange-600',
        description: 'Weekly check-ins and active intervention implementation with continuous team support.',
        activities: [
          'Weekly check-in by the concierge or wellness officer to remove blockers / followup',
          'Push member where needed to drive outcomes',
          'The member tries out the interventions suggested by the Elyx team',
          'Fortnightly calls by the medical team to check in on the member\'s medical records',
          'Continuous plan adjustments based on real-time feedback and results',
          'Proactive member support to drive optimal health outcomes'
        ],
        teamInvolved: ['Ruby (Concierge)', 'Dr. Warren (Medical Strategist)', 'Carla (Nutritionist)', 'Rachel (Physiotherapist)', 'Neal (Concierge Lead)'],
        insights: 'This active phase focuses on implementation and real-time optimization. Your dedicated team provides continuous support to ensure you achieve your health goals efficiently.',
        detailedDescription: 'Weeks 8-20 represent the active intervention phase where you implement the personalized strategies developed by your Elyx team. You receive weekly check-ins from your concierge or wellness officer to remove any blockers and ensure smooth progress. The team proactively pushes and supports you to drive the best possible outcomes, with fortnightly medical reviews to track your progress and make necessary adjustments.'
      });
    }

    if (week >= 12) {
      phases.push({
        week: '12+',
        title: 'Progress Review & Strategic Planning',
        status: 'in-progress',
        icon: MessageSquare,
        color: 'from-pink-500 to-pink-600',
        description: 'Comprehensive progress assessment and strategic planning for continued optimization.',
        activities: [
          'At the end of week 12, the member goes for tests again to review the progress being made',
          'The physician reviews the results and plans with the other people in the Elyx team for next steps for the member\'s journey',
          'Comprehensive testing at week 12 to review progress made',
          'Strategic planning session for continued health optimization',
          'Plan refinements based on achieved outcomes and new goals',
          'Long-term health strategy development and milestone setting'
        ],
        teamInvolved: ['Full Elyx Team', 'Dr. Warren (Medical Strategist)', 'Neal (Concierge Lead)'],
        insights: 'At the 12-week mark, we conduct a comprehensive review to celebrate your progress and strategically plan the next phase of your health journey.',
        detailedDescription: 'At the end of week 12, you undergo comprehensive testing again to review the progress being made. The physician reviews these results and collaborates with the entire Elyx team to plan the next steps for your health journey. This marks a crucial milestone where we assess achievements, identify new opportunities, and set the strategic direction for continued optimization.'
      });
    }

    return phases;
  };

  const getCurrentPhases = (week: number) => {
    return getJourneyPhases(week).filter(phase => {
      const weekRange = phase.week.split('-');
      if (weekRange.length === 1) {
        // Single week like "1" or "12+"
        if (phase.week.includes('+')) {
          return week >= parseInt(phase.week.replace('+', ''));
        }
        return week === parseInt(phase.week);
      } else {
        // Range like "2-4" or "8-20"
        const startWeek = parseInt(weekRange[0]);
        const endWeek = parseInt(weekRange[1]);
        return week >= startWeek && week <= endWeek;
      }
    });
  };

  const currentPhases = getCurrentPhases(currentWeek);

  const getPhaseTitle = (week: number) => {
    if (week === 1) return 'Week 1: Getting Started';
    if (week >= 2 && week <= 4) return 'Weeks 2-4: Assessment Phase';
    if (week >= 4 && week <= 8) return 'Weeks 4-8: Plan Development';
    if (week >= 8 && week <= 12) return 'Weeks 8-12: Active Intervention';
    if (week >= 12) return 'Week 12+: Progress Review';
    return `Week ${week}`;
  };

  return (
    <div className="space-y-8">
      {/* Running Man Emoji and Timeline Progress Bar */}
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
        
        {/* Running Man Emoji positioned above the progress bar */}
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
            const isActive = true; // All shown phases are active for current week

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                  isActive ? 'border-blue-200' : 'border-gray-100'
                } ${isExpanded ? 'shadow-2xl' : 'hover:shadow-xl'}`}
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
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore Your Journey</h3>
        <p className="text-gray-600 mb-4">Use the week navigation above to see how your health journey unfolds over time</p>
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