import React, { useState } from 'react';
import { User, Target, Brain, Smartphone, MessageSquare, Calendar, MapPin, Briefcase, Heart, Activity, Clock, Globe } from 'lucide-react';

const MemberProfile: React.FC = () => {
  const [activeSection, setActiveSection] = useState('snapshot');

  const profileSections = [
    { id: 'snapshot', label: 'Member Snapshot', icon: User },
    { id: 'outcomes', label: 'Core Outcomes', icon: Target },
    { id: 'insights', label: 'Behavioral Insights', icon: Brain },
    { id: 'tech', label: 'Tech & Data', icon: Smartphone },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'logistics', label: 'Scheduling', icon: Calendar }
  ];

  const memberData = {
    snapshot: {
      preferredName: 'Rohan Patel',
      dateOfBirth: '12 March 1979, 46, Male',
      residence: 'Singapore, frequently travels to UK, US, South Korea, Jakarta',
      occupation: 'Regional Head of Sales for a FinTech company with frequent international travel and high-stress demands',
      personalAssistant: 'Sarah Tan',
      profileImage: 'RP'
    },
    outcomes: {
      goals: [
        {
          title: 'Reduce risk of heart disease',
          description: 'Due to family history by maintaining healthy cholesterol and blood pressure levels',
          targetDate: 'December 2026',
          priority: 'high'
        },
        {
          title: 'Enhance cognitive function and focus',
          description: 'For sustained mental performance in demanding work environment',
          targetDate: 'June 2026',
          priority: 'high'
        },
        {
          title: 'Implement annual full-body health screenings',
          description: 'For early detection of debilitating diseases',
          targetDate: 'November 2025',
          priority: 'medium'
        }
      ],
      motivation: 'Family history of heart disease; wants to proactively manage health for long-term career performance and to be present for his family.',
      successMetrics: [
        'VO2max, biological age, stress resilience',
        'Blood panel markers (cholesterol, blood pressure, inflammatory markers)',
        'Cognitive assessment scores, sleep quality (Garmin data)',
        'Stress resilience (subjective self-assessment, Garmin HRV)'
      ]
    },
    insights: {
      personality: 'Analytical, driven, values efficiency and evidence-based approaches',
      changeStage: 'Highly motivated and ready to act, but time-constrained. Needs clear, concise action plans and data-driven insights',
      socialSupport: 'Wife is supportive; has 2 young kids; employs a cook at home which helps with nutrition management. Mental-health history, current therapist or psychiatrist: No formal mental health history; manages work-related stress through exercise'
    },
    tech: {
      wearables: 'Garmin watch (used for runs), considering Oura ring',
      healthApps: 'Trainerize, MyFitnessPal, Whoop',
      dataSharing: 'Willing to enable full data sharing from Garmin and any new wearables for comprehensive integration and analysis',
      reportingPreference: 'Monthly consolidated health report focusing on key trends and actionable insights; quarterly deep-dive into specific health areas'
    },
    communication: {
      preferredChannels: 'Important updates and communication via PA (Sarah) for scheduling',
      responseExpectations: 'Expects responses within 24-48 hours for non-urgent inquiries. For urgent health concerns, contact his PA immediately, who will then inform his wife',
      detailPreference: 'Prefers executive summaries with clear recommendations, but appreciates access to granular data upon request to understand the underlying evidence',
      language: 'English, Indian cultural background, no specific religious considerations impacting health services'
    },
    logistics: {
      availability: 'Exercises every morning (20 min routine), occasional runs. Office visits at least once every two weeks',
      travel: 'Travel calendar provided by PA (Sarah) on a monthly basis. Requires flexible scheduling and consideration for time-zone adjustments during frequent travel (UK, US, South Korea, Jakarta)',
      appointments: 'Prefers virtual appointments due to travel, but open to on-site for initial comprehensive assessments or specific procedures',
      transport: 'Will arrange his own transport'
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Member Profile
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive overview of your health journey preferences and profile
        </p>
      </div>

      {/* Profile Navigation */}
      <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {profileSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium text-center">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Member Snapshot */}
      {activeSection === 'snapshot' && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
                {memberData.snapshot.profileImage}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{memberData.snapshot.preferredName}</h2>
                <p className="text-white/90 text-lg">{memberData.snapshot.dateOfBirth}</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Primary Residence & Travel</h3>
                    <p className="text-gray-600">{memberData.snapshot.residence}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Briefcase className="text-green-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Occupation</h3>
                    <p className="text-gray-600">{memberData.snapshot.occupation}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <User className="text-purple-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Personal Assistant</h3>
                    <p className="text-gray-600">{memberData.snapshot.personalAssistant}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Profile Summary</h3>
                  <p className="text-blue-700 text-sm">
                    High-achieving executive with demanding travel schedule, focused on proactive health management 
                    and long-term wellness optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Core Outcomes */}
      {activeSection === 'outcomes' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Target className="mr-3" size={24} />
              Top Health & Performance Goals
            </h2>
            
            <div className="space-y-4">
              {memberData.outcomes.goals.map((goal, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-800 text-lg">{goal.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      goal.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {goal.priority} priority
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{goal.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>Target: {goal.targetDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="mr-2 text-red-500" size={20} />
                Core Motivation
              </h3>
              <p className="text-gray-600 leading-relaxed">{memberData.outcomes.motivation}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <Activity className="mr-2 text-green-500" size={20} />
                Success Metrics
              </h3>
              <ul className="space-y-2">
                {memberData.outcomes.successMetrics.map((metric, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Behavioral Insights */}
      {activeSection === 'insights' && (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Brain className="mr-3" size={24} />
            Behavioral & Psychosocial Insights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="font-bold text-purple-800 mb-3">Personality Assessment</h3>
              <p className="text-purple-700 text-sm leading-relaxed">{memberData.insights.personality}</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-blue-800 mb-3">Stage of Change</h3>
              <p className="text-blue-700 text-sm leading-relaxed">{memberData.insights.changeStage}</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-green-800 mb-3">Social Support Network</h3>
              <p className="text-green-700 text-sm leading-relaxed">{memberData.insights.socialSupport}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tech & Data */}
      {activeSection === 'tech' && (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Smartphone className="mr-3" size={24} />
            Tech Stack & Data Feeds
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Wearables in Use</h3>
                <p className="text-gray-600 mb-2">{memberData.tech.wearables}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Health Apps & Platforms</h3>
                <p className="text-gray-600">{memberData.tech.healthApps}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Data Sharing Permissions</h3>
                <p className="text-gray-600 mb-2">{memberData.tech.dataSharing}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Reporting Preferences</h3>
                <p className="text-gray-600">{memberData.tech.reportingPreference}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Communication */}
      {activeSection === 'communication' && (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MessageSquare className="mr-3" size={24} />
            Service & Communication Preferences
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-blue-800 mb-3">Preferred Channels</h3>
                <p className="text-blue-700 text-sm leading-relaxed">{memberData.communication.preferredChannels}</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-800 mb-3">Response Expectations</h3>
                <p className="text-green-700 text-sm leading-relaxed">{memberData.communication.responseExpectations}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-purple-800 mb-3">Detail Preferences</h3>
                <p className="text-purple-700 text-sm leading-relaxed">{memberData.communication.detailPreference}</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-orange-800 mb-3">Language & Cultural</h3>
                <p className="text-orange-700 text-sm leading-relaxed">{memberData.communication.language}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scheduling & Logistics */}
      {activeSection === 'logistics' && (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Calendar className="mr-3" size={24} />
            Scheduling & Logistics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Weekly Availability</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{memberData.logistics.availability}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="text-green-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Travel Calendar</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{memberData.logistics.travel}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MessageSquare className="text-purple-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Appointment Preferences</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{memberData.logistics.appointments}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Transportation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{memberData.logistics.transport}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberProfile;