import React from 'react';

interface ProgressBarProps {
  progress: number;
  height?: number;
  showLabel?: boolean;
  color?: string;
  labelPosition?: 'top' | 'right' | 'inside';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 8,
  showLabel = true,
  color = 'indigo',
  labelPosition = 'right',
  className = '',
}) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  
  // Color classes based on the color prop
  const colorClasses: Record<string, string> = {
    indigo: 'bg-indigo-600',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    gray: 'bg-gray-500',
  };
  
  const barColor = colorClasses[color] || colorClasses.indigo;
  
  // Render label based on position
  const renderLabel = () => {
    if (!showLabel) return null;
    
    const label = `${Math.round(normalizedProgress)}%`;
    
    switch (labelPosition) {
      case 'top':
        return <div className="text-xs font-medium text-gray-600 mb-1">{label}</div>;
      case 'right':
        return <div className="ml-2 text-xs font-medium text-gray-600">{label}</div>;
      case 'inside':
        return (
          <div 
            className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
            style={{ opacity: normalizedProgress > 30 ? 1 : 0 }}
          >
            {label}
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      {labelPosition === 'top' && renderLabel()}
      <div className="flex-grow relative">
        <div 
          className="w-full bg-gray-200 rounded-full overflow-hidden"
          style={{ height: `${height}px` }}
        >
          <div 
            className={`${barColor} rounded-full transition-all duration-300 ease-in-out`}
            style={{ 
              width: `${normalizedProgress}%`,
              height: `${height}px` 
            }}
          ></div>
          {labelPosition === 'inside' && renderLabel()}
        </div>
      </div>
      {labelPosition === 'right' && renderLabel()}
    </div>
  );
};

export default ProgressBar;
