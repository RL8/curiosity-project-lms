// Course data structure for the Floorbook Approach LMS

export interface Module {
  id: number;
  title: string;
  description?: string;
  content?: {
    introduction?: string;
    theory?: string;
    interactiveExercise?: string;
    practical?: string;
    childVoice?: string;
    practitionerVoice?: string;
    conclusion?: string;
    reflectionPrompts?: string;
    nextSteps?: string;
    reflectionIntro?: string;
    nextStepsIntro?: string;
    resources?: string;
    resourcesIntro?: string;
    practicalActivity?: string;
    practicalActivityTitle?: string;
    practicalActivityDescription?: string;
    practicalActivityMaterials?: string[];
  };
  sections: {
    introduction: boolean;
    keyConceptsCompleted: boolean;
    caseStudyCompleted: boolean;
    resourcesCompleted: boolean;
    practicalActivityCompleted: boolean;
    reflectionCompleted: boolean;
  };
}

export interface Course {
  id: number;
  title: string;
  description: string;
  overview?: string;
  level: string;
  image: 'foundation' | 'beginner' | 'intermediate' | 'advanced';
  modules: Module[];
}

// Initial courses data
const courses: Course[] = [
  {
    id: 1,
    title: 'Foundations of Inquiry-Based Learning',
    description: 'Learn the core principles and philosophy behind the Floorbook Approach.',
    overview: 'This foundational course explores the essential principles of Inquiry-Based Learning (IBL) that form the basis of the Floorbook Approach. Drawing from Dr. Claire Warden\'s "Planning with and for Children" book, you\'ll discover how to shift from teacher-centered to child-centered learning environments.',
    level: 'Foundation',
    image: 'foundation',
    modules: [
      {
        id: 1,
        title: 'Know your teaching style/type: IBL vs Me-BL',
        description: 'Understand the differences between Inquiry-Based Learning and Me-Based Learning approaches and identify your own teaching style.',
        content: {
          introduction: 'This module explores the fundamental differences between Inquiry-Based Learning (IBL) and Me-Based Learning (Me-BL) teaching styles. Understanding these differences is crucial as it sets the foundation for implementing the Floorbook Approach effectively. These ideas take time to develop and are presented first because they establish the mindset necessary for the new practices you\'ll learn throughout this course series.',
          theory: 'Defining IBL vs. Me-BL teaching styles and their characteristics. Explore the four different types of learning environments as defined by Claxton and Carr (2004), which are useful to understand as they impact the quality and use of the Floorbook.',
          interactiveExercise: 'Online quiz: Which teaching style resonates with you? What are the values they are rooted in?',
          practical: 'Observe your own teaching for a day and note examples. Which side of the spectrum did they fall upon? Are the 4 types of environment helpful to explain which teaching type it is?',
          childVoice: 'Video demonstrations showing IBL and Me-BL experiences and their effects on children\'s ideas, highlighting what\'s new and what\'s familiar.',
          practitionerVoice: 'Teachers discussing different teaching styles and whether they notice if their approach is obvious in their practice.',
          conclusion: 'Summary of the impact of teaching beliefs on practice and next steps for developing an IBL mindset.'
        },
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 2,
        title: 'The Beliefs of an IBL educator',
        description: 'Explore the core beliefs that shape effective Inquiry-Based Learning environments and practices.',
        content: {
          introduction: 'This module examines the foundational beliefs that guide IBL educators in their practice. Understanding these beliefs is essential for creating authentic inquiry-based experiences for children.',
          theory: 'Video exploring the key elements of IBL: Child, Educator, Learning Environment, Curriculum & Accountability. Handout providing definitions of each element drawn from Sections 1 and 2 of Dr. Warden\'s book. We\'ll emphasize that each educator will value these different elements at different levels.',
          interactiveExercise: 'Drag-and-drop activity: Matching beliefs to pedagogical practices. What are each of the skills and what effect do these have?',
          practical: 'Consider how these beliefs can affect how you look at case studies from the training and interpret readymade books. What happens when valuing what a child says at age 6 with a curriculum in place or without it? What does it mean for accountability?',
          childVoice: 'Video showing what learners bring to the table with each skillset in mind and the power of responsive teaching.',
          practitionerVoice: 'Teachers discussing what each skillset brings to their practice.',
          conclusion: 'Summary of content, next steps, and the impact of equity on learners\' experiences.'
        },
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 3,
        title: 'The Skills of an IBL educator',
        description: 'Develop the essential skills needed to facilitate effective inquiry-based learning experiences.',
        content: {
          introduction: 'This module focuses on the practical skills that IBL educators need to develop to create meaningful learning experiences. These skills can be applied across any curriculum or learning context.',
          theory: 'Video exploring active listening, open-ended questions, observation, documentation, flexibility, critical thinking, time management, and creativity. Handout describing what these skills look like in action and potential challenges in implementing them. Discussion of the impact the book has on individual practice.',
          interactiveExercise: 'Analysis of what was said during IBL interactions and the process behind effective facilitation.',
          practical: 'Exploring the power of learning alongside a mentor or experienced practitioner.',
          childVoice: 'Examining the impact that being seen and heard has on children and why that matters for their development and learning.',
          practitionerVoice: 'Reflections on the benefit of seeing IBL skills in action versus simply reading about them.',
          conclusion: 'Discussion of the impact of these experiences and what remains for learners to discover through practice.'
        },
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 4,
        title: 'Practical implementation of course content',
        description: 'Apply the principles and skills of IBL in real educational settings with a focus on equity and empowerment.',
        content: {
          introduction: 'This final module brings together all the concepts from previous modules and focuses on practical implementation in your educational setting.',
          theory: 'Video discussing key questions through book content, featuring a case study about power dynamics. Handout covering all four points from previous modules and how they can be reflected with the book content of IOB (see sections 1, 2, 3).',
          interactiveExercise: 'Drag and drop activity with equity statements to help identify and address power imbalances in learning environments.',
          practical: 'Take what has been learned into your setting to try all ideas in context.',
          childVoice: 'Test to see if one type of learner is getting all the attention or power and identify what kinds of learners were present in your setting.',
          practitionerVoice: 'Reflections about equity as it plays out in real educational contexts.',
          conclusion: 'Summary of content, next steps, and the impact of equity on learners\' experiences and what educators can value in their practice.'
        },
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'My First Floorbook & Talking Tub',
    description: 'Get started with creating your first Floorbook and Talking Tub.',
    overview: 'This beginner course provides practical guidance for creating and implementing your first Floorbook and Talking Tub. You\'ll learn the fundamental techniques and approaches for documenting children\'s learning and stimulating inquiry.',
    level: 'Beginner',
    image: 'beginner',
    modules: [
      {
        id: 1,
        title: 'Introduction to Floorbooks',
        description: 'Learn the purpose, structure, and benefits of using Floorbooks to document children\'s learning.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 2,
        title: 'Creating Your First Floorbook',
        description: 'Step-by-step guidance for planning, creating, and implementing your first Floorbook in your educational setting.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 3,
        title: 'Talking Tubs Fundamentals',
        description: 'Discover how to create effective Talking Tubs that spark curiosity and meaningful conversations with children.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Next Level Floorbooks & Talking Tubs',
    description: 'Advance your skills with more complex Floorbook and Talking Tub techniques.',
    overview: 'This intermediate course builds on your foundational knowledge to help you create more sophisticated and effective Floorbooks and Talking Tubs. You\'ll explore advanced documentation techniques and learn to integrate digital tools.',
    level: 'Intermediate',
    image: 'intermediate',
    modules: [
      {
        id: 1,
        title: 'Advanced Documentation Techniques',
        description: 'Explore sophisticated methods for documenting children\'s learning and making their thinking visible.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 2,
        title: 'Integrating Digital Tools',
        description: 'Learn how to enhance your Floorbooks and Talking Tubs with appropriate digital technologies and media.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
    ],
  },
  {
    id: 4,
    title: 'Mastering the Floorbook Approach',
    description: 'Become an expert in the Floorbook Approach methodology.',
    overview: 'This advanced course is designed for experienced practitioners who want to deepen their expertise in the Floorbook Approach. You\'ll learn how to mentor others and contribute to research and innovation in the field.',
    level: 'Advanced',
    image: 'advanced',
    modules: [
      {
        id: 1,
        title: 'Mentoring Others in IBL',
        description: 'Develop the skills to support and guide colleagues in implementing the Floorbook Approach effectively.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
      {
        id: 2,
        title: 'Research and Innovation',
        description: 'Contribute to the evolution of the Floorbook Approach through action research and innovative practices.',
        sections: {
          introduction: false,
          keyConceptsCompleted: false,
          caseStudyCompleted: false,
          resourcesCompleted: false,
          practicalActivityCompleted: false,
          reflectionCompleted: false,
        },
      },
    ],
  },
];

export default courses;
