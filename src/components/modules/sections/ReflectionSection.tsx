import React, { useState } from 'react';
import { useLMS } from '../../../contexts/LMSContext';

interface ReflectionSectionProps {
  courseId: number;
  moduleIndex: number;
}

const ReflectionSection: React.FC<ReflectionSectionProps> = ({ courseId, moduleIndex }) => {
  const { courses, setActiveView, markSectionComplete } = useLMS();
  const [reflectionCompleted, setReflectionCompleted] = useState(false);
  
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[moduleIndex]) return null;
  
  const module = course.modules[moduleIndex];
  
  // Get reflection prompts from module data or use fallback prompts
  const getReflectionPrompts = () => {
    // If we have reflection prompts in the module data, use them
    if (module.content?.reflectionPrompts) {
      return module.content.reflectionPrompts.split('\n')
        .filter(prompt => prompt.trim() !== '')
        .map(prompt => prompt.trim());
    }
    
    // Otherwise use fallback prompts based on module index
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return [
          "How has your understanding of Inquiry-Based Learning versus Me-Based Learning changed after completing this module?",
          "What specific elements of the Floorbook Approach do you find most relevant to your current teaching context?",
          "What is one concrete step you can take in the next week to shift your practice more toward IBL principles?"
        ];
      } else if (moduleIndex === 1) {
        return [
          "Which of the core beliefs discussed in this module most challenged your current thinking about teaching and learning?",
          "How might shifting your beliefs about children's capabilities change your daily interactions and planning?",
          "What support or resources will you need to align your practice more fully with IBL beliefs?"
        ];
      } else if (moduleIndex === 2) {
        return [
          "Which of the IBL skills presented in this module do you feel most confident in, and which would you like to develop further?",
          "How might strengthening your skills in active listening and open-ended questioning change the quality of learning in your setting?",
          "What strategies will you use to continue developing these skills after completing this module?"
        ];
      } else if (moduleIndex === 3) {
        return [
          "How might you better integrate indoor and outdoor learning experiences in your setting?",
          "What community connections ('beyond' experiences) could enrich your current curriculum?",
          "What barriers might you face in implementing Inside-Outside-Beyond approaches, and how might you address them?"
        ];
      }
    }
    
    // Default fallback prompts
    return [
      `What are your key takeaways from the ${module.title} module?`,
      "How do you plan to implement what you've learned in your educational setting?",
      "What challenges do you anticipate, and how might you address them?"
    ];
  };
  
  const reflectionPrompts = getReflectionPrompts();
  
  // Get next steps based on the module
  const getNextSteps = () => {
    // If we have next steps in the module data, use them
    if (module.content?.nextSteps) {
      return module.content.nextSteps.split('\n')
        .filter(step => step.trim() !== '')
        .map(step => step.trim());
    }
    
    // Common next steps for all modules
    const commonSteps = [
      "Share your key insights with a colleague or learning community",
      "Create an action plan with 2-3 concrete steps to implement what you've learned",
      "Schedule a follow-up reflection in 2-4 weeks to assess your implementation progress"
    ];
    
    // Module-specific additional steps
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return [
          ...commonSteps,
          "Document examples of IBL in your practice to build a portfolio of evidence"
        ];
      } else if (moduleIndex === 1) {
        return [
          ...commonSteps,
          "Review your belief statements regularly and note how they evolve over time"
        ];
      } else if (moduleIndex === 2) {
        return [
          ...commonSteps,
          "Create a personal checklist of IBL skills to practice each week"
        ];
      } else if (moduleIndex === 3) {
        return [
          ...commonSteps,
          "Map potential community connections that could enhance your curriculum"
        ];
      }
    }
    
    return commonSteps;
  };
  
  const nextSteps = getNextSteps();
  
  const handleComplete = () => {
    markSectionComplete(courseId, moduleIndex, 'reflectionCompleted');
    setReflectionCompleted(true);
  };
  
  const handleReturnToDashboard = () => {
    setActiveView('main');
  };
  
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Module Reflection</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <p className="text-gray-600 mb-6">
            {module.content?.reflectionIntro || 
              "Take some time to reflect on what you've learned in this module. These reflection questions will help you consolidate your learning and plan for implementation in your practice."}
          </p>
          
          <div className="space-y-6">
            {reflectionPrompts.map((prompt, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-md">
                <h3 className="font-semibold text-purple-800 mb-2">Reflection Prompt {index + 1}</h3>
                <p className="text-gray-700 italic">{prompt}</p>
                <div className="mt-3">
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={4}
                    placeholder="Your reflection..."
                  ></textarea>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
          <p className="mb-4">
            {module.content?.nextStepsIntro || 
              "To deepen your learning from this module, consider these follow-up actions:"}
          </p>
          <ul className="space-y-2">
            {nextSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end space-x-4">
        {!reflectionCompleted ? (
          <button 
            onClick={handleComplete}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Mark Module Complete
          </button>
        ) : (
          <button 
            onClick={handleReturnToDashboard}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center"
          >
            Return to Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default ReflectionSection;
