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
      description: 'LDL & HDL cholesterol trends and predictions'
    },
    {
      id: 'bp',
      label: 'Blood Pressure',
      icon: Heart,
      color: 'from-blue-500 to-blue-600',
      description: 'Systolic and diastolic pressure monitoring'
    },
    {
      id: 'heartrate',
      label: 'Heart Rate',
      icon: Activity,
      color: 'from-green-500 to-green-600',
      description: 'Resting heart rate and variability analysis'
    }
  ];

  // Sample data for different metrics (20 weeks)
  const generateWellnessData = () => {
    const weeks = Array.from({ length: 20 }, (_, i) => i + 1);
    return weeks.map(week => ({
      week,
      value: Math.min(95, 45 + (week * 2.5) + Math.random() * 5)
    }));
  };

  const generateCholesterolData = () => {
    const weeks = Array.from({ length: 20 }, (_, i) => i + 1);
    return weeks.map(week => ({
      week,
      ldl: Math.max(120, 245 - (week * 6) + Math.random() * 10),
      hdl: Math.min(65, 42 + (week * 1.2) + Math.random() * 3)
    }));
  };

  const generateBPData = () => {
    const weeks = Array.from({ length: 20 }, (_, i) => i + 1);
    return weeks.map(week => ({
      week,
      systolic: Math.max(115, 145 - (week * 1.5) + Math.random() * 5),
      diastolic: Math.max(75, 95 - (week * 1) + Math.random() * 3)
    }));
  };

  const generateHeartRateData = () => {
    const weeks = Array.from({ length: 20 }, (_, i) => i + 1);
    return weeks.map(week => ({
      week,
      resting: Math.max(55, 78 - (week * 1.1) + Math.random() * 3),
      recovery: Math.min(25, 45 - (week * 1) + Math.random() * 2)
    }));
  };

  const wellnessData = generateWellnessData();
  const cholesterolData = generateCholesterolData();
  const bpData = generateBPData();
  const heartRateData = generateHeartRateData();

  const renderWellnessGraph = () => {
    const maxValue = 100;
    const minValue = 0;
    const graphHeight = 300;
    const graphWidth = 600;

    return (
      <div className="bg-white rounded-xl p-6 shadow-inner">
        <svg width={graphWidth} height={graphHeight} className="w-full">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(value => (
            <g key={value}>
              <line
                x1={50}
                y1={graphHeight - 50 - ((value / maxValue) * (graphHeight - 100))}
                x2={graphWidth - 50}
                y2={graphHeight - 50 - ((value / maxValue) * (graphHeight - 100))}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={40}
                y={graphHeight - 45 - ((value / maxValue) * (graphHeight - 100))}
                fontSize="12"
                fill="#6b7280"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {wellnessData.filter((_, i) => i % 4 === 0).map(point => (
            <text
              key={point.week}
              x={50 + ((point.week - 1) / 19) * (graphWidth - 100)}
              y={graphHeight - 20}
              fontSize="12"
              fill="#6b7280"
              textAnchor="middle"
            >
              W{point.week}
            </text>
          ))}

          {/* Wellness line */}
          <path
            d={`M ${wellnessData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - ((point.value / maxValue) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="url(#wellnessGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points */}
          {wellnessData.map((point, i) => (
            <circle
              key={i}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - ((point.value / maxValue) * (graphHeight - 100))}
              r="4"
              fill="url(#wellnessGradient)"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week}: {point.value.toFixed(1)}%</title>
            </circle>
          ))}

          {/* Gradients */}
          <defs>
            <linearGradient id="wellnessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  const renderCholesterolGraph = () => {
    const maxValue = 300;
    const minValue = 0;
    const graphHeight = 300;
    const graphWidth = 600;

    return (
      <div className="bg-white rounded-xl p-6 shadow-inner">
        <svg width={graphWidth} height={graphHeight} className="w-full">
          {/* Grid lines */}
          {[0, 100, 150, 200, 250, 300].map(value => (
            <g key={value}>
              <line
                x1={50}
                y1={graphHeight - 50 - ((value / maxValue) * (graphHeight - 100))}
                x2={graphWidth - 50}
                y2={graphHeight - 50 - ((value / maxValue) * (graphHeight - 100))}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={40}
                y={graphHeight - 45 - ((value / maxValue) * (graphHeight - 100))}
                fontSize="12"
                fill="#6b7280"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          {/* Target line for LDL */}
          <line
            x1={50}
            y1={graphHeight - 50 - ((200 / maxValue) * (graphHeight - 100))}
            x2={graphWidth - 50}
            y2={graphHeight - 50 - ((200 / maxValue) * (graphHeight - 100))}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x={graphWidth - 45}
            y={graphHeight - 55 - ((200 / maxValue) * (graphHeight - 100))}
            fontSize="10"
            fill="#ef4444"
            textAnchor="end"
          >
            Target: 200
          </text>

          {/* X-axis labels */}
          {cholesterolData.filter((_, i) => i % 4 === 0).map(point => (
            <text
              key={point.week}
              x={50 + ((point.week - 1) / 19) * (graphWidth - 100)}
              y={graphHeight - 20}
              fontSize="12"
              fill="#6b7280"
              textAnchor="middle"
            >
              W{point.week}
            </text>
          ))}

          {/* LDL line */}
          <path
            d={`M ${cholesterolData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - ((point.ldl / maxValue) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* HDL line */}
          <path
            d={`M ${cholesterolData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - ((point.hdl / maxValue) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points for LDL */}
          {cholesterolData.map((point, i) => (
            <circle
              key={`ldl-${i}`}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - ((point.ldl / maxValue) * (graphHeight - 100))}
              r="4"
              fill="#ef4444"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week} LDL: {point.ldl.toFixed(1)} mg/dL</title>
            </circle>
          ))}

          {/* Data points for HDL */}
          {cholesterolData.map((point, i) => (
            <circle
              key={`hdl-${i}`}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - ((point.hdl / maxValue) * (graphHeight - 100))}
              r="4"
              fill="#10b981"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week} HDL: {point.hdl.toFixed(1)} mg/dL</title>
            </circle>
          ))}
        </svg>
        
        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">LDL Cholesterol</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">HDL Cholesterol</span>
          </div>
        </div>
      </div>
    );
  };

  const renderBPGraph = () => {
    const maxValue = 160;
    const minValue = 60;
    const graphHeight = 300;
    const graphWidth = 600;

    return (
      <div className="bg-white rounded-xl p-6 shadow-inner">
        <svg width={graphWidth} height={graphHeight} className="w-full">
          {/* Grid lines */}
          {[60, 80, 100, 120, 140, 160].map(value => (
            <g key={value}>
              <line
                x1={50}
                y1={graphHeight - 50 - (((value - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
                x2={graphWidth - 50}
                y2={graphHeight - 50 - (((value - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={40}
                y={graphHeight - 45 - (((value - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
                fontSize="12"
                fill="#6b7280"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          {/* Target lines */}
          <line
            x1={50}
            y1={graphHeight - 50 - (((125 - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
            x2={graphWidth - 50}
            y2={graphHeight - 50 - (((125 - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1={50}
            y1={graphHeight - 50 - (((80 - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
            x2={graphWidth - 50}
            y2={graphHeight - 50 - (((80 - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* X-axis labels */}
          {bpData.filter((_, i) => i % 4 === 0).map(point => (
            <text
              key={point.week}
              x={50 + ((point.week - 1) / 19) * (graphWidth - 100)}
              y={graphHeight - 20}
              fontSize="12"
              fill="#6b7280"
              textAnchor="middle"
            >
              W{point.week}
            </text>
          ))}

          {/* Systolic line */}
          <path
            d={`M ${bpData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - (((point.systolic - minValue) / (maxValue - minValue)) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Diastolic line */}
          <path
            d={`M ${bpData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - (((point.diastolic - minValue) / (maxValue - minValue)) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points for Systolic */}
          {bpData.map((point, i) => (
            <circle
              key={`sys-${i}`}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - (((point.systolic - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
              r="4"
              fill="#3b82f6"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week} Systolic: {point.systolic.toFixed(1)} mmHg</title>
            </circle>
          ))}

          {/* Data points for Diastolic */}
          {bpData.map((point, i) => (
            <circle
              key={`dia-${i}`}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - (((point.diastolic - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
              r="4"
              fill="#8b5cf6"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week} Diastolic: {point.diastolic.toFixed(1)} mmHg</title>
            </circle>
          ))}
        </svg>
        
        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Systolic BP</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Diastolic BP</span>
          </div>
        </div>
      </div>
    );
  };

  const renderHeartRateGraph = () => {
    const maxValue = 80;
    const minValue = 20;
    const graphHeight = 300;
    const graphWidth = 600;

    return (
      <div className="bg-white rounded-xl p-6 shadow-inner">
        <svg width={graphWidth} height={graphHeight} className="w-full">
          {/* Grid lines */}
          {[20, 30, 40, 50, 60, 70, 80].map(value => (
            <g key={value}>
              <line
                x1={50}
                y1={graphHeight - 50 - (((value - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
                x2={graphWidth - 50}
                y2={graphHeight - 50 - (((value - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={40}
                y={graphHeight - 45 - (((value - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
                fontSize="12"
                fill="#6b7280"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {heartRateData.filter((_, i) => i % 4 === 0).map(point => (
            <text
              key={point.week}
              x={50 + ((point.week - 1) / 19) * (graphWidth - 100)}
              y={graphHeight - 20}
              fontSize="12"
              fill="#6b7280"
              textAnchor="middle"
            >
              W{point.week}
            </text>
          ))}

          {/* Resting HR line */}
          <path
            d={`M ${heartRateData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - (((point.resting - minValue) / (maxValue - minValue)) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Recovery time line */}
          <path
            d={`M ${heartRateData.map((point, i) => 
              `${50 + (i / 19) * (graphWidth - 100)},${graphHeight - 50 - (((point.recovery - minValue) / (maxValue - minValue)) * (graphHeight - 100))}`
            ).join(' L ')}`}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points for Resting HR */}
          {heartRateData.map((point, i) => (
            <circle
              key={`resting-${i}`}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - (((point.resting - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
              r="4"
              fill="#10b981"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week} Resting HR: {point.resting.toFixed(1)} bpm</title>
            </circle>
          ))}

          {/* Data points for Recovery */}
          {heartRateData.map((point, i) => (
            <circle
              key={`recovery-${i}`}
              cx={50 + (i / 19) * (graphWidth - 100)}
              cy={graphHeight - 50 - (((point.recovery - minValue) / (maxValue - minValue)) * (graphHeight - 100))}
              r="4"
              fill="#f59e0b"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>Week {point.week} Recovery: {point.recovery.toFixed(1)} min</title>
            </circle>
          ))}
        </svg>
        
        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Resting Heart Rate (bpm)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Recovery Time (min)</span>
          </div>
        </div>
      </div>
    );
  };

  const getCurrentGraph = () => {
    switch (selectedMetric) {
      case 'cholesterol':
        return renderCholesterolGraph();
      case 'bp':
        return renderBPGraph();
      case 'heartrate':
        return renderHeartRateGraph();
      default:
        return renderWellnessGraph();
    }
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