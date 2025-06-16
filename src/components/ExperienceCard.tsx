import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-white font-medium">{experience.company}</p>
        </div>
        <div className="flex items-center text-gray-400 mt-2 md:mt-0">
          <Calendar size={16} className="mr-2 text-purple-400" />
          <span className="font-medium">{experience.period}</span>
        </div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {experience.achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            <Award size={14} className="mr-2 text-purple-400 flex-shrink-0" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;