import React, { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Calendar,
  Users,
  Zap,
} from "lucide-react";

interface Link {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  links?: Link[];
  features?: string[];
  challenges?: string[];
  duration?: string;
  team?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const iconForLabel = (label: string) => {
  switch (label.toLowerCase()) {
    case "github":
      return <Github size={16} className="mr-1" />;
    case "drive":
    case "collab":
      return <ExternalLink size={16} className="mr-1" />;
    case "live demo":
      return <ExternalLink size={16} className="mr-1" />;
    default:
      return <ExternalLink size={16} className="mr-1" />;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (isExpanded && cardRef.current) {
      const el = document.getElementById(`projects`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => window.scrollBy(0, -0), 300);
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-600/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="mb-6 space-y-4 animate-fade-in">
            {project.fullDescription && (
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {project.features && (
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2 flex items-center">
                  <Zap size={18} className="mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  Technical Challenges
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(project.duration || project.team) && (
              <div className="flex gap-6 pt-2">
                {project.duration && (
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2 text-purple-400" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center text-gray-400">
                    <Users size={16} className="mr-2 text-purple-400" />
                    <span className="text-sm">{project.team}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {project.links && project.links.length > 0 ? (
            project.links.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium group/link"
              >
                {iconForLabel(label)}
                {label}
              </a>
            ))
          ) : (
            <span className="text-gray-500 italic">No links available</span>
          )}

          {/* Expand/Collapse Button */}
          {(project.fullDescription ||
            project.features ||
            project.challenges) && (
            <button
              onClick={handleToggle}
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
            >
              {isExpanded ? (
                <>
                  Less <ChevronUp size={16} className="ml-1" />
                </>
              ) : (
                <>
                  More <ChevronDown size={16} className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
