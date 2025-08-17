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
      preferredName: 'Arun Sharma',
      dateOfBirth: '12 March 1985, 40, Male',
      residence: 'Primary residence is Singapore, frequently travels to Kuala Lumpur, Delhi, Bangkok, and Tokyo',
      occupation: 'Consultant at BCG firm with high-stress role involving frequent international travel, client meetings, and demanding projects',
      personalAssistant: 'Priya Singh',
      profileImage: 'RP'
    },
    outcomes: {
      goals: [
        {
          title: 'Reduce risk of heart disease by managing atherosclerosis',
          description: 'Lower blood pressure from baseline of 145/95 mmHg to consistent target below 125/80 mmHg',
          targetDate: 'Ongoing monitoring',
          priority: 'high'
        },
        {
          title: 'Manage physiological impact of high work-related stress',
          description: 'Build mental resilience through meditation and stress management techniques',
          targetDate: 'Ongoing development',
          priority: 'high'
        },
        {
          title: 'Improve cardiovascular endurance and functional strength',
          description: 'Complete a multi-day trek with his son, Rohan (Project Trek)',
          targetDate: 'Target completion within 12 months',
          priority: 'high'
        }
      ],
      motivation: 'Initially triggered by anxiety after searching symptoms online. Primary motivation is to be healthy and capable enough to participate in a trek with his son, Rohan.',
      successMetrics: [
        'Daily biometric data, including blood pressure and resting heart rate',
        'Objective clinical results from diagnostic panels (LDL cholesterol, hs-CRP)',
        'Performance metrics like heart rate recovery after exertion',
        'Real-world capabilities: feeling strong on training hikes and managing health while traveling'
      ]
    },
    insights: {
      personality: 'Analytical and data-driven, finding that seeing numerical data makes choices "obvious". Proactive and highly engaged, often researching topics independently and valuing efficiency',
      changeStage: 'Began in confusion and worry, but quickly progressed to being highly motivated and ready to act. Now in proactive phase, suggesting new health strategies like strength training and meditation',
      socialSupport: 'Has a son named Rohan, who serves as significant motivation for long-term fitness goals. No formal mental health history, but identifies high work stress as critical issue and proactively seeks tools like meditation'
    },
    tech: {
      wearables: 'Initially used smartwatch to track sleep and heart rate, later added Polar H10 chest-strap heart rate monitor for accurate exercise data',
      healthApps: 'Service\'s proprietary platform for communication and data logging, Headspace app for guided meditation',
      dataSharing: 'Willingly and consistently shares data from wearables including sleep metrics, heart rate, workout details, and daily manual blood pressure readings',
      reportingPreference: 'Engages with daily, real-time feedback from team. Values deeper data analysis from Performance Scientist and comprehensive progress reports at milestones'
    },
    communication: {
      preferredChannels: 'Direct messaging/chat platform to communicate with entire care team including concierge (Ruby), nutritionist (Carla), physiotherapist (Rachel), and doctors (Dr. Warren)',
      responseExpectations: 'For urgent health concerns (like high BP while traveling), contacts team immediately. Concierge escalates to lead doctor for immediate review and instruction',
      detailPreference: 'Appreciates both concise strategic advice and detailed underlying science. Values "Rules for the Road" summaries but also requests detailed articles on topics like sleep and gut microbiome',
      language: 'English, Indian cultural background, based in Singapore and familiar with local cuisine. No specific religious considerations mentioned'
    },
    logistics: {
      availability: 'Exercise sessions (walks and strength training) typically done in the evening. Relies on concierge Ruby to block out time in calendar',
      travel: 'Travels internationally for work at least once every 4-6 weeks. Provides advance notice to concierge to manage logistics and health strategies for trips',
      appointments: 'Majority of interactions are virtual through platform. Attends on-site appointments for comprehensive diagnostic panels',
      transport: 'Concierge (Ruby) arranges airport transfers'
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