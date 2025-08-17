import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight, User, FlaskConical, Stethoscope, TrendingUp, MessageSquare, Users, Heart, Activity, Utensils, Dumbbell, Brain, Award, Lightbulb } from 'lucide-react';

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
        detailedDescription: 'Mr. Arun Sharma, a 40-year-old executive, starts his health journey feeling overwhelmed by work stress and concerned about his family history of heart disease. The initial consultation reveals elevated stress levels and poor sleep patterns.',
        keyDecisions: [
          {
            decision: 'Team immediately took over logistics (scheduling, research) and prescribed simple, non-overwhelming initial tasks',
            reasoning: 'The patient was in a state of high stress and confusion. The priority was to reduce his cognitive load and build trust by providing a clear support system and easy first steps to ensure early success and build confidence.'
          }
        ]
      });
    }

    if (week >= 2 && week <= 4) {
      phases.push({
        week: '2-4',
        title: 'Week 2-4: Building Confidence & Responding to Data',
        status: 'completed',
        icon: FlaskConical,
        color: 'from-green-500 to-green-600',
        description: 'Building on baseline data, interpreting early results and navigating first real-world challenges.',
        activities: [
          'Complete blood panel and biomarker analysis',
          'Sleep study and stress assessment',
          'Nutritional evaluation with Carla',
          'Initial exercise program with Rachel'
        ],
        teamInvolved: ['Dr. Warren', 'Carla (Nutritionist)', 'Rachel (Physiotherapist)', 'Advik (Performance Scientist)'],
        insights: 'Early testing reveals key areas for improvement, setting the stage for targeted interventions.',
        detailedDescription: 'Building on the baseline data and routine from Week 1, the focus shifted to interpreting early results and navigating the first real-world challenges. The comprehensive testing phase reveals elevated cholesterol, poor sleep quality, and high cortisol levels.',
        keyMetrics: [
          { metric: 'Cholesterol', value: '245 mg/dL', status: 'elevated' },
          { metric: 'Sleep Quality', value: '4/10', status: 'poor' },
          { metric: 'Stress Level', value: '8/10', status: 'high' }
        ],
        keyDecisions: [
          {
            decision: 'Reframe Lower HR as Progress',
            reasoning: 'When the patient worried his lower heart rate meant he wasn\'t working hard enough, the team used this data point from his Week 1 routine to show his heart was getting more efficient, turning his confusion into a motivational win.'
          },
          {
            decision: 'Connect Stress to BP',
            reasoning: 'With several weeks of consistent data logs, the Performance Scientist introduced a deeper insight, showing the measurable link between the patient\'s stress and his blood pressure, making the abstract feeling of stress a tangible factor to manage.'
          },
          {
            decision: 'Prioritize Recovery During Travel',
            reasoning: 'During the high-stress KL trip, the team used the patient\'s real-time BP data to advise rest over exercise, demonstrating that the plan was adaptive and responsive to the stress-BP link they had just established.'
          }
        ]
      });
    }

    if (week >= 4 && week <= 8) {
      phases.push({
        week: '4-8',
        title: 'Week 4-8: Adapting the Plan & Increasing Strength',
        status: week >= 8 ? 'completed' : 'in-progress',
        icon: Stethoscope,
        color: 'from-purple-500 to-purple-600',
        description: 'Successfully navigated first major challenge and adapting plan based on honest feedback.',
        activities: [
          'Daily meditation practice implementation',
          'Travel-friendly exercise routines',
          'Supplement protocol optimization',
          'Weekly progress check-ins'
        ],
        teamInvolved: ['Ruby', 'Rachel', 'Advik'],
        insights: 'Consistency begins to pay off with measurable improvements in energy and sleep.',
        detailedDescription: 'The patient had now successfully navigated his first major challenge (the KL trip) and was providing honest feedback about the plan\'s sustainability. Arun starts seeing real changes and energy improvements.',
        keyMetrics: [
          { metric: 'Energy Level', value: '+25%', status: 'improved' },
          { metric: 'HRV', value: '+15%', status: 'improved' },
          { metric: 'Sleep Quality', value: '6.5/10', status: 'improving' }
        ],
        keyDecisions: [
          {
            decision: 'Pivot to Flexible "Rules for the Road"',
            reasoning: 'Based on the patient\'s feedback that a rigid meal plan was unrealistic, the Nutritionist shifted to a more flexible, principle-based framework. This decision made the plan more sustainable for his actual lifestyle of client dinners and travel.'
          },
          {
            decision: 'Introduce Resistance Training',
            reasoning: 'Since the patient\'s cardiovascular base was now solid from a month of consistent walking, the Physiotherapist added light resistance bands to introduce a new stimulus, prevent plateaus, and begin improving his metabolic health.'
          }
        ]
      });
    }

    if (week >= 8 && week <= 12) {
      phases.push({
        week: '8-12',
        title: 'Week 8-12: Optimization & Deeper Engagement',
        status: week >= 12 ? 'completed' : 'in-progress',
        icon: TrendingUp,
        color: 'from-orange-500 to-orange-600',
        description: 'Patient now highly confident and ready for sophisticated health optimization approach.',
        activities: [
          'Advanced cardiovascular training',
          'Personalized nutrition optimization',
          'Stress resilience building',
          'Mid-journey comprehensive review'
        ],
        teamInvolved: ['Full Elyx Team', 'Dr. Warren', 'Neal (Concierge Lead)'],
        insights: 'Significant health improvements validate the personalized approach and motivate continued progress.',
        detailedDescription: 'The patient was now highly confident and consistent, with a flexible nutrition system. He was ready for a more sophisticated approach to his health. The 12-week mark brings remarkable results with significant improvements across all metrics.',
        keyMetrics: [
          { metric: 'LDL Cholesterol', value: '-15%', status: 'excellent' },
          { metric: 'Resting Heart Rate', value: '-16 bpm', status: 'excellent' },
          { metric: 'Overall Energy', value: '+40%', status: 'excellent' }
        ],
        keyDecisions: [
          {
            decision: 'Upgrade to a Chest-Strap HR Monitor',
            reasoning: 'To move beyond the basics, the team introduced a more accurate tool. This was necessary to enable the next phase of optimization—Zone Training—making his workouts more efficient.'
          },
          {
            decision: 'Introduce Gut Health Foods',
            reasoning: 'This decision was a direct response to the patient\'s own proactive question about the gut microbiome, which was sparked by his positive 3-month inflammation results. The team supported his deeper engagement with a food-first approach (kefir, kimchi).'
          },
          {
            decision: 'Implement Structured Zone Training',
            reasoning: 'Using the data from the new chest strap, the team evolved his walks into structured workouts with specific HR zones. This directly answered his need for continued progress by making his exercise more purposeful and effective.'
          }
        ]
      });
    }

    if (week >= 12 && week <= 16) {
      phases.push({
        week: '12-16',
        title: 'Week 12-16: Overcoming Plateaus & Travel Mastery',
        status: week >= 16 ? 'completed' : 'in-progress',
        icon: MessageSquare,
        color: 'from-pink-500 to-pink-600',
        description: 'Breaking through fitness plateaus and mastering travel challenges.',
        activities: [
          'Incline walking implementation',
          'Universal travel menu creation',
          'Plateau breakthrough strategies',
          'Travel nutrition mastery'
        ],
        teamInvolved: ['Rachel (Physiotherapist)', 'Carla (Nutritionist)', 'Advik (Performance Scientist)'],
        insights: 'Advanced Zone Training leads to plateau, requiring strategic interventions to maintain progress.',
        detailedDescription: 'Now using advanced Zone Training, the patient\'s body had adapted, leading to his first fitness plateau. Travel also remained a recurring challenge that needed systematic solutions.',
        keyMetrics: [
          { metric: 'Plateau Breakthrough', value: 'Achieved', status: 'excellent' },
          { metric: 'Travel Compliance', value: '95%', status: 'excellent' },
          { metric: 'Workout Intensity', value: '+20%', status: 'improved' }
        ],
        keyDecisions: [
          {
            decision: 'Introduce Incline Walking',
            reasoning: 'In direct response to the plateau identified in his heart rate data, the Physiotherapist added incline to his walks. This provided a new challenge to increase intensity and break the plateau without the high impact of running.'
          },
          {
            decision: 'Create a "Universal Travel Menu"',
            reasoning: 'To address his frustration with travel dining, the Nutritionist evolved the "Rules for the Road" into a simpler, foolproof list of go-to meals. This took the guesswork out of eating on the road, making healthy choices easier during periods of high decision fatigue.'
          }
        ]
      });
    }

    if (week >= 16 && week <= 24) {
      phases.push({
        week: '16-24',
        title: 'Week 16-24: Aspirational Goals & Clinical Success',
        status: week >= 24 ? 'completed' : 'in-progress',
        icon: Award,
        color: 'from-indigo-500 to-indigo-600',
        description: 'Peak confidence and physical ability, shifting focus to aspirational life goals.',
        activities: [
          'Project Trek preparation',
          'Medication dosage reduction',
          '6-month progress report compilation',
          'Advanced fitness protocols'
        ],
        teamInvolved: ['Full Elyx Team', 'Dr. Warren', 'Neal (Concierge Lead)'],
        insights: 'Clinical success enables focus shift from management to aspirational goals with powerful intrinsic motivation.',
        detailedDescription: 'The patient had successfully broken his plateau and mastered travel nutrition. His confidence and physical ability were at their peak, shifting his focus from clinical management to aspirational life goals like the trek with his son.',
        keyMetrics: [
          { metric: 'Statin Dosage', value: '-50%', status: 'excellent' },
          { metric: 'Trek Readiness', value: '100%', status: 'excellent' },
          { metric: 'Clinical Markers', value: 'Optimal', status: 'excellent' }
        ],
        keyDecisions: [
          {
            decision: 'Re-center the Plan on "Project Trek"',
            reasoning: 'When the patient was invited on a trek by his son, the team immediately made this his new central goal. This harnessed a powerful intrinsic motivation, giving all his training a deeper, more meaningful purpose.'
          },
          {
            decision: 'Reduce Medication Dosage',
            reasoning: 'This was a direct result of his sustained, excellent clinical data over the previous months. Halving his statin dose was the ultimate validation that his lifestyle changes had become his "primary medicine," marking a huge clinical and motivational milestone.'
          },
          {
            decision: 'Share a 6-Month Progress Report',
            reasoning: 'To mark the half-year anniversary, the Performance Scientist compiled all his data into a visual report. This powerfully illustrated his transformation, reinforcing the value of the thousands of good choices he had made.'
          }
        ]
      });
    }

    if (week >= 24) {
      phases.push({
        week: '24+',
        title: 'Week 24+: Self-Management & Optimal Well-being',
        status: 'in-progress',
        icon: Heart,
        color: 'from-green-500 to-teal-600',
        description: 'Empowered self-management and sustained excellence with holistic well-being.',
        activities: [
          'Semi-annual health reviews',
          'Meditation practice implementation',
          'Self-directed health management',
          'Mentorship and legacy planning'
        ],
        teamInvolved: ['Periodic Team Check-ins'],
        insights: 'Complete transformation achieved with patient fully empowered for autonomous health management.',
        detailedDescription: 'Having achieved major clinical and fitness goals, the patient felt fully empowered and self-sufficient, as proven by a successful, anxiety-free trip to Tokyo. Six months later, Arun and his 12-year-old son embark on a challenging trek in the Himalayas.',
        keyMetrics: [
          { metric: 'Self-Management', value: '100%', status: 'excellent' },
          { metric: 'Stress Resilience', value: 'Mastered', status: 'excellent' },
          { metric: 'Trek Completion', value: 'Success', status: 'excellent' }
        ],
        keyDecisions: [
          {
            decision: '"Graduate" to a Self-Management Phase',
            reasoning: 'In response to the patient\'s own statement that he "has the tools" to manage his health, the team shifted from intensive daily monitoring to semi-annual reviews. This decision formally recognized his autonomy and moved him into the final, sustainable phase of the journey.'
          },
          {
            decision: 'Introduce Meditation for Stress Resilience',
            reasoning: 'After a major work project highlighted stress as his final frontier, the patient himself sought to improve his mental resilience. The team supported this self-directed goal by providing a strategic breakdown of meditation apps, completing his toolkit for holistic well-being.'
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
    if (week >= 2 && week <= 4) return 'Weeks 2-4: Building Confidence & Responding to Data';
    if (week >= 4 && week <= 8) return 'Weeks 4-8: Adapting the Plan & Increasing Strength';
    if (week >= 8 && week <= 12) return 'Weeks 8-12: Optimization & Deeper Engagement';
    if (week >= 12 && week <= 16) return 'Weeks 12-16: Overcoming Plateaus & Travel Mastery';
    if (week >= 16 && week <= 24) return 'Weeks 16-24: Aspirational Goals & Clinical Success';
    if (week >= 24) return 'Week 24+: Self-Management & Optimal Well-being';
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
                      {/* Key Decisions & Reasoning */}
                      {phase.keyDecisions && (
                        <div className="bg-yellow-50 rounded-xl p-6">
                          <h4 className="font-semibold text-yellow-800 mb-4 flex items-center">
                            <Lightbulb className="mr-2" size={18} />
                            Key Decisions & Reasoning
                          </h4>
                          <div className="space-y-4">
                            {phase.keyDecisions.map((decision, idx) => (
                              <div key={idx} className="bg-white rounded-lg p-4">
                                <h5 className="font-semibold text-gray-800 mb-2">Decision: {decision.decision}</h5>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  <strong>Reasoning:</strong> {decision.reasoning}
                                </p>
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
            onClick={() => setCurrentWeek(4)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 4
          </button>
          <button
            onClick={() => setCurrentWeek(12)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 12
          </button>
          <button
            onClick={() => setCurrentWeek(16)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 16
          </button>
          <button
            onClick={() => setCurrentWeek(28)}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Week 28
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;