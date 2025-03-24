import React from 'react';
import { useLMS } from '../../../contexts/LMSContext';

interface PracticalActivitySectionProps {
  courseId: number;
  moduleIndex: number;
}

const PracticalActivitySection: React.FC<PracticalActivitySectionProps> = ({ courseId, moduleIndex }) => {
  const { courses, setActiveSection, markSectionComplete } = useLMS();
  
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[moduleIndex]) return null;
  
  const module = course.modules[moduleIndex];
  
  // Get practical activity content from module data or use fallback content
  const getActivityData = () => {
    // If we have practical activity content in the module data, use it
    if (module.content?.practicalActivity) {
      return {
        title: module.content.practicalActivityTitle || `Applying ${module.title}`,
        description: module.content.practicalActivityDescription || "This activity will help you apply the concepts from this module in your educational setting.",
        materials: module.content.practicalActivityMaterials || ["Notebook or digital document", "Camera or device for documentation"],
        steps: module.content.practicalActivity.split('\n').filter(step => step.trim() !== '')
      };
    }
    
    // Otherwise use fallback activities based on module index
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return {
          title: "Comparing IBL and Me-BL Approaches",
          description: "This activity will help you identify elements of both Inquiry-Based Learning and Me-Based Learning in your current practice, and plan for intentional shifts toward IBL.",
          materials: [
            "Notebook or digital document",
            "Teaching plans from the past week",
            "Camera or device for documentation"
          ],
          steps: [
            "Review your teaching plans from the past week and identify 3 examples of Me-BL approaches (where you directed the learning) and 3 examples of IBL approaches (where children's interests or questions drove the learning).",
            "For each Me-BL example, brainstorm how you could transform it into an IBL opportunity. What questions might you ask? How might you document children's thinking?",
            "Choose one activity for the coming week that you typically approach from a Me-BL perspective. Redesign it using IBL principles.",
            "Implement your redesigned activity and document what happens using photos, notes, or audio recordings.",
            "Reflect on the differences you observed in children's engagement and learning between the original and redesigned approaches."
          ]
        };
      } else if (moduleIndex === 1) {
        return {
          title: "Examining Your Educational Beliefs",
          description: "This activity guides you through a process of identifying and potentially shifting your core beliefs about teaching and learning to align with IBL principles.",
          materials: [
            "Notebook or digital document",
            "Quiet space for reflection",
            "Optional: colleague for discussion"
          ],
          steps: [
            "Complete the belief statements below by writing your honest response to each prompt:",
            "• I believe children learn best when...",
            "• I believe my role as an educator is to...",
            "• I believe the learning environment should...",
            "• I believe curriculum should be...",
            "• I believe assessment and documentation should...",
            "Review your statements and identify which ones align with IBL principles and which ones might reflect Me-BL thinking.",
            "For any beliefs that lean toward Me-BL approaches, draft an alternative belief statement that would better support IBL.",
            "Identify one belief you want to shift in your practice. Create a concrete action plan with 3 specific steps you'll take in the next week to align your practice with this new belief.",
            "After implementing your action plan, document the impact on children's learning experiences."
          ]
        };
      } else if (moduleIndex === 2) {
        return {
          title: "Developing Your IBL Skills Toolkit",
          description: "This activity focuses on strengthening two essential skills for IBL facilitation: active listening and open-ended questioning.",
          materials: [
            "Recording device (audio or video)",
            "Notebook for documentation",
            "Timer or stopwatch",
            "Optional: colleague for observation"
          ],
          steps: [
            "Select a small group activity where you'll interact with children (3-5 children is ideal).",
            "Set up a recording device to capture your interactions, or ask a colleague to observe and take notes.",
            "During the activity, practice these specific skills:",
            "• Wait Time: After asking a question, silently count to 5 before speaking again",
            "• Open Questions: Use questions that begin with 'what if,' 'how might,' 'what do you notice,' or 'I wonder...'",
            "• Active Listening: Respond to children by paraphrasing their ideas before adding your own thoughts",
            "Review your recording or observation notes. Count how many times you used each skill successfully.",
            "Identify moments where you reverted to closed questions or didn't allow sufficient wait time.",
            "Plan how you'll incorporate these skills more consistently in your daily interactions.",
            "Practice again within the next few days, comparing your improvement."
          ]
        };
      } else {
        return {
          title: "Connecting Inside, Outside, and Beyond",
          description: "This activity helps you design an integrated learning experience that flows between indoor spaces, outdoor environments, and community connections.",
          materials: [
            "Floor book or documentation panels",
            "Camera for documentation",
            "Natural materials from your environment",
            "List of community resources/experts"
          ],
          steps: [
            "Observe children's current interests and questions. Select one that has potential for exploration across different environments.",
            "Design a provocation that could be placed in both indoor and outdoor spaces related to this interest. Document children's initial responses in a floor book.",
            "Identify ways to extend the investigation outdoors if it begins inside, or bring elements indoors if it begins outside. How might the change in environment deepen the inquiry?",
            "Research at least one community connection (a person, place, or resource) that could further enrich this investigation. Make a concrete plan to incorporate this 'beyond' element.",
            "Implement your integrated investigation over at least one week, ensuring the floor book travels between spaces to maintain continuity.",
            "Document how children's thinking develops differently in each environment and how the connections between spaces enhance learning."
          ]
        };
      }
    }
    
    // Default fallback activity
    return {
      title: `Applying ${module.title}`,
      description: "This activity will help you apply the concepts from this module in your educational setting.",
      materials: ["Notebook or digital document", "Camera or device for documentation"],
      steps: [
        "Review the key concepts from this module and identify one that you would like to implement in your practice.",
        "Plan a specific activity or approach that incorporates this concept.",
        "Implement your plan and document the process and outcomes.",
        "Reflect on what worked well and what you might change next time."
      ]
    };
  };
  
  const activityData = getActivityData();
  
  // Generate implementation tips based on the module
  const getImplementationTips = () => {
    const commonTips = [
      "Start small—implement one aspect of this activity rather than trying to change everything at once.",
      "Document your process—take 'before and after' notes to track the impact of your changes.",
      "Share your experience with a colleague—discussing your insights can deepen your learning."
    ];
    
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return [
          ...commonTips,
          "Remember that shifting from Me-BL to IBL is a journey—celebrate small successes along the way."
        ];
      } else if (moduleIndex === 1) {
        return [
          ...commonTips,
          "Be patient with yourself—changing deeply held beliefs takes time and reflection."
        ];
      } else if (moduleIndex === 2) {
        return [
          ...commonTips,
          "Practice these skills in everyday conversations, not just during planned activities."
        ];
      } else if (moduleIndex === 3) {
        return [
          ...commonTips,
          "Consider the unique opportunities and challenges of your specific environment when adapting these ideas."
        ];
      }
    }
    
    return commonTips;
  };
  
  const implementationTips = getImplementationTips();
  
  const handleContinue = () => {
    markSectionComplete(courseId, moduleIndex, 'practicalActivityCompleted');
    setActiveSection('reflection');
  };
  
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Practical Activity: {activityData.title}</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <p className="text-gray-600 mb-6">{activityData.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Materials Needed:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {activityData.materials.map((material, index) => (
                <li key={index} className="text-gray-700">{material}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Activity Steps:</h3>
            <ol className="list-decimal pl-5 space-y-3">
              {activityData.steps.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Implementation Tips</h3>
          <ul className="space-y-2">
            {implementationTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleContinue}
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors duration-300 flex items-center"
        >
          Next: Reflection
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default PracticalActivitySection;
