
import React from 'react';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { SkillProgress } from '../../types';
import { useThemeStore } from '../../store/themeStore';

interface SkillRadarChartProps {
  data: SkillProgress[];
}

const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ data }) => {
  const { theme } = useThemeStore();
  const tickColor = theme === 'dark' ? '#E2E8F0' : '#1E293B'; // text-dark-main / text-light-main
  const radarColor = theme === 'dark' ? '#38BDF8' : '#0284c7'; // accent-sky / sky-600

  const chartData = data.map(skill => ({
    subject: skill.skillName,
    A: skill.level, // User's level
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid stroke={theme === 'dark' ? '#374151' : '#D1D5DB'} /> {/* gray-700 / gray-300 */}
        <PolarAngleAxis dataKey="subject" tick={{ fill: tickColor, fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: tickColor, fontSize: 10 }} />
        <Radar name="Tu Nivel" dataKey="A" stroke={radarColor} fill={radarColor} fillOpacity={0.6} />
        <Legend wrapperStyle={{ color: tickColor }} />
        <Tooltip
            contentStyle={{
                backgroundColor: theme === 'dark' ? '#1E293B' : '#FFFFFF', // secondary-dark / white
                borderColor: theme === 'dark' ? '#374151' : '#D1D5DB', // gray-700 / gray-300
                color: tickColor
            }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart;
