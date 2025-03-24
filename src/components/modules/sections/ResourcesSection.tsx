import React from 'react';
import { useLMS } from '../../../contexts/LMSContext';

interface ResourcesSectionProps {
  courseId: number;
  moduleIndex: number;
}

interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'article' | 'video' | 'book' | 'tool' | 'website';
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ courseId, moduleIndex }) => {
  const { courses, setActiveSection, markSectionComplete } = useLMS();
  
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[moduleIndex]) return null;
  
  const module = course.modules[moduleIndex];
  
  // Get resources from module data or use fallback resources
  const getResources = (): Resource[] => {
    // If we have resources in the module data, use them
    if (module.content?.resources) {
      try {
        // Try to parse JSON resources if available
        const parsedResources = JSON.parse(module.content.resources);
        if (Array.isArray(parsedResources)) {
          return parsedResources;
        }
      } catch (e) {
        // If not valid JSON, try to parse from newline-separated format
        return module.content.resources.split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            const parts = line.split('|').map(part => part.trim());
            return {
              title: parts[0] || 'Resource',
              description: parts[1] || 'Additional learning resource',
              url: parts[2] || '#',
              type: (parts[3] as Resource['type']) || 'article'
            };
          });
      }
    }
    
    // Otherwise use fallback resources based on module index
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return [
          {
            title: "The Floorbook Approach: An Introduction",
            description: "A comprehensive overview of the Floorbook Approach and its foundations in Inquiry-Based Learning.",
            url: "https://www.talkingandthinkingfloorbooks.com/what-are-floorbooks",
            type: "article"
          },
          {
            title: "Comparing Inquiry-Based and Teacher-Directed Approaches",
            description: "Research-based comparison of outcomes between IBL and traditional teaching methods.",
            url: "https://www.edutopia.org/article/inquiry-based-learning-teacher-guided-exploration",
            type: "article"
          },
          {
            title: "The Power of Documentation in Early Learning",
            description: "Video explaining how documentation supports and extends children's learning in IBL contexts.",
            url: "https://www.youtube.com/watch?v=OPzIiJIe-ug",
            type: "video"
          }
        ];
      } else if (moduleIndex === 1) {
        return [
          {
            title: "Challenging Assumptions in Early Childhood Education",
            description: "A thought-provoking article on examining and shifting core beliefs about children's capabilities.",
            url: "https://www.naeyc.org/resources/pubs/yc/mar2018/challenging-common-assumptions",
            type: "article"
          },
          {
            title: "The Image of the Child in Reggio Emilia",
            description: "Loris Malaguzzi's influential perspective on how our view of children shapes our educational approach.",
            url: "https://www.reggiochildren.it/en/reggio-emilia-approach/100-languages/",
            type: "website"
          },
          {
            title: "Mindsets in Education",
            description: "Carol Dweck explains how beliefs about learning impact educational outcomes.",
            url: "https://www.youtube.com/watch?v=isHM1rEd3GE",
            type: "video"
          }
        ];
      } else if (moduleIndex === 2) {
        return [
          {
            title: "The Art of Powerful Questions",
            description: "Guide to crafting questions that stimulate thinking and deepen inquiry.",
            url: "https://umanitoba.ca/admin/human_resources/change/media/the-art-of-powerful-questions.pdf",
            type: "article"
          },
          {
            title: "Wait Time: Research and Practice",
            description: "Research on the impact of increased wait time on student thinking and participation.",
            url: "https://www.edutopia.org/article/extending-silence",
            type: "article"
          },
          {
            title: "Active Listening in Educational Contexts",
            description: "Practical strategies for developing active listening skills with young learners.",
            url: "https://www.naeyc.org/resources/pubs/tyc/feb2018/learning-listen-listening-learn",
            type: "article"
          }
        ];
      } else {
        return [
          {
            title: "Nature as a Learning Environment",
            description: "Research on the benefits of outdoor learning for cognitive and social development.",
            url: "https://naturalstart.org/feature-stories/research-shows-benefits-outdoor-learning",
            type: "article"
          },
          {
            title: "Community as Curriculum",
            description: "Approaches to integrating community resources and expertise into learning experiences.",
            url: "https://www.edutopia.org/article/bringing-community-members-classroom",
            type: "article"
          },
          {
            title: "Inside-Outside-Beyond: Practical Implementation",
            description: "Video demonstration of a learning journey that connects indoor, outdoor, and community experiences.",
            url: "https://www.youtube.com/watch?v=1VHZzGHO6lA",
            type: "video"
          }
        ];
      }
    }
    
    // Default fallback resources
    return [
      {
        title: "Additional Learning Resource",
        description: "Explore this resource to deepen your understanding of the concepts covered in this module.",
        url: "#",
        type: "article"
      }
    ];
  };
  
  const resources = getResources();
  
  // Get resource type icon based on resource type
  const getResourceTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'article':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'book':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'tool':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'website':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
    }
  };
  
  const handleContinue = () => {
    markSectionComplete(courseId, moduleIndex, 'resourcesCompleted');
    setActiveSection('practical activity');
  };
  
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <p className="text-gray-600 mb-6">
            {module.content?.resourcesIntro || 
              "Explore these resources to deepen your understanding of the concepts covered in this module."}
          </p>
          
          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md flex">
                <div className="mr-4 flex-shrink-0">
                  {getResourceTypeIcon(resource.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {resource.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="capitalize">{resource.type}</span>
                    <span className="mx-2">•</span>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 flex items-center"
                    >
                      View Resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">How to Use These Resources</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Choose 1-2 resources that are most relevant to your current practice and focus on those first.</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Take notes as you explore each resource, connecting the ideas to your specific context.</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Bookmark these resources for future reference as you implement the practices in your setting.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleContinue}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center"
        >
          Next: Practical Activity
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ResourcesSection;
