import React, { useState } from 'react';
import { MessageCircle, Calendar, Award, Clock, Heart, Utensils, Dumbbell, Stethoscope, UserCheck, Users, Brain } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const teamMembers = [
    {
      id: 'ruby',
      name: 'Ruby',
      role: 'The Concierge / Orchestrator',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-pink-500 to-pink-600',
      icon: UserCheck,
      expertise: 'Logistics & Coordination Master',
      stats: {
        consultations: 24,
        availability: '24/7',
        responseTime: '< 2 hours',
        hoursConsulted: 48
      },
      recentActivity: [
        'Scheduled your upcoming lab work',
        'Coordinated team meeting for your progress review',
        'Updated your appointment calendar'
      ],
      bio: 'Ruby is the primary point of contact for all logistics. She is the master of coordination, scheduling, reminders, and follow-ups. She makes the entire system feel seamless.',
      voice: 'Empathetic, organized, and proactive. She anticipates needs and confirms every action. Her job is to remove all friction from the client\'s life.',
      detailedRole: 'The primary point of contact for all logistics. She is the master of coordination, scheduling, reminders, and follow-ups. She makes the entire system feel seamless.'
    },
    {
      id: 'warren',
      name: 'Dr. Warren',
      role: 'The Medical Strategist',
      avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-blue-600',
      icon: Stethoscope,
      expertise: 'Clinical Authority & Medical Direction',
      stats: {
        consultations: 8,
        experience: '15+ years',
        specialization: 'Preventive Medicine',
        hoursConsulted: 16
      },
      recentActivity: [
        'Reviewed your latest biomarker results',
        'Adjusted your supplement protocol',
        'Recommended stress management techniques'
      ],
      bio: 'Dr. Warren is the team\'s physician and final clinical authority. He interprets lab results, analyzes medical records, approves diagnostic strategies, and sets the overarching medical direction.',
      voice: 'Authoritative, precise, and scientific. He explains complex medical topics in clear, understandable terms.',
      detailedRole: 'The team\'s physician and final clinical authority. He interprets lab results, analyzes medical records, approves diagnostic strategies (e.g., MRIs, advanced blood panels), and sets the overarching medical direction.'
    },
    {
      id: 'advik',
      name: 'Advik',
      role: 'The Performance Scientist',
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-purple-600',
      icon: Brain,
      expertise: 'Data Analysis & Optimization',
      stats: {
        consultations: 12,
        dataPoints: '10,000+',
        insights: 'Weekly',
        hoursConsulted: 24
      },
      recentActivity: [
        'Analyzed your sleep and HRV trends',
        'Identified optimal workout timing patterns',
        'Generated personalized recovery recommendations'
      ],
      bio: 'Advik is the data analysis expert. He lives in wearable data (Oura, Oura) looking for trends in sleep, recovery, HRV, and stress. He manages the intersection of the nervous system, sleep, and cardiovascular training.',
      voice: 'Analytical, curious, and pattern-oriented. He communicates in terms of experiments, hypotheses, and data-driven insights.',
      detailedRole: 'The data analysis expert. He lives in wearable data (Oura, Oura) looking for trends in sleep, recovery, HRV, and stress. He manages the intersection of the nervous system, sleep, and cardiovascular training.'
    },
    {
      id: 'carla',
      name: 'Carla',
      role: 'The Nutritionist',
      avatar: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-green-600',
      icon: Utensils,
      expertise: 'Fuel Pillar & Nutrition Strategy',
      stats: {
        consultations: 16,
        plansCreated: 3,
        mealsOptimized: 156,
        hoursConsulted: 32
      },
      recentActivity: [
        'Created your personalized meal plan for next month',
        'Analyzed your food diary insights',
        'Coordinated with household chef for meal prep'
      ],
      bio: 'Carla is the owner of the "Fuel" pillar. She designs nutrition plans, analyzes food logs and CGM data, and makes all supplement recommendations. She often coordinates with household staff like chefs.',
      voice: 'Practical, educational, and focused on behavioral change. She explains the "why" behind every nutritional choice.',
      detailedRole: 'The owner of the "Fuel" pillar. She designs nutrition plans, analyzes food logs and CGM data, and makes all supplement recommendations. She often coordinates with household staff like chefs.'
    },
    {
      id: 'rachel',
      name: 'Rachel',
      role: 'The PT / Physiotherapist',
      avatar: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-orange-600',
      icon: Dumbbell,
      expertise: 'Chassis & Physical Optimization',
      stats: {
        consultations: 14,
        exercisesDesigned: 45,
        injuryPrevention: '100%',
        hoursConsulted: 28
      },
      recentActivity: [
        'Updated your strength training progression',
        'Designed mobility routine for travel days',
        'Assessed movement patterns and form'
      ],
      bio: 'Rachel is the owner of the "Chassis." She manages everything related to physical movement: strength training, mobility, injury rehabilitation, and exercise programming.',
      voice: 'Direct, encouraging, and focused on form and function. She is the expert on the body\'s physical structure and capacity.',
      detailedRole: 'The owner of the "Chassis." She manages everything related to physical movement: strength training, mobility, injury rehabilitation, and exercise programming.'
    },
    {
      id: 'neal',
      name: 'Neal',
      role: 'The Concierge Lead / Relationship Manager',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-indigo-600',
      icon: Users,
      expertise: 'Strategic Leadership & Client Relations',
      stats: {
        experience: '10+ years',
        clientSatisfaction: '98%',
        teamCoordination: 'Expert',
        hoursConsulted: 12
      },
      recentActivity: [
        'Conducted quarterly business review',
        'Aligned team strategy with your goals',
        'Planned upcoming health optimization initiatives'
      ],
      bio: 'Neal is the senior leader of the team. He steps in for major strategic reviews (QBRs), to de-escalate client frustrations, and to connect the day-to-day work back to the client\'s highest-level goals.',
      voice: 'Strategic, reassuring, and focused on the big picture. He provides context and reinforces the long-term vision.',
      detailedRole: 'The senior leader of the team. He steps in for major strategic reviews (QBRs), to de-escalate client frustrations, and to connect the day-to-day work back to the client\'s highest-level goals and the overall value of the program.'
    }
  ];

  const selectedMemberData = teamMembers.find(member => member.id === selectedMember);

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          The Elyx Concierge Team
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          This team is fixed, but their communication style will adapt slightly to your persona. Their roles are distinct, working together as "The Cast of Experts" to optimize your health journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => {
          const Icon = member.icon;
          return (
            <div
              key={member.id}
              className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                selectedMember === member.id ? 'border-blue-300 ring-4 ring-blue-100' : 'border-gray-100'
              }`}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                
                <div className="flex items-center justify-center space-x-1 text-gray-500 mb-4">
                  <Icon size={16} />
                  <span className="text-xs">{member.expertise}</span>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                    <MessageCircle size={16} />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-green-100 rounded-full transition-colors">
                    <Calendar size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedMemberData && (
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200 animate-in slide-in-from-bottom duration-500">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={selectedMemberData.avatar} 
                  alt={selectedMemberData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedMemberData.name}</h2>
              <p className="text-gray-600 mb-4">{selectedMemberData.role}</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Role Description</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{selectedMemberData.detailedRole}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <Award className="mr-2" size={20} />
                Performance Stats
              </h3>
              <div className="space-y-3 mb-6">
                {Object.entries(selectedMemberData.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Communication Voice</h4>
                <p className="text-blue-700 text-sm leading-relaxed">{selectedMemberData.voice}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="mr-2" size={20} />
                Recent Activity
              </h3>
              <div className="space-y-3 mb-6">
                {selectedMemberData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">About {selectedMemberData.name}</h4>
                <p className="text-green-700 text-sm leading-relaxed">{selectedMemberData.bio}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-gray-100">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
              <MessageCircle className="inline mr-2" size={18} />
              Send Message
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors">
              <Calendar className="inline mr-2" size={18} />
              Schedule Meeting
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;