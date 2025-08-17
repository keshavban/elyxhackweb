import React, { useState } from 'react';
import { X, TrendingUp, Heart, Activity, Droplets } from 'lucide-react';

interface AIHealthPredictorProps {
  onClose: () => void;
}

const AIHealthPredictor: React.FC<AIHealthPredictorProps> = ({ onClose }) => {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const healthMetrics = [
    {
      id: 'cholesterol',
      label: 'Cholesterol',
      icon: Droplets,
      color: 'from-red-500 to-red-600',
      description: 'LDL & HDL cholesterol trends and predictions',
      image: '/files_6195441-1755420076667-image.png'
    },
    {
      id: 'bp',
      label: 'Blood Pressure',
      icon: Heart,
      color: 'from-blue-500 to-blue-600',
      description: 'Systolic and diastolic pressure monitoring',
      image: '/files_6195441-1755420100052-image.png'
    },
    {
      id: 'heartrate',
      label: 'Heart Rate',
      icon: Activity,
      color: 'from-green-500 to-green-600',
      description: 'Resting heart rate and variability analysis',
      image: '/files_6195441-1755420115265-image.png'
    }
  ];

  const getCurrentGraph = () => {
    const selectedMetricData = healthMetrics.find(m => m.id === selectedMetric);
    const imageSrc = selectedMetricData ? selectedMetricData.image : '/files_6195441-1755419932489-image.png';
    
    return (
      <div className="bg-white rounded-xl p-6 shadow-inner">
        <img 
          src={imageSrc} 
          alt={getGraphTitle(selectedMetric)}
          className="w-full h-auto rounded-lg"
        />
      </div>
    );
  };

  const getGraphTitle = (metric: string | null) => {
    switch (metric) {
      case 'cholesterol':
        return 'Cholesterol Trend Analysis';
      case 'bp':
        return 'Blood Pressure Monitoring';
      case 'heartrate':
        return 'Heart Rate Variability';
      default:
        return 'AI Wellness Index Prediction';
    }
  };

  const getGraphDescription = (metric: string | null) => {
    switch (metric) {
      case 'cholesterol':
        return 'Your cholesterol levels have improved by 15% since starting the program. The AI predicts continued improvement with current interventions.';
      case 'bp':
        return 'Blood pressure has stabilized within target range. Predictive modeling shows sustained improvement with current lifestyle modifications.';
      case 'heartrate':
        return 'Resting heart rate has decreased by 16 bpm, indicating improved cardiovascular fitness. Trend analysis suggests continued optimization.';
      default:
        return 'Comprehensive wellness prediction based on your health data, lifestyle patterns, and intervention responses. The AI model forecasts your health trajectory over the next 20 weeks.';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-top duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <TrendingUp size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">AI Health Predictor</h2>
                <p className="text-white/90">Advanced analytics for your wellness journey</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* Main Graph Display */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{getGraphTitle(selectedMetric)}</h3>
            <p className="text-gray-600 mb-6">{getGraphDescription(selectedMetric)}</p>
            
            {getCurrentGraph()}
          </div>

          {/* Metric Selection Buttons */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              Select Health Metric for Detailed Analysis
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {healthMetrics.map((metric) => {
                const Icon = metric.icon;
                const isSelected = selectedMetric === metric.id;
                
                return (
                  <button
                    key={metric.id}
                    onClick={() => setSelectedMetric(isSelected ? null : metric.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                      isSelected
                        ? `border-transparent bg-gradient-to-r ${metric.color} text-white shadow-lg transform scale-105`
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`p-3 rounded-full ${
                        isSelected ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <Icon size={24} className={isSelected ? 'text-white' : 'text-gray-600'} />
                      </div>
                      <div className="text-center">
                        <h5 className="font-bold text-lg">{metric.label}</h5>
                        <p className={`text-sm mt-1 ${
                          isSelected ? 'text-white/90' : 'text-gray-500'
                        }`}>
                          {metric.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="mr-2" size={20} />
              AI-Powered Insights
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-4">
                <h5 className="font-semibold text-gray-800 mb-2">Predictive Analysis</h5>
                <p className="text-gray-600 text-sm">
                  Based on your current trajectory, the AI model predicts a 23% improvement in overall wellness 
                  score over the next 6 months, with cardiovascular health showing the most significant gains.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-4">
                <h5 className="font-semibold text-gray-800 mb-2">Risk Assessment</h5>
                <p className="text-gray-600 text-sm">
                  Your cardiovascular risk profile has improved by 18% since program start. 
                  Continued adherence to current interventions maintains low-risk classification.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={() => setSelectedMetric(null)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              View Wellness Index
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-semibold transition-colors">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHealthPredictor;