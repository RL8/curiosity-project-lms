import React from 'react';
import { useLMS } from '../../../contexts/LMSContext';

interface KeyConceptsSectionProps {
  courseId: number;
  moduleIndex: number;
}

const KeyConceptsSection: React.FC<KeyConceptsSectionProps> = ({ courseId, moduleIndex }) => {
  const { courses, setActiveSection, markSectionComplete } = useLMS();
  
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[moduleIndex]) return null;
  
  const module = course.modules[moduleIndex];
  
  // Generate key concepts based on module content or fallback to predefined concepts
  const getKeyConcepts = () => {
    // If we have theory content, generate concepts from it
    if (module.content?.theory) {
      const theoryText = module.content.theory;
      
      // For Course 1, Module 1 (IBL vs Me-BL)
      if (courseId === 1 && moduleIndex === 0) {
        return [
          {
            title: "Inquiry-Based Learning (IBL)",
            description: "A pedagogical approach where learning is driven by questions, problems, or scenarios rather than by direct instruction. Learners identify issues, formulate questions, investigate, and build new understandings.",
            icon: "lightbulb"
          },
          {
            title: "Me-Based Learning (Me-BL)",
            description: "A traditional approach where the educator controls the learning process, determining what, when, and how children learn. The focus is on delivering predetermined content rather than following children's interests.",
            icon: "user"
          },
          {
            title: "Learning Environment Types",
            description: "The four different types of learning environments as defined by Claxton and Carr (2004), which impact the quality and use of the Floorbook.",
            icon: "book-open"
          }
        ];
      }
      
      // For Course 1, Module 2 (Beliefs of an IBL educator)
      else if (courseId === 1 && moduleIndex === 1) {
        return [
          {
            title: "Child-Centered Approach",
            description: "The belief that children are capable, competent learners who should be active participants in their own learning journey.",
            icon: "child"
          },
          {
            title: "Educator as Facilitator",
            description: "The belief that educators should facilitate learning rather than direct it, supporting children's inquiries and helping them develop their thinking.",
            icon: "user-tie"
          },
          {
            title: "Learning Environment",
            description: "The belief that the environment plays a crucial role in supporting inquiry and should be designed to encourage exploration and discovery.",
            icon: "home"
          },
          {
            title: "Curriculum & Accountability",
            description: "The belief that curriculum should be flexible and responsive to children's interests, with accountability focused on documenting the learning process.",
            icon: "clipboard"
          }
        ];
      }
      
      // For Course 1, Module 3 (Skills of an IBL educator)
      else if (courseId === 1 && moduleIndex === 2) {
        return [
          {
            title: "Active Listening",
            description: "The ability to fully concentrate on what children are saying, understand their message, and respond thoughtfully.",
            icon: "ear"
          },
          {
            title: "Open-Ended Questioning",
            description: "The skill of asking questions that encourage exploration, critical thinking, and multiple possible answers rather than simple yes/no responses.",
            icon: "question"
          },
          {
            title: "Observation & Documentation",
            description: "The practice of carefully observing children's learning processes and making them visible through various media including Floorbooks.",
            icon: "clipboard"
          },
          {
            title: "Flexibility & Creativity",
            description: "The ability to adapt to children's changing interests and needs, and to find creative ways to support their learning journeys.",
            icon: "lightbulb"
          }
        ];
      }
      
      // For Course 1, Module 4 (Practical implementation)
      else if (courseId === 1 && moduleIndex === 3) {
        return [
          {
            title: "Equity in Learning",
            description: "Ensuring that all children have equal opportunities to participate and contribute, regardless of their learning style or background.",
            icon: "balance-scale"
          },
          {
            title: "Power Dynamics",
            description: "Understanding and addressing power imbalances in the learning environment to create a more democratic and inclusive space.",
            icon: "users"
          },
          {
            title: "Reflective Practice",
            description: "Continuously reflecting on and evaluating your teaching approach to ensure it aligns with IBL principles.",
            icon: "sync"
          },
          {
            title: "Practical Application",
            description: "Implementing IBL principles in real educational settings, adapting them to your specific context and children's needs.",
            icon: "tools"
          }
        ];
      }
    }
    
    // Default fallback concepts if no specific content is available
    return [
      {
        title: "Key Concept 1",
        description: "An important principle or idea related to this module's content.",
        icon: "lightbulb"
      },
      {
        title: "Key Concept 2",
        description: "Another significant aspect of the learning in this module.",
        icon: "book-open"
      },
      {
        title: "Key Concept 3",
        description: "A third essential element to understand for mastering this module's content.",
        icon: "users"
      }
    ];
  };
  
  const keyConcepts = getKeyConcepts();
  
  const handleContinue = () => {
    markSectionComplete(courseId, moduleIndex, 'keyConceptsCompleted');
    setActiveSection('case study');
  };
  
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'lightbulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
        );
      case 'user':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        );
      case 'book-open':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        );
      case 'child':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        );
      case 'user-tie':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M9 12a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case 'clipboard':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        );
      case 'question':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        );
      case 'tools':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
    }
  };
  
  // Get a reflection question based on the module
  const getReflectionQuestion = () => {
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return "How do your current teaching practices align with IBL or Me-BL approaches? Identify one area where you see potential for growth in your approach.";
      } else if (moduleIndex === 1) {
        return "Which of the IBL educator beliefs resonates most strongly with you, and which might challenge your current practice?";
      } else if (moduleIndex === 2) {
        return "Which of the IBL skills do you feel most confident in, and which would you like to develop further?";
      } else if (moduleIndex === 3) {
        return "How might you address power dynamics and equity issues in your educational setting using the Floorbook Approach?";
      }
    }
    
    return "How do these key concepts compare to your current understanding and practice? Identify one area where you see potential for growth in your approach.";
  };
  
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Key Concepts</h2>
        <p className="text-gray-600 mb-6">
          These core concepts form the foundation of this module. Understanding these will help you 
          apply the Floorbook Approach effectively in your practice.
        </p>
        
        {module.content?.theory && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 prose">
            <h3 className="text-md font-semibold">Theory Overview</h3>
            <p>{module.content.theory}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {keyConcepts.map((concept, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                {renderIcon(concept.icon)}
                <h3 className="font-bold text-lg ml-3">{concept.title}</h3>
              </div>
              <p className="text-gray-600">{concept.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {module.content?.interactiveExercise && (
        <div className="bg-indigo-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Interactive Exercise</h3>
          <p className="mb-4">{module.content.interactiveExercise}</p>
        </div>
      )}
      
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Reflection Question</h3>
        <p className="italic mb-4">"{getReflectionQuestion()}"</p>
        <p className="text-sm text-gray-600">
          Take a moment to reflect on this question before continuing. You may want to jot down your 
          thoughts in a personal journal to track your learning journey.
        </p>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleContinue}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center"
        >
          Next: Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default KeyConceptsSection;
