import React from 'react';
import { useLMS } from '../../../contexts/LMSContext';

interface CaseStudySectionProps {
  courseId: number;
  moduleIndex: number;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ courseId, moduleIndex }) => {
  const { courses, setActiveSection, markSectionComplete } = useLMS();
  
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[moduleIndex]) return null;
  
  const module = course.modules[moduleIndex];
  
  // Get case study content from module data or use fallback content
  const getCaseStudyData = () => {
    // If we have case study content in the module data, use it
    if (module.content?.caseStudy) {
      return {
        title: module.content.caseStudyTitle || `Case Study: ${module.title}`,
        content: module.content.caseStudy,
        reflection: module.content.caseStudyReflection || "How might the principles demonstrated in this case study apply to your own context?"
      };
    }
    
    // Otherwise use fallback case studies based on module index
    if (courseId === 1) {
      if (moduleIndex === 0) {
        return {
          title: "Transforming Practice: Sunshine Preschool",
          content: `The team at Sunshine Preschool had been using a traditional curriculum approach for years. 
          Each week, the lead teacher would select a theme and plan activities around it. Children rotated through centers, 
          completing predetermined crafts and worksheets.
          
          After attending a Floorbook Approach workshop, the director decided to pilot a transformation in one classroom. 
          The educators removed most of the themed decorations and created neutral spaces with natural materials. 
          Instead of announcing "This week we're learning about butterflies," they observed the children's interests.
          
          When several children became fascinated with shadows on the playground, educators brought out flashlights, 
          set up a light table, and introduced shadow puppets. They documented children's questions in a large floor book: 
          "Why do shadows follow us?" "How can we make our shadows bigger?" "Can shadows have colors?"
          
          The educators researched alongside the children, co-constructing knowledge rather than delivering facts. 
          They invited a local puppeteer to demonstrate shadow puppetry, and families contributed materials for a shadow 
          investigation station. The project evolved over three weeks, far longer than their typical one-week themes, 
          allowing for deeper learning.
          
          Parents initially questioned the lack of take-home crafts but became enthusiastic supporters after seeing 
          documentation of their children's complex thinking and problem-solving in the floor books.`,
          reflection: "What specific shifts did the Sunshine Preschool team make in moving from Me-BL to IBL? How did these changes impact the depth of children's learning?"
        };
      } else if (moduleIndex === 1) {
        return {
          title: "Belief in Action: Woodland Elementary",
          content: `At Woodland Elementary, first-grade teacher Ms. Rivera was known for her structured classroom. 
          Her beliefs about education were rooted in her own schooling: children need clear direction, educators must maintain 
          control, and learning follows a predictable sequence.
          
          During a professional development series on the Floorbook Approach, Ms. Rivera began questioning these beliefs. 
          She was particularly struck by the concept of children as protagonists in their own learning. 
          
          She decided to experiment with a small shift: introducing a "Wonder Wall" where children could post questions 
          they were curious about. Initially, she planned to use these questions for Friday afternoon discussions only, 
          keeping her regular curriculum intact.
          
          The children's questions surprised her with their depth: "Why do leaves change colors but pine needles don't?" 
          "How do birds know which way is south?" "Why does the moon follow us when we drive?"
          
          Ms. Rivera realized these questions connected to her required science standards about seasonal changes and 
          could actually drive her curriculum rather than being an add-on. She introduced a floor book to document their 
          investigations and began planning based on the children's questions while still addressing curriculum requirements.
          
          As she shifted her beliefs about children's capabilities, she noticed her classroom management became easier. 
          Children were more engaged and self-directed when pursuing their own questions. By year-end, her students 
          demonstrated deeper scientific thinking than previous classes, and she had transformed her belief system about 
          teaching and learning.`,
          reflection: "How did Ms. Rivera's changing beliefs about children's capabilities influence her teaching practices? What evidence showed that this shift positively impacted learning?"
        };
      } else if (moduleIndex === 2) {
        return {
          title: "Skills in Practice: Riverdale Child Care Center",
          content: `The team at Riverdale Child Care Center prided themselves on their child-centered approach. 
          However, director Amara noticed that while educators claimed to value children's ideas, their interactions often 
          shut down rather than extended thinking.
          
          Amara arranged for the team to focus on developing two key IBL skills: active listening and open-ended questioning. 
          They videotaped their interactions with children and analyzed them in team meetings, noting how often they:
          - Interrupted children before they finished speaking
          - Asked questions with predetermined answers
          - Missed opportunities to extend children's thinking
          
          The team practiced reformulating closed questions into open ones:
          Instead of: "What color is this leaf?" (closed)
          They tried: "What do you notice about this leaf?" (open)
          
          Instead of: "Is this floating or sinking?" (closed)
          They tried: "What's happening to this object in water?" (open)
          
          They also practiced waiting at least 5 seconds after asking a question before speaking again, giving children 
          time to think deeply.
          
          After six weeks of deliberate practice, the quality of conversations transformed. Children spoke in longer 
          sentences, proposed more complex ideas, and engaged in sustained investigations. The educators documented 
          these rich conversations in floor books, creating visible evidence of their improved skills.
          
          Amara noted that the most significant change was in how educators viewed their role—shifting from being 
          "information providers" to "co-researchers" alongside children.`,
          reflection: "How did the educators' practice of specific skills change the quality of learning experiences? Which skill do you think had the most impact, and why?"
        };
      } else {
        return {
          title: "Inside, Outside, Beyond: Hillside Learning Community",
          content: `Hillside Learning Community served children ages 3-8 in a converted farmhouse with extensive grounds. 
          While they had beautiful indoor and outdoor spaces, educators tended to keep these experiences separate: 
          "academic" learning happened inside, while outdoor time was primarily for physical activity.
          
          After studying the Floorbook Approach, the team committed to integrating Inside, Outside, and Beyond spaces 
          for deeper learning. They started with a simple provocation: placing a collection of different-sized containers 
          near the water source in their outdoor play area.
          
          As children began exploring capacity and measurement concepts, educators documented their thinking in a floor book 
          kept in a weatherproof container outdoors. When rain prevented outdoor play, they brought the investigation inside, 
          setting up water tables with the same containers and adding the floor book so children could revisit their previous thinking.
          
          The investigation extended "Beyond" when a parent who worked as a meteorologist noticed the water exploration 
          and offered to show children the rain gauges and measurement tools used at the weather station. Children created 
          their own rain gauges to place around the school grounds, measuring rainfall in different locations.
          
          Throughout the project, the floor book traveled between inside, outside, and beyond spaces, creating continuity 
          in the learning. Educators noticed that concepts traditionally taught through worksheets—measurement, data collection, 
          comparison—were deeply understood through this integrated approach.
          
          Most significantly, children no longer viewed "learning" as something that only happened at tables indoors. 
          They began spontaneously creating documentation of their discoveries in all spaces, asking for the floor book 
          to record their thinking whether they were indoors or out.`,
          reflection: "How did the integration of Inside, Outside, and Beyond spaces enhance learning in this case study? What barriers might exist in your setting to this kind of integration, and how might you address them?"
        };
      }
    }
    
    // Default fallback case study
    return {
      title: `Case Study: Applying ${module.title}`,
      content: "This case study demonstrates practical applications of the concepts covered in this module. As you read through it, consider how these approaches might be adapted to your own educational context.",
      reflection: "How might the principles demonstrated in this case study apply to your own context?"
    };
  };
  
  const caseStudyData = getCaseStudyData();
  
  const handleContinue = () => {
    markSectionComplete(courseId, moduleIndex, 'caseStudyCompleted');
    setActiveSection('practical activity');
  };
  
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Case Study: {caseStudyData.title}</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <div className="prose max-w-none">
            {caseStudyData.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Reflection Questions</h3>
          <p className="italic mb-4">{caseStudyData.reflection}</p>
          <p className="text-sm text-gray-600">
            Consider how the principles demonstrated in this case study might apply to your own context.
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleContinue}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center"
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

export default CaseStudySection;
