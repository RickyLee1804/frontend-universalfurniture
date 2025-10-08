import React from 'react';
import { Package, TrendingUp, TrendingDown } from 'lucide-react';
import './Cardstat.css';

const CardStat = ({ 
  title, 
  value, 
  trend, 
  percentage, 
  period, 
  icon, 
  bgColor 
}) => {
  
  // Icon Component
  const getIconComponent = (iconType) => {
    switch(iconType) {
      case 'package':
        return Package;
      default:
        return Package;
    }
  };

  const IconComponent = getIconComponent(icon);

  // Trend Icon
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trend === 'up' ? 'trend-up' : 'trend-down';

  return (
    <div className="card-stat">
      <div className="card-stat-content">
        <div className="card-stat-info">
          <p className="card-stat-title">{title}</p>
          <p className="card-stat-value">{value}</p>
          <div className="card-stat-trend">
            <TrendIcon className={`trend-icon ${trendColor}`} />
            <span className={`trend-percentage ${trendColor}`}>
              {percentage}
            </span>
            <span className="trend-period">{period}</span>
          </div>
        </div>
        <div className={`card-stat-icon-bg ${bgColor}`}>
          <IconComponent className="card-stat-icon" />
        </div>
      </div>
    </div>
  );
};

export default CardStat;