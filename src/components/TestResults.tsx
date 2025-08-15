import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Clock, FileText, TrendingUp, Eye, Download } from 'lucide-react';

const TestResults: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedResult, setExpandedResult] = useState<string | null>(null);

  const testResults = [
    {
      id: 'blood-work-1',
      name: 'Comprehensive Metabolic Panel',
      date: '2024-01-15',
      category: 'major-issues',
      status: 'action-needed',
      priority: 'high',
      summary: 'Elevated cholesterol and vitamin D deficiency detected',
      doctor: 'Dr. Sarah Chen',
      details: {
        findings: [
          { marker: 'Total Cholesterol', value: '245 mg/dL', range: '< 200 mg/dL', status: 'high' },
          { marker: 'Vitamin D', value: '18 ng/mL', range: '30-100 ng/mL', status: 'low' },
          { marker: 'HDL Cholesterol', value: '42 mg/dL', range: '> 40 mg/dL', status: 'normal' },
          { marker: 'Glucose', value: '95 mg/dL', range: '70-99 mg/dL', status: 'normal' }
        ],
        recommendations: [
          'Start high-dose vitamin D3 supplementation (4000 IU daily)',
          'Implement Mediterranean-style diet to reduce cholesterol',
          'Increase omega-3 fatty acid intake through fish oil supplements',
          'Schedule follow-up testing in 6 weeks'
        ],
        reasoning: 'Your elevated cholesterol levels combined with low vitamin D could increase cardiovascular risk. The personalized nutrition plan will focus on heart-healthy foods while the vitamin D supplementation addresses the deficiency that may be affecting your energy levels.'
      }
    },
    {
      id: 'body-comp-1',
      name: 'Body Composition Analysis',
      date: '2024-01-10',
      category: 'need-followup',
      status: 'monitor',
      priority: 'medium',
      summary: 'Muscle mass slightly below optimal, body fat within range',
      doctor: 'Marcus Kim',
      details: {
        findings: [
          { marker: 'Body Fat %', value: '22%', range: '18-25%', status: 'normal' },
          { marker: 'Muscle Mass', value: '68 kg', range: '70-75 kg', status: 'low' },
          { marker: 'Visceral Fat', value: '4', range: '< 10', status: 'excellent' },
          { marker: 'Bone Density', value: 'Normal', range: 'Normal', status: 'normal' }
        ],
        recommendations: [
          'Increase resistance training to 3x per week',
          'Add 15g additional protein per day (aim for 1.2g/kg bodyweight)',
          'Focus on compound movements: squats, deadlifts, push-ups',
          'Track progress with monthly body composition scans'
        ],
        reasoning: 'While your overall composition is healthy, building lean muscle mass will improve your metabolic rate and long-term health outcomes. The targeted exercise program will help you reach optimal muscle mass levels.'
      }
    },
    {
      id: 'hormone-panel',
      name: 'Hormone Balance Assessment',
      date: '2024-01-20',
      category: 'all-okay',
      status: 'normal',
      priority: 'low',
      summary: 'All hormone levels within optimal ranges',
      doctor: 'Dr. Sarah Chen',
      details: {
        findings: [
          { marker: 'Testosterone', value: '650 ng/dL', range: '300-1000 ng/dL', status: 'optimal' },
          { marker: 'Thyroid (TSH)', value: '2.1 mIU/L', range: '0.4-4.0 mIU/L', status: 'normal' },
          { marker: 'Cortisol', value: '12 μg/dL', range: '6-23 μg/dL', status: 'normal' },
          { marker: 'Insulin', value: '8 mIU/L', range: '< 25 mIU/L', status: 'excellent' }
        ],
        recommendations: [
          'Continue current stress management practices',
          'Maintain regular sleep schedule (7-9 hours)',
          'Keep up with balanced nutrition plan',
          'Retest in 6 months as part of routine monitoring'
        ],
        reasoning: 'Your hormone profile is excellent, indicating good metabolic health and stress management. This foundation will support your other health optimization goals effectively.'
      }
    },
    {
      id: 'stress-markers',
      name: 'Stress & Inflammation Markers',
      date: '2024-01-25',
      category: 'need-followup',
      status: 'monitor',
      priority: 'medium',
      summary: 'Slightly elevated inflammation markers, stress levels manageable',
      doctor: 'Dr. Sarah Chen',
      details: {
        findings: [
          { marker: 'C-Reactive Protein', value: '3.2 mg/L', range: '< 3.0 mg/L', status: 'slightly-high' },
          { marker: 'Homocysteine', value: '12 μmol/L', range: '< 15 μmol/L', status: 'normal' },
          { marker: 'Fibrinogen', value: '350 mg/dL', range: '200-400 mg/dL', status: 'normal' }
        ],
        recommendations: [
          'Add turmeric and omega-3 supplements for anti-inflammatory support',
          'Increase meditation practice to 15 minutes daily',
          'Include more anti-inflammatory foods (berries, leafy greens, fatty fish)',
          'Monitor stress levels with follow-up testing in 8 weeks'
        ],
        reasoning: 'The slightly elevated CRP suggests mild inflammation, which could be related to stress or dietary factors. The targeted anti-inflammatory approach will help bring this marker into optimal range.'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Results', count: testResults.length },
    { id: 'major-issues', label: 'Action Required', count: testResults.filter(r => r.category === 'major-issues').length },
    { id: 'need-followup', label: 'Monitor', count: testResults.filter(r => r.category === 'need-followup').length },
    { id: 'all-okay', label: 'All Good', count: testResults.filter(r => r.category === 'all-okay').length }
  ];

  const filteredResults = selectedCategory === 'all' 
    ? testResults 
    : testResults.filter(result => result.category === selectedCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'action-needed': return <AlertCircle className="text-red-500" size={20} />;
      case 'monitor': return <Clock className="text-orange-500" size={20} />;
      case 'normal': return <CheckCircle className="text-green-500" size={20} />;
      default: return <FileText className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': case 'low': return 'text-red-600 bg-red-50';
      case 'slightly-high': return 'text-orange-600 bg-orange-50';
      case 'normal': return 'text-blue-600 bg-blue-50';
      case 'optimal': case 'excellent': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
          Your Test Results
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive analysis with personalized insights and recommendations
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Test Results */}
      <div className="space-y-6">
        {filteredResults.map((result) => {
          const isExpanded = expandedResult === result.id;
          return (
            <div key={result.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedResult(isExpanded ? null : result.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(result.status)}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{result.name}</h3>
                      <p className="text-gray-600 mt-1">{result.summary}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>Reviewed by {result.doctor}</span>
                        <span>•</span>
                        <span>{result.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      result.priority === 'high' ? 'bg-red-100 text-red-800' :
                      result.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {result.priority} priority
                    </span>
                    
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-in slide-in-from-top duration-300">
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {/* Test Findings */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                        <TrendingUp className="mr-2" size={18} />
                        Key Findings
                      </h4>
                      <div className="space-y-3">
                        {result.details.findings.map((finding, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium text-gray-800">{finding.marker}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(finding.status)}`}>
                                {finding.status}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">{finding.value}</span>
                              <span className="mx-2">•</span>
                              <span>Normal: {finding.range}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4">Personalized Recommendations</h4>
                      <ul className="space-y-2 mb-6">
                        {result.details.recommendations.map((rec, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600">
                            <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-2">Why These Recommendations?</h5>
                        <p className="text-blue-700 text-sm leading-relaxed">
                          {result.details.reasoning}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Summary */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Your Progress at a Glance</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{testResults.filter(r => r.status === 'normal').length}</div>
            <div className="opacity-90">Tests Normal</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{testResults.filter(r => r.status === 'monitor').length}</div>
            <div className="opacity-90">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{testResults.filter(r => r.status === 'action-needed').length}</div>
            <div className="opacity-90">Action Items</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;