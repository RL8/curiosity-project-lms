import React, { useState } from 'react';

interface Resource {
  id: number;
  title: string;
  type: 'pdf' | 'video' | 'article' | 'template';
  description: string;
  url: string;
}

interface ResourcesSectionProps {
  moduleIndex: number;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ moduleIndex }) => {
  const [activeTab, setActiveTab] = useState<'resources' | 'downloads'>('resources');
  
  // Generate resources based on module index
  const getResources = (): Resource[] => {
    const commonResources: Resource[] = [
      {
        id: 1,
        title: 'Floorbook Template',
        type: 'template',
        description: 'A printable template for creating your own floor books.',
        url: '#'
      },
      {
        id: 2,
        title: 'Documentation Guide',
        type: 'pdf',
        description: 'A comprehensive guide to documenting children\'s learning.',
        url: '#'
      }
    ];
    
    const moduleSpecificResources: Record<number, Resource[]> = {
      0: [
        {
          id: 101,
          title: 'IBL vs Me-BL Comparison Chart',
          type: 'pdf',
          description: 'A detailed comparison of Inquiry-Based Learning and Me-Based Learning approaches.',
          url: '#'
        },
        {
          id: 102,
          title: 'Introduction to the Floorbook Approach',
          type: 'video',
          description: 'Dr. Claire Warden explains the philosophy behind the Floorbook Approach.',
          url: '#'
        }
      ],
      1: [
        {
          id: 201,
          title: 'Beliefs About Children\'s Capabilities',
          type: 'article',
          description: 'Research on how educator beliefs impact children\'s learning outcomes.',
          url: '#'
        },
        {
          id: 202,
          title: 'Shifting Your Mindset',
          type: 'pdf',
          description: 'A reflective tool for examining and shifting your educational beliefs.',
          url: '#'
        }
      ],
      2: [
        {
          id: 301,
          title: 'Active Listening Techniques',
          type: 'pdf',
          description: 'Practical strategies for improving your active listening skills.',
          url: '#'
        },
        {
          id: 302,
          title: 'Open-Ended Questions Bank',
          type: 'pdf',
          description: 'A collection of open-ended questions to use in different learning contexts.',
          url: '#'
        }
      ],
      3: [
        {
          id: 401,
          title: 'Inside-Outside-Beyond Planning Template',
          type: 'template',
          description: 'A template for planning integrated learning experiences across different environments.',
          url: '#'
        },
        {
          id: 402,
          title: 'Outdoor Learning Environments',
          type: 'video',
          description: 'Examples of effective outdoor learning spaces that support inquiry.',
          url: '#'
        }
      ]
    };
    
    return [...commonResources, ...(moduleSpecificResources[moduleIndex] || [])];
  };
  
  const resources = getResources();
  
  // Filter resources by type for the downloads tab
  const downloads = resources.filter(r => r.type === 'pdf' || r.type === 'template');
  
  const getIconForType = (type: string) => {
    switch(type) {
      case 'pdf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'article':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'template':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Additional Resources</h2>
      
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('resources')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'resources'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'downloads'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Downloads
          </button>
        </nav>
      </div>
      
      <div className="space-y-4">
        {(activeTab === 'resources' ? resources : downloads).map(resource => (
          <div key={resource.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex-shrink-0 mr-4">
              {getIconForType(resource.type)}
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">{resource.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
            </div>
            <a 
              href={resource.url} 
              className="ml-4 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium hover:bg-indigo-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.type === 'video' ? 'Watch' : 'Download'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
