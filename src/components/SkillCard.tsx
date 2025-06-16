import { LucideIcon } from "lucide-react";
import React from "react";

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon: Icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-center mb-4">
        <Icon
          className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300"
          size={24}
        />
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
// if you want replace level by starts uncode below and incode the code in skills.ts file
/*
import React from 'react';
import { Star } from 'lucide-react';

interface SkillCardProps {
  name: string;
  rating: number; // 1–5
  icon: React.ElementType;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, rating, icon: Icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-center mb-4">
        <Icon className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>

      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

*/
