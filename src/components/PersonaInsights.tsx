import React, { useState } from 'react';
import { Brain, Target, Heart, Lightbulb, TrendingUp, User, Sparkles, ArrowRight } from 'lucide-react';

const PersonaInsights: React.FC = () => {
  const [activeInsight, setActiveInsight] = useState('personality');

  const personaData = {
    personality: {
      type: 'The Wellness Optimizer',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600',
      description: 'You are naturally drawn to evidence-based approaches to health and enjoy tracking your progress systematically.',
      traits: [
        { name: 'Goal-Oriented', strength: 95 },
        { name: 'Data-Driven', strength: 88 },
        { name: 'Consistency', strength: 82 },
        { name: 'Adaptability', strength: 76 }
      ],
      insights: [
        'You respond well to concrete metrics and measurable outcomes',
        'Structured plans with clear milestones motivate you most effectively',
        'You prefer understanding the "why" behind recommendations',
        'Progressive challenges keep you engaged in your health journey'
      ]
    },
    motivations: {
      type: 'Your Health Drivers',
      icon: Target,
      color: 'from-blue-500 to-purple-600',
      description: 'Understanding what truly motivates you helps us design interventions that align with your values.',
      traits: [
        { name: 'Longevity Focus', strength: 92 },
        { name: 'Energy Optimization', strength: 89 },
        { name: 'Performance Enhancement', strength: 85 },
        { name: 'Disease Prevention', strength: 88 }
      ],
      insights: [
        'You prioritize long-term health outcomes over short-term fixes',
        'Daily energy and mental clarity are key quality of life factors',
        'You value interventions that enhance both physical and cognitive performance',
        'Preventive care resonates strongly with your health philosophy'
      ]
    },
    communication: {
      type: 'Communication Style',
      icon: Brain,
      color: 'from-green-500 to-blue-600',
      description: 'Your preferred way of receiving and processing health information shapes how we interact with you.',
      traits: [
        { name: 'Detail-Oriented', strength: 90 },
        { name: 'Visual Learning', strength: 85 },
        { name: 'Scientific Approach', strength: 87 },
        { name: 'Interactive Engagement', strength: 79 }
      ],
      insights: [
        'You appreciate detailed explanations and scientific rationales',
        'Visual progress tracking and charts enhance your understanding',
        'Evidence-based recommendations carry more weight with you',
        'Interactive tools and assessments keep you engaged'
      ]
    },
    lifestyle: {
      type: 'Lifestyle Patterns',
      icon: Heart,
      color: 'from-orange-500 to-red-600',
      description: 'Your daily patterns and preferences inform how we design sustainable health interventions.',
      traits: [
        { name: 'Morning Person', strength: 78 },
        { name: 'Structured Routine', strength: 84 },
        { name: 'Technology Integration', strength: 91 },
        { name: 'Social Support', strength: 73 }
      ],
      insights: [
        'Morning workouts and health activities align with your natural rhythm',
        'You thrive with consistent routines and predictable schedules',
        'Health tech and apps enhance your ability to track and maintain habits',
        'You prefer some accountability but value independence in execution'
      ]
    }
  };

  const insightTypes = [
    { id: 'personality', label: 'Personality', icon: User },
    { id: 'motivations', label: 'Motivations', icon: Target },
    { id: 'communication', label: 'Communication', icon: Brain },
    { id: 'lifestyle', label: 'Lifestyle', icon: Heart }
  ];

  const currentInsight = personaData[activeInsight as keyof typeof personaData];
  const CurrentIcon = currentInsight.icon;

  const recommendations = [
    {
      title: 'Personalized Dashboard',
      description: 'Custom metrics view focused on the health indicators that matter most to your goals',
      impact: 'High',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Weekly Science Updates',
      description: 'Curated research summaries explaining the science behind your health plan',
      impact: 'Medium',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Morning Routine Optimization',
      description: 'Tailored morning protocols that align with your natural energy patterns',
      impact: 'High',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Progressive Goal Setting',
      description: 'Quarterly challenges that build on your achievements and push your limits',
      impact: 'Medium',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Your Personal Health Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Deep analysis of your personality, motivations, and preferences to create the most effective health journey for you.
        </p>
      </div>

      {/* Insight Type Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
          <div className="grid grid-cols-4 gap-1">
            {insightTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveInsight(type.id)}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                    activeInsight === type.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Insight Display */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className={`bg-gradient-to-r ${currentInsight.color} p-8 text-white`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <CurrentIcon size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{currentInsight.type}</h2>
              <p className="text-white/90 text-lg">{currentInsight.description}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traits and Strengths */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Key Traits
              </h3>
              <div className="space-y-4">
                {currentInsight.traits.map((trait, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{trait.name}</span>
                      <span className="text-sm text-gray-600">{trait.strength}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${currentInsight.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${trait.strength}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Lightbulb className="mr-2" size={20} />
                Key Insights
              </h3>
              <div className="space-y-3">
                {currentInsight.insights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentInsight.color} mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Recommendations Based on Your Profile
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${rec.color} text-white`}>
                  <Lightbulb size={20} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  rec.impact === 'High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {rec.impact} Impact
                </span>
              </div>
              
              <h3 className="font-bold text-gray-800 text-lg mb-2">{rec.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{rec.description}</p>
              
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Persona Summary */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Your Health Journey DNA</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              92%
            </div>
            <div className="text-gray-600">Goal Achievement Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              87%
            </div>
            <div className="text-gray-600">Plan Adherence</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              15
            </div>
            <div className="text-gray-600">Weeks on Journey</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              96%
            </div>
            <div className="text-gray-600">Satisfaction Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaInsights;