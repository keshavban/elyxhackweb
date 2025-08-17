import React from 'react';
import { TrendingUp, TrendingDown, Heart, Activity, Moon, Droplets, Zap, Scale } from 'lucide-react';

interface HealthMetricsProps {
  currentWeek: number;
}

const HealthMetrics: React.FC<HealthMetricsProps> = ({ currentWeek }) => {
  const metrics = [
    {
      name: 'Energy Level',
      current: Math.min(85, 45 + (currentWeek * 3)),
      previous: Math.min(82, 42 + ((currentWeek - 1) * 3)),
      unit: '%',
      icon: Zap,
      color: 'from-amber-400 to-orange-500',
      trend: 'up'
    },
    {
      name: 'Sleep Quality',
      current: Math.min(92, 65 + (currentWeek * 2.5)),
      previous: Math.min(89, 62 + ((currentWeek - 1) * 2.5)),
      unit: '%',
      icon: Moon,
      color: 'from-indigo-400 to-purple-600',
      trend: 'up'
    },
    {
      name: 'Stress Level',
      current: Math.max(25, 85 - (currentWeek * 4)),
      previous: Math.max(28, 88 - ((currentWeek - 1) * 4)),
      unit: '%',
      icon: Activity,
      color: 'from-rose-400 to-red-500',
      trend: 'down'
    },
    {
      name: 'Cardiovascular Health',
      current: Math.min(88, 70 + (currentWeek * 1.5)),
      previous: Math.min(86, 68 + ((currentWeek - 1) * 1.5)),
      unit: '/100',
      icon: Heart,
      color: 'from-rose-400 to-pink-600',
      trend: 'up'
    },
    {
      name: 'Physical Activity',
      current: Math.min(78, 45 + (currentWeek * 3)),
      previous: Math.min(75, 42 + ((currentWeek - 1) * 3)),
      unit: 'min/day',
      icon: Activity,
      color: 'from-emerald-400 to-emerald-600',
      trend: 'up'
    },
    {
      name: 'Hydration',
      current: Math.min(95, 65 + (currentWeek * 2.8)),
      previous: Math.min(92, 62 + ((currentWeek - 1) * 2.8)),
      unit: '%',
      icon: Droplets,
      color: 'from-cyan-400 to-teal-600',
      trend: 'up'
    },
    {
      name: 'Weight Management',
      current: Math.max(72, 85 - (currentWeek * 1.2)),
      previous: Math.max(73, 86 - ((currentWeek - 1) * 1.2)),
      unit: 'kg',
      icon: Scale,
      color: 'from-slate-400 to-slate-600',
      trend: 'down'
    }
  ];

  const overallScore = Math.round(metrics.reduce((acc, metric) => acc + metric.current, 0) / metrics.length);

  // Special handling for stress level gauge
  const stressMetric = metrics.find(m => m.name === 'Stress Level');
  const getStressZone = (level: number) => {
    if (level <= 30) return { zone: 'Low', color: 'text-emerald-600', bgColor: 'bg-emerald-100', description: 'Calm and relaxed' };
    if (level <= 60) return { zone: 'Moderate', color: 'text-cyan-600', bgColor: 'bg-cyan-100', description: 'Some stress detected' };
    return { zone: 'High', color: 'text-red-600', bgColor: 'bg-red-100', description: 'Significant stress detected' };
  };

  const stressZone = stressMetric ? getStressZone(stressMetric.current) : null;

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent mb-4">
          Your Health Metrics
        </h1>
        <p className="text-xl text-slate-600">
          Track your progress across key health indicators - Week {currentWeek}
        </p>
      </div>

      {/* Overall Health Score */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Overall Health Score</h2>
        <div className="relative w-48 h-48 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${overallScore * 2.51}, 251`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {overallScore}
              </div>
              <div className="text-slate-600 text-sm">out of 100</div>
            </div>
          </div>
        </div>
        <p className="text-slate-600 mt-4">
          {overallScore >= 85 ? 'Excellent progress!' : overallScore >= 70 ? 'Good improvement!' : 'Keep building momentum!'}
        </p>
      </div>

      {/* Stress Level Gauge */}
      {stressMetric && stressZone && (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Real-Time Stress Monitor</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-32">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                {/* Background arc */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  stroke="#e2e8f0"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Green zone */}
                <path
                  d="M 20 80 A 80 80 0 0 1 73.2 20"
                  stroke="#059669"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Yellow zone */}
                <path
                  d="M 73.2 20 A 80 80 0 0 1 126.8 20"
                  stroke="#0891b2"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Red zone */}
                <path
                  d="M 126.8 20 A 80 80 0 0 1 180 80"
                  stroke="#dc2626"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Needle */}
                <g transform={`rotate(${(stressMetric.current / 100) * 160 - 80} 100 80)`}>
                  <line
                    x1="100"
                    y1="80"
                    x2="100"
                    y2="25"
                    stroke="#475569"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="80" r="6" fill="#475569" />
                </g>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${stressZone.bgColor} ${stressZone.color} font-semibold`}>
                  <span className="text-lg mr-2">{Math.round(stressMetric.current)}%</span>
                  <span>{stressZone.zone}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{stressZone.description}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-4">
            <span>Low (0-30%)</span>
            <span>Moderate (30-60%)</span>
            <span>High (60-100%)</span>
          </div>
        </div>
      )}

      {/* Individual Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const improvement = metric.current - metric.previous;
          const isImproving = (metric.trend === 'up' && improvement > 0) || (metric.trend === 'down' && improvement < 0);

          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color} text-white`}>
                  <Icon size={24} />
                </div>
                <div className={`flex items-center space-x-1 ${isImproving ? 'text-emerald-600' : 'text-red-600'}`}>
                  {isImproving ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="text-sm font-medium">
                    {Math.abs(improvement).toFixed(1)}
                  </span>
                </div>
              </div>
              
              <h3 className="font-bold text-slate-800 text-lg mb-2">{metric.name}</h3>
              
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-slate-800">
                  {metric.current.toFixed(1)}
                </span>
                <span className="text-slate-500">{metric.unit}</span>
              </div>
              
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${(metric.current / 100) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-slate-600 mt-2">
                {isImproving ? 'Improving steadily' : 'Needs attention'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Weekly Progress Chart */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Weekly Progress Trend</h2>
        <div className="space-y-4">
          {metrics.slice(0, 3).map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${metric.color} text-white`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-800">{metric.name}</span>
                    <span className="text-sm text-slate-600">
                      {metric.current.toFixed(1)} {metric.unit}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${(metric.current / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;