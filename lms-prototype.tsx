                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Welcome to The Floorbook Approach</h2>
                    <p className="text-gray-600 mb-4">
                      Discover Inquiry-Based Learning through our comprehensive course series. Explore
                      Inside, Outside, and Beyond approaches to learning and documentation.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                      <h3 className="font-semibold text-indigo-700 mb-2">Series Introduction</h3>
                      <p className="text-gray-600">
                        This course series will guide you through the philosophy and practical implementation
                        of the Floorbook Approach, helping you transform your teaching practice.
                      </p>
                      <p className="text-gray-600 mt-2">
                        <strong>Presented by:</strong> Dr. Claire Warden, Mindstretchers Ltd
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Your Learning Path</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {courses.map((course) => (
                        <div
                          key={course.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                          <div
                            className="h-40 bg-indigo-600 flex items-center justify-center"
                          >
                            {course.image === "foundation" && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-full h-full">
                                <rect width="400" height="200" fill="#BFDDCA" />
                                <g transform="translate(200, 100) scale(0.5)">
                                  <path d="M-150,-50 L150,-50 L150,50 L-150,50 Z" fill="white" stroke="#5255" strokeWidth="4" />
                                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#5255" fontSize="40" fontWeight="bold">Foundations</text>
                                  <path d="M-150,-50 L-130,-70 L170,-70 L150,-50" fill="#5255" />
                                  <path d="M150,50 L170,30 L170,-70" fill="#5255" />
                                </g>
                              </svg>
                            )}
                            {course.image === "beginner" && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-full h-full">
                                <rect width="400" height="200" fill="#F05D5E" opacity="0.2" />
                                <g transform="translate(200, 100)">
                                  <circle cx="0" cy="0" r="60" fill="white" stroke="#F05D5E" strokeWidth="3" />
                                  <path d="M-40,-20 C-30,-40 30,-40 40,-20 L40,20 C30,40 -30,40 -40,20 Z" fill="none" stroke="#F05D5E" strokeWidth="3" />
                                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#5255" fontSize="16" fontWeight="bold">My First FB & TT</text>
                                </g>
                              </svg>
                            )}
                            {course.image === "intermediate" && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-full h-full">
                                <rect width="400" height="200" fill="#80A7D2" opacity="0.2" />
                                <g transform="translate(200, 100)">
                                  <path d="M-60,-30 L0,-60 L60,-30 L60,30 L0,60 L-60,30 Z" fill="white" stroke="#80A7D2" strokeWidth="3" />
                                  <text x="0" y="-10" textAnchor="middle" dominantBaseline="middle" fill="#5255" fontSize="14" fontWeight="bold">Next Level</text>
                                  <text x="0" y="10" textAnchor="middle" dominantBaseline="middle" fill="#5255" fontSize="14" fontWeight="bold">FB & TT</text>
                                </g>
                              </svg>
                            )}
                            {course.image === "advanced" && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-full h-full">
                                <rect width="400" height="200" fill="#7FCA8F" opacity="0.2" />
                                <g transform="translate(200, 100)">
                                  <path d="M0,-60 L60,-20 L40,50 L-40,50 L-60,-20 Z" fill="white" stroke="#7FCA8F" strokeWidth="3" />
                                  <circle cx="0" cy="0" r="25" fill="none" stroke="#7FCA8F" strokeWidth="3" />
                                  <text  const renderModuleContent = () => {
    if (!activeModule) return null;
    
    const course = courses[activeModule.courseId - 1];
    const moduleIndex = activeModule.moduleIndex;
    const module = course.modules[moduleIndex];
    
    let introText = "";
    if (moduleIndex === 0) {
      introText = "This module explores the fundamental differences between Inquiry-Based Learning (IBL) and Me-Based Learning (Me-BL) approaches. You'll reflect on your current teaching style and identify shifts needed to embrace IBL principles.";
    } else if (moduleIndex === 1) {
      introText = "This module explores the core beliefs that underpin effective Inquiry-Based Learning. We'll examine beliefs about children, educators, co-construction, the learning environment, curriculum, and accountability.";
    } else if (moduleIndex === 2) {
      introText = "This module explores the seven essential skills every IBL educator needs to master: Active Listening, Open-Ended Questioning, Observation, Documentation, Flexibility, Critical Thinking, and Creativity.";
    } else {
      introText = "This module explores how to implement IBL principles in practice across various contexts: Inside (classroom settings), Outside (outdoor environments), and Beyond (community connections).";
    }
    
    let objectiveText = "";
    if (moduleIndex === 0) {
      objectiveText = "IBL vs Me-BL teaching styles";
    } else if (moduleIndex === 1) {
      objectiveText = "an IBL educator's belief system";
    } else if (moduleIndex === 2) {
      objectiveText = "skills required for effective IBL";
    } else {
      objectiveText = "practical IBL implementation";
    }
    
    let conceptTitle = "";
    if (moduleIndex === 0) {
      conceptTitle = "teaching styles:";
    } else if (moduleIndex === 1) {
      conceptTitle = "IBL beliefs:";
    } else if (moduleIndex === 2) {
      conceptTitle = "IBL skills:";
    } else {
      conceptTitle = "practical implementation:";
    }
    
    return (
      <div className="bg-white rounded-lg shadow-md flex flex-row h-full">
        {/* Course Sidebar - Always visible for navigation */}
        <div className={`${courseSidebarOpen ? 'w-64' : 'w-16'} bg-gray-50 border-r border-gray-200 flex flex-col h-full transition-all duration-300 ease-in-out`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className={`font-semibold ${courseSidebarOpen ? 'block' : 'hidden'}`}>Course Navigation</h2>
            <button 
              onClick={() => setCourseSidebarOpen(!courseSidebarOpen)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              {courseSidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
          
          <div className="p-4 border-b border-gray-200">
            <button 
              onClick={() => setActiveView('main')} 
              className="flex items-center text-indigo-600 hover:text-indigo-800 mb-2"
            >
              <ArrowLeft size={16} className="mr-1" /> 
              {courseSidebarOpen && <span>Back to Courses</span>}
            </button>
            
            {courseSidebarOpen && (
              <div>
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{course.level}</p>
              </div>
            )}
          </div>
          
          <div className="overflow-y-auto flex-grow">
            <div className="p-4">
              <div className="space-y-4">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="space-y-2">
                    <button 
                      onClick={() => {
                        setActiveModule({courseId: activeModule.courseId, moduleIndex: idx});
                        setActiveSection('introduction');
                      }}
                      className={`flex items-center w-full text-left ${courseSidebarOpen ? 'pr-2' : 'justify-center'} ${
                        idx === moduleIndex ? 'text-indigo-600 font-medium' : 'text-gray-700 hover:text-indigo-600'
                      }`}
                    >
                      {idx === moduleIndex ? 
                        <BookmarkIcon size={courseSidebarOpen ? 18 : 20} className="flex-shrink-0" /> : 
                        <BookOpen size={courseSidebarOpen ? 18 : 20} className="flex-shrink-0" />
                      }
                      {courseSidebarOpen && (
                        <span className="ml-2 text-sm truncate">Module {idx + 1}: {mod.title.length > 25 ? mod.title.substring(0, 25) + '...' : mod.title}</span>
                      )}
                    </button>
                    
                    {idx === moduleIndex && courseSidebarOpen && (
                      <div className="ml-6 space-y-1">
                        {mod.sections.map((section, sectionIdx) => (
                          <button 
                            key={sectionIdx}
                            onClick={() => setActiveSection(section.toLowerCase())}
                            className={`text-sm w-full text-left ${
                              activeSection === section.toLowerCase() ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'
                            }`}
                          >
                            {section}
                            {activeSection === section.toLowerCase() && (
                              <ChevronRight size={14} className="inline ml-1" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            {courseSidebarOpen && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            )}
            <div className="flex items-center">
              <CheckCircle size={courseSidebarOpen ? 16 : 20} className="text-indigo-600" />
              {courseSidebarOpen && (
                <span className="ml-2 text-xs text-gray-600">{course.progress}% complete</span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 border-b sticky top-0 bg-white z-10 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-2">
                  {course.level}
                </span>
                <h2 className="text-2xl font-bold">{course.title}</h2>
                <h3 className="text-xl text-gray-600 mt-1">
                  Module {moduleIndex + 1}: {module.title}
                </h3>
              </div>
              <div className="text-sm text-gray-500">
                <span>Module {moduleIndex + 1} of 4</span>
                <div className="text-xs mt-1 text-right">Current section: <span className="font-medium">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span></div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex space-x-6">
              {/* Main Content Area */}
              <div className="flex-1">
                {activeSection === 'introduction' && (
                  <>
                    <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-3">Learning Objectives</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-indigo-600 mt-1 mr-2" />
                          <span>Understand the core principles of {objectiveText}</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-indigo-600 mt-1 mr-2" />
                          <span>Apply theoretical knowledge to practical classroom scenarios</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-indigo-600 mt-1 mr-2" />
                          <span>Reflect on your current practice and identify areas for growth</span>
                        </li>
                      </ul>
                    </div>

                    <div className="prose max-w-none">
                      <h3>Introduction</h3>
                      <p>{introText}</p>
                      
                      <div className="my-8 flex justify-center">
                        <img src="/api/placeholder/600/400" alt="Floorbook approach illustration" className="rounded-lg shadow-md" />
                      </div>
                      
                      <p>
                        In this module, you will learn practical strategies to implement the Floorbook approach in your own setting.
                        Dr. Claire Warden developed this approach to make children's thinking visible and to document their learning journey in an authentic way.
                      </p>
                      
                      <p>
                        The Floorbook approach is rooted in the belief that children are capable, competent learners who can co-construct knowledge alongside educators.
                        Through this module, you'll discover how to create environments that nurture inquiry and document the process using Floorbooks.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button 
                        onClick={() => setActiveSection('introduction')}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300 flex items-center"
                      >
                        <ChevronLeft size={18} className="mr-1" />
                        Back: Introduction
                      </button>
                      <button 
                        onClick={() => setActiveSection('key concepts')}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                      >
                        Next: Key Concepts
                        <ChevronRight size={18} className="ml-1" />
                      </button>
                    </div>
                  </>
                )}
                
                {activeSection === 'key concepts' && (
                  <>
                    <div className="prose max-w-none">
                      <h3>Key Concepts</h3>
                      <p>
                        In this module, we&apos;ll explore these key concepts related to {conceptTitle}
                      </p>
                      
                      <ul>
                        {moduleIndex === 0 ? (
                          <>
                            <li><strong>IBL Approach:</strong> Child-led learning facilitated by educator</li>
                            <li><strong>Me-BL Approach:</strong> Teacher-directed learning with predetermined outcomes</li>
                            <li><strong>Reflective Practice:</strong> Ongoing assessment of teaching approaches</li>
                          </>
                        ) : moduleIndex === 1 ? (
                          <>
                            <li><strong>Child as Capable:</strong> Viewing children as competent co-constructors of knowledge</li>
                            <li><strong>Educator as Guide:</strong> Facilitating rather than directing learning</li>
                            <li><strong>Environment as Third Teacher:</strong> Designing spaces that inspire inquiry</li>
                          </>
                        ) : moduleIndex === 2 ? (
                          <>
                            <li><strong>Active Listening:</strong> Truly hearing children&apos;s ideas and theories</li>
                            <li><strong>Open-Ended Questioning:</strong> Asking questions that extend thinking</li>
                            <li><strong>Documentation:</strong> Capturing the learning process authentically</li>
                          </>
                        ) : (
                          <>
                            <li><strong>Inside:</strong> Classroom implementation strategies</li>
                            <li><strong>Outside:</strong> Extending inquiry to outdoor environments</li>
                            <li><strong>Beyond:</strong> Connecting with broader community contexts</li>
                          </>
                        )}
                      </ul>
                      
                      <div className="my-8 flex justify-center">
                        <div className="bg-indigo-50 p-6 rounded-lg w-full max-w-xl">
                          <h4 className="font-medium text-indigo-800 mb-3">Key Differences: IBL vs Me-BL</h4>
                          <table className="min-w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 border-b border-indigo-200 text-left">IBL (Inquiry-Based Learning)</th>
                                <th className="py-2 px-4 border-b border-indigo-200 text-left">Me-BL (Me-Based Learning)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 px-4 border-b border-indigo-100">Child-initiated</td>
                                <td className="py-2 px-4 border-b border-indigo-100">Teacher-directed</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b border-indigo-100">Process-focused</td>
                                <td className="py-2 px-4 border-b border-indigo-100">Outcome-focused</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b border-indigo-100">Educator as facilitator</td>
                                <td className="py-2 px-4 border-b border-indigo-100">Educator as instructor</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b border-indigo-100">Open-ended exploration</td>
                                <td className="py-2 px-4 border-b border-indigo-100">Predefined activities</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">Multiple perspectives valued</td>
                                <td className="py-2 px-4">Single correct answer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button 
                        onClick={() => setActiveSection('case study')}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300 flex items-center"
                      >
                        <ChevronLeft size={18} className="mr-1" />
                        Back: Case Study
                      </button>
                      <button 
                        onClick={() => setActiveSection('practical activity')}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                      >
                        Next: Practical Activity
                        <ChevronRight size={18} className="ml-1" />
                      </button>
                    </div>
                  </>
                )}
                
                {activeSection === 'practical activity' && (
                  <>
                    <div className="bg-green-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-green-800">Practical Activity: Starting Your Floorbook</h3>
                      <p className="mb-4">
                        For this activity, you will begin creating your own Floorbook based on a topic of interest in your setting.
                      </p>
                      
                      <h4 className="font-medium text-green-800 mb-2">Materials Needed:</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Large sheet of paper or notebook (A3 size recommended)</li>
                        <li>Colored markers or pencils</li>
                        <li>Sticky notes</li>
                        <li>Camera (for documentation)</li>
                      </ul>
                      
                      <h4 className="font-medium text-green-800 mb-2">Steps:</h4>
                      <ol className="list-decimal pl-6">
                        <li className="mb-2">Observe children's interests in your setting for 1-2 days</li>
                        <li className="mb-2">Select a topic that generates enthusiasm and curiosity</li>
                        <li className="mb-2">Create the first page of your Floorbook with the topic title</li>
                        <li className="mb-2">Document children's initial comments, questions, and theories</li>
                        <li className="mb-2">Add photos or drawings of children engaged with the topic</li>
                        <li>Add your own reflection on what you observed</li>
                      </ol>
                    </div>
                    
                    <div className="mt-8 bg-white border border-gray-200 rounded-lg">
                      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold">Documentation Board</h3>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                            <Paperclip size={18} />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                            <Camera size={18} />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                            <Edit3 size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-500 text-center py-10">
                          Your documentation board is empty. Use this space to document your Floorbook planning and implementation.
                          Upload photos, add notes, or share reflections on your process.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button 
                        onClick={() => setActiveSection('key concepts')}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300 flex items-center"
                      >
                        <ChevronLeft size={18} className="mr-1" />
                        Back: Key Concepts
                      </button>
                      <button 
                        onClick={() => setActiveSection('reflection')}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                      >
                        Next: Reflection
                        <ChevronRight size={18} className="ml-1" />
                      </button>
                    </div>
                  </>
                )}
                
                {activeSection === 'reflection' && (
                  <>
                    <div className="bg-purple-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-purple-800">Module Reflection</h3>
                      <p className="mb-4">
                        Take some time to reflect on what you've learned in this module and how you might apply it in your practice.
                      </p>
                      
                      <h4 className="font-medium text-purple-800 mb-2">Reflection Questions:</h4>
                      <ul className="list-disc pl-6">
                        <li className="mb-2">What aspects of the Floorbook approach most resonate with your teaching philosophy?</li>
                        <li className="mb-2">What challenges do you anticipate in implementing this approach in your setting?</li>
                        <li className="mb-2">How might your documentation practices change as a result of this learning?</li>
                        <li className="mb-2">What specific steps will you take to incorporate these ideas into your work with children?</li>
                        <li>How will you measure the impact of these changes on children's learning and engagement?</li>
                      </ul>
                    </div>
                    
                    <div className="mt-8 bg-white border border-gray-200 rounded-lg">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold">Your Reflection</h3>
                      </div>
                      <div className="p-6">
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2 text-sm h-48"
                          placeholder="Record your reflections on this module and your plans for implementation..."
                        ></textarea>
                        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
                          Save Reflection
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button 
                        onClick={() => setActiveSection('practical activity')}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300 flex items-center"
                      >
                        <ChevronLeft size={18} className="mr-1" />
                        Back: Practical Activity
                      </button>
                      <button 
                        onClick={() => {
                          // Mark this module as complete and return to course overview
                          const updatedCourses = [...courses];
                          updatedCourses[activeModule.courseId - 1].progress = 25;
                          setActiveView('main');
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center"
                      >
                        Complete Module
                        <CheckCircle size={18} className="ml-1" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Right Sidebar */}
              <div className="w-80 flex-shrink-0">
                <div className="sticky top-6">
                  <div className="bg-white border border-gray-200 rounded-lg mb-6">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold">Your Progress</h3>
                    </div>
                    <div className="p-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: activeSection === 'introduction' ? '20%' : 
                                          activeSection === 'case study' ? '40%' : 
                                          activeSection === 'key concepts' ? '60%' : 
                                          activeSection === 'practical activity' ? '80%' : 
                                          activeSection === 'reflection' ? '100%' : '0%' }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {activeSection === 'introduction' ? '20%' : 
                         activeSection === 'case study' ? '40%' : 
                         activeSection === 'key concepts' ? '60%' : 
                         activeSection === 'practical activity' ? '80%' : 
                         activeSection === 'reflection' ? '100%' : '0%'} complete
                      </p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                            activeSection === 'introduction' || activeSection === 'case study' || 
                            activeSection === 'key concepts' || activeSection === 'practical activity' || 
                            activeSection === 'reflection' ? 'bg-indigo-600' : 'border-2 border-gray-300'
                          }`}>
                            {(activeSection === 'introduction' || activeSection === 'case study' || 
                              activeSection === 'key concepts' || activeSection === 'practical activity' || 
                              activeSection === 'reflection') && <CheckCircle size={10} className="text-white" />}
                          </div>
                          <span className={`text-sm ${
                            activeSection === 'introduction' ? 'font-medium text-indigo-600' : 'text-gray-600'
                          }`}>Introduction</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                            activeSection === 'case study' || activeSection === 'key concepts' || 
                            activeSection === 'practical activity' || activeSection === 'reflection' ? 
                            'bg-indigo-600' : 'border-2 border-gray-300'
                          }`}>
                            {(activeSection === 'case study' || activeSection === 'key concepts' || 
                              activeSection === 'practical activity' || activeSection === 'reflection') && 
                              <CheckCircle size={10} className="text-white" />}
                          </div>
                          <span className={`text-sm ${
                            activeSection === 'case study' ? 'font-medium text-indigo-600' : 'text-gray-600'
                          }`}>Case Study</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                            activeSection === 'key concepts' || activeSection === 'practical activity' || 
                            activeSection === 'reflection' ? 'bg-indigo-600' : 'border-2 border-gray-300'
                          }`}>
                            {(activeSection === 'key concepts' || activeSection === 'practical activity' || 
                              activeSection === 'reflection') && <CheckCircle size={10} className="text-white" />}
                          </div>
                          <span className={`text-sm ${
                            activeSection === 'key concepts' ? 'font-medium text-indigo-600' : 'text-gray-600'
                          }`}>Key Concepts</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                            activeSection === 'practical activity' || activeSection === 'reflection' ? 
                            'bg-indigo-600' : 'border-2 border-gray-300'
                          }`}>
                            {(activeSection === 'practical activity' || activeSection === 'reflection') && 
                              <CheckCircle size={10} className="text-white" />}
                          </div>
                          <span className={`text-sm ${
                            activeSection === 'practical activity' ? 'font-medium text-indigo-600' : 'text-gray-600'
                          }`}>Practical Activity</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                            activeSection === 'reflection' ? 'bg-indigo-600' : 'border-2 border-gray-300'
                          }`}>
                            {activeSection === 'reflection' && <CheckCircle size={10} className="text-white" />}
                          </div>
                          <span className={`text-sm ${
                            activeSection === 'reflection' ? 'font-medium text-indigo-600' : 'text-gray-600'
                          }`}>Reflection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg">
                    <div 
                      className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                      onClick={() => setActiveDiscussion(!activeDiscussion)}
                    >
                      <h3 className="font-semibold">Discussion</h3>
                      <div className="text-indigo-600">
                        {activeDiscussion ? "Close" : "Open"}
                      </div>
                    </div>
                    {activeDiscussion && (
                      <div className="p-4">
                        <div className="space-y-4 max-h-80 overflow-y-auto mb-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-semibold text-indigo-700">JD</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold">Jane Doe</p>
                              <p className="text-sm text-gray-600">
                                I found the case study really helpful in thinking about how to apply IBL principles in my classroom.
                              </p>
                              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-semibold text-green-700">MS</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold">Maria Smith</p>
                              <p className="text-sm text-gray-600">
                                Has anyone tried implementing a Talking Tub for a science-related inquiry? I&apos;d love to hear experiences.
                              </p>
                              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-semibold text-blue-700">CW</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold">Dr. Claire Warden</p>
                              <p className="text-sm text-gray-600">
                                Great discussions everyone! Remember that Floorbooks are about making children's thinking visible, so focus on capturing their authentic voice.
                              </p>
                              <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <textarea
                            className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            rows="3"
                            placeholder="Share your thoughts or questions..."
                            value={discussionInput}
                            onChange={(e) => setDiscussionInput(e.target.value)}
                          ></textarea>
                          <button 
                            className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full"
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg mt-6">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold">Resources</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="flex items-start text-indigo-600 hover:text-indigo-800">
                            <BookOpen size={16} className="mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Floorbooks: A Complete Guide by Dr. Claire Warden</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-start text-indigo-600 hover:text-indigo-800">
                            <Camera size={16} className="mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Video: Documentation Examples</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-start text-indigo-600 hover:text-indigo-800">
                            <Map size={16} className="mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Template: Floorbook Planning Map</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm text-indigo-700 flex items-center">
                      <Star size={16} className="mr-2" />
                      <span>Course presented by Mindstretchers Ltd in partnership with Humankind</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };('case study')}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                      >
                        Next: Case Study
                        <ChevronRight size={18} className="ml-1" />
                      </button>
                    </div>
                  </>
                )}
                
                {activeSection === 'case study' && (
                  <>
                    <div className="my-8 p-6 bg-yellow-50 border border-yellow-100 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-yellow-800">Case Study: Reflective Practice</h4>
                      <p>Imagine you observe children becoming interested in shadows on the playground. Some are trying to &quot;catch&quot; their shadows, while others are noticing how the shadows change position throughout the day.</p>
                      <p className="mt-2"><strong>Questions to consider:</strong></p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>How would you respond to this emerging interest?</li>
                        <li>What materials might you gather for a Talking Tub on this topic?</li>
                        <li>How would you document this learning journey in a Floorbook?</li>
                      </ul>
                      
                      <div className="mt-4 p-4 bg-white rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-2">Real-world Example</h5>
                        <p className="text-gray-700">
                          At a preschool in Scotland, educators noticed children's fascination with shadows. They created a Talking Tub with flashlights, transparent colored materials, puppets, and books about light and shadow. The children's theories and questions were documented in a Floorbook, which became the basis for extended explorations both indoors and outdoors.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-white border border-gray-200 rounded-lg">
                      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold">Your Reflection</h3>
                      </div>
                      <div className="p-6">
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2 text-sm h-32"
                          placeholder="Record your thoughts about how you would approach this scenario..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button 
                        onClick={() => setActiveSectionimport React, { useState } from 'react';
import { BookOpen, Users, BarChart, Settings, Home, CheckCircle, ArrowLeft, MessageCircle, Paperclip, Camera, Edit3, Layers, Map, BookmarkIcon, Star, ChevronRight, ChevronDown } from 'lucide-react';

const LMSDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [activeView, setActiveView] = useState('main');
  const [activeModule, setActiveModule] = useState(null);
  const [activeSection, setActiveSection] = useState('introduction');
  const [activeDiscussion, setActiveDiscussion] = useState(false);
  const [discussionInput, setDiscussionInput] = useState('');
  const [courseSidebarOpen, setCourseSidebarOpen] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Foundations of IBL",
      level: "Foundation",
      description: "Learn the core principles of Inquiry-Based Learning and the Floorbook approach.",
      modules: [
        {
          title: "Know your teaching style/type: IBL vs Me-BL",
          sections: ["Introduction", "Case Study", "Key Concepts", "Practical Activity", "Reflection"]
        },
        {
          title: "The Beliefs of an IBL educator",
          sections: ["Introduction", "Case Study", "Key Concepts", "Practical Activity", "Reflection"]
        },
        {
          title: "The Skills of an IBL educator",
          sections: ["Introduction", "Case Study", "Key Concepts", "Practical Activity", "Reflection"]
        },
        {
          title: "Practical implementation of course content",
          sections: ["Introduction", "Case Study", "Key Concepts", "Practical Activity", "Reflection"]
        }
      ],
      progress: 15,
      image: "foundation"
    },
    {
      id: 2,
      title: "My First FB and TT",
      level: "Beginner",
      description: "Create your first Floorbook and Talking Tub with hands-on activities.",
      modules: [
        {
          title: "Talking Tub Creation",
          sections: ["Introduction", "Gathering Materials", "Open-ended Prompts", "Implementation", "Reflection"]
        },
        {
          title: "Floorbook Foundations",
          sections: ["Introduction", "Setting Up", "Capturing Conversations", "Documentation", "Reflection"]
        },
        {
          title: "Questioning for Inquiry",
          sections: ["Introduction", "Effective Techniques", "Practice Session", "Implementation", "Reflection"]
        },
        {
          title: "Iterative Planning",
          sections: ["Introduction", "Review Process", "Pattern Identification", "Next Steps", "Reflection"]
        }
      ],
      progress: 0,
      image: "beginner"
    },
    {
      id: 3,
      title: "Next Level FB and TT",
      level: "Intermediate",
      description: "Advance your documentation techniques and curriculum connections.",
      modules: [
        {
          title: "Documentation Techniques",
          sections: ["Introduction", "Methods", "Practice Session", "Implementation", "Reflection"]
        },
        {
          title: "Curriculum Connections",
          sections: ["Introduction", "Mapping Exercise", "Integration Ideas", "Planning", "Reflection"]
        },
        {
          title: "Provocations and Invitations",
          sections: ["Introduction", "Design Process", "Creation Session", "Implementation", "Reflection"]
        },
        {
          title: "Community Connections",
          sections: ["Introduction", "Family Involvement", "Community Resources", "Planning", "Reflection"]
        }
      ],
      progress: 0,
      image: "intermediate"
    },
    {
      id: 4,
      title: "Advanced FB and TT",
      level: "Advanced",
      description: "Master adaptation strategies, mentoring, and leadership in IBL.",
      modules: [
        {
          title: "Adapting for Diverse Learners",
          sections: ["Introduction", "Adaptation Strategies", "Case Studies", "Implementation", "Reflection"]
        },
        {
          title: "Mentoring and Collaboration",
          sections: ["Introduction", "Mentoring Skills", "Collaboration Techniques", "Planning", "Reflection"]
        },
        {
          title: "Action Research",
          sections: ["Introduction", "Research Methods", "Proposal Development", "Data Collection", "Reflection"]
        },
        {
          title: "Leadership and Advocacy",
          sections: ["Introduction", "Leadership Skills", "Advocacy Techniques", "Presentation Skills", "Reflection"]
        }
      ],
      progress: 0,
      image: "advanced"
    }
  ];

  const toggleCourse = (id) => {
    if (expandedCourse === id) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(id);
    }
  };

  const getImageUrl = () => {
    return `/api/placeholder/400/200`;
  };

  const renderModuleContent = () => {
    if (!activeModule) return null;
    
    const course = courses[activeModule.courseId - 1];
    const moduleIndex = activeModule.moduleIndex;
    
    let introText = "";
    if (moduleIndex === 0) {
      introText = "This module explores the fundamental differences between Inquiry-Based Learning (IBL) and Me-Based Learning (Me-BL) approaches. You'll reflect on your current teaching style and identify shifts needed to embrace IBL principles.";
    } else if (moduleIndex === 1) {
      introText = "This module explores the core beliefs that underpin effective Inquiry-Based Learning. We'll examine beliefs about children, educators, co-construction, the learning environment, curriculum, and accountability.";
    } else if (moduleIndex === 2) {
      introText = "This module explores the seven essential skills every IBL educator needs to master: Active Listening, Open-Ended Questioning, Observation, Documentation, Flexibility, Critical Thinking, and Creativity.";
    } else {
      introText = "This module explores how to implement IBL principles in practice across various contexts: Inside (classroom settings), Outside (outdoor environments), and Beyond (community connections).";
    }
    
    let objectiveText = "";
    if (moduleIndex === 0) {
      objectiveText = "IBL vs Me-BL teaching styles";
    } else if (moduleIndex === 1) {
      objectiveText = "an IBL educator's belief system";
    } else if (moduleIndex === 2) {
      objectiveText = "skills required for effective IBL";
    } else {
      objectiveText = "practical IBL implementation";
    }
    
    let conceptTitle = "";
    if (moduleIndex === 0) {
      conceptTitle = "teaching styles:";
    } else if (moduleIndex === 1) {
      conceptTitle = "IBL beliefs:";
    } else if (moduleIndex === 2) {
      conceptTitle = "IBL skills:";
    } else {
      conceptTitle = "practical implementation:";
    }
    
    return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <button 
            onClick={() => setActiveView('main')} 
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Courses
          </button>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-2">
                {course.level}
              </span>
              <h2 className="text-2xl font-bold">{course.title}</h2>
              <h3 className="text-xl text-gray-600 mt-1">
                {course.modules[moduleIndex].replace('Module ' + (moduleIndex + 1) + ':', '')}
              </h3>
            </div>
            <div className="text-sm text-gray-500">
              <span>Module {moduleIndex + 1} of 4</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex space-x-6">
            {/* Main Content Area */}
            <div className="flex-1">
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">Learning Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-indigo-600 mt-1 mr-2" />
                    <span>Understand the core principles of {objectiveText}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-indigo-600 mt-1 mr-2" />
                    <span>Apply theoretical knowledge to practical classroom scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-indigo-600 mt-1 mr-2" />
                    <span>Reflect on your current practice and identify areas for growth</span>
                  </li>
                </ul>
              </div>

              <div className="prose max-w-none">
                <h3>Introduction</h3>
                <p>{introText}</p>
                
                <div className="my-8 p-6 bg-yellow-50 border border-yellow-100 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-yellow-800">Case Study: Reflective Practice</h4>
                  <p>Imagine you observe children becoming interested in shadows on the playground. Some are trying to &quot;catch&quot; their shadows, while others are noticing how the shadows change position throughout the day.</p>
                  <p className="mt-2"><strong>Questions to consider:</strong></p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>How would you respond to this emerging interest?</li>
                    <li>What materials might you gather for a Talking Tub on this topic?</li>
                    <li>How would you document this learning journey in a Floorbook?</li>
                  </ul>
                </div>

                <h3>Key Concepts</h3>
                <p>
                  In this module, we&apos;ll explore these key concepts related to {conceptTitle}
                </p>
                
                <ul>
                  {moduleIndex === 0 ? (
                    <>
                      <li><strong>IBL Approach:</strong> Child-led learning facilitated by educator</li>
                      <li><strong>Me-BL Approach:</strong> Teacher-directed learning with predetermined outcomes</li>
                      <li><strong>Reflective Practice:</strong> Ongoing assessment of teaching approaches</li>
                    </>
                  ) : moduleIndex === 1 ? (
                    <>
                      <li><strong>Child as Capable:</strong> Viewing children as competent co-constructors of knowledge</li>
                      <li><strong>Educator as Guide:</strong> Facilitating rather than directing learning</li>
                      <li><strong>Environment as Third Teacher:</strong> Designing spaces that inspire inquiry</li>
                    </>
                  ) : moduleIndex === 2 ? (
                    <>
                      <li><strong>Active Listening:</strong> Truly hearing children&apos;s ideas and theories</li>
                      <li><strong>Open-Ended Questioning:</strong> Asking questions that extend thinking</li>
                      <li><strong>Documentation:</strong> Capturing the learning process authentically</li>
                    </>
                  ) : (
                    <>
                      <li><strong>Inside:</strong> Classroom implementation strategies</li>
                      <li><strong>Outside:</strong> Extending inquiry to outdoor environments</li>
                      <li><strong>Beyond:</strong> Connecting with broader community contexts</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="mt-8 bg-white border border-gray-200 rounded-lg">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold">Documentation Board</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                      <Paperclip size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                      <Camera size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                      <Edit3 size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-center py-10">
                    Your documentation board is empty. Use this space to document your learning journey, 
                    just as you would use a Floorbook to document children&apos;s learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-6">
                <div className="bg-white border border-gray-200 rounded-lg mb-6">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold">Your Progress</h3>
                  </div>
                  <div className="p-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: '15%' }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">15% complete</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span className="text-sm">Introduction completed</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                        <span className="text-sm">Case study in progress</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                        <span className="text-sm">Practical activity</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                        <span className="text-sm">Reflection</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg">
                  <div 
                    className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                    onClick={() => setActiveDiscussion(!activeDiscussion)}
                  >
                    <h3 className="font-semibold">Discussion</h3>
                    <div className="text-indigo-600">
                      {activeDiscussion ? "Close" : "Open"}
                    </div>
                  </div>
                  {activeDiscussion && (
                    <div className="p-4">
                      <div className="space-y-4 max-h-80 overflow-y-auto mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-semibold text-indigo-700">JD</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold">Jane Doe</p>
                            <p className="text-sm text-gray-600">
                              I found the case study really helpful in thinking about how to apply IBL principles in my classroom.
                            </p>
                            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-semibold text-green-700">MS</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold">Maria Smith</p>
                            <p className="text-sm text-gray-600">
                              Has anyone tried implementing a Talking Tub for a science-related inquiry? I&apos;d love to hear experiences.
                            </p>
                            <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2 text-sm"
                          rows="3"
                          placeholder="Share your thoughts or questions..."
                          value={discussionInput}
                          onChange={(e) => setDiscussionInput(e.target.value)}
                        ></textarea>
                        <button 
                          className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                    <Layers size={18} className="mr-2" />
                    Next: Practical Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">The Floorbook Approach LMS</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="px-4 py-2 rounded-full text-sm text-gray-700 focus:outline-none"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
              <span className="font-semibold">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 space-y-6">
          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'dashboard' ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <Home size={20} />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'courses' ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <BookOpen size={20} />
                  <span>My Courses</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('community')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'community' ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <Users size={20} />
                  <span>Community</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'progress' ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <BarChart size={20} />
                  <span>My Progress</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'settings' ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          {activeView === 'main' ? (
            <>
              {activeTab === 'dashboard' && (
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Welcome to The Floorbook Approach</h2>
                    <p className="text-gray-600 mb-4">
                      Discover Inquiry-Based Learning through our comprehensive course series. Explore
                      Inside, Outside, and Beyond approaches to learning and documentation.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                      <h3 className="font-semibold text-indigo-700 mb-2">Series Introduction</h3>
                      <p className="text-gray-600">
                        This course series will guide you through the philosophy and practical implementation
                        of the Floorbook Approach, helping you transform your teaching practice.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Your Learning Path</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {courses.map((course) => (
                        <div
                          key={course.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                          <div
                            className="h-40 bg-indigo-600 flex items-center justify-center"
                          >
                            <img
                              src={getImageUrl()}
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-2">
                              {course.level}
                            </span>
                            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                            <div className="mt-4">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-indigo-600 h-2.5 rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500 mt-1 block">
                                {course.progress}% complete
                              </span>
                            </div>
                            <button
                              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                            >
                              {course.progress > 0 ? "Continue" : "Start Course"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'courses' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Courses</h2>
                  <div className="space-y-6">
                    {courses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-2">
                                {course.level}
                              </span>
                              <h3 className="text-xl font-semibold">{course.title}</h3>
                              <p className="text-gray-600 mt-2">{course.description}</p>
                            </div>
                            <button
                              onClick={() => toggleCourse(course.id)}
                              className="text-indigo-600 hover:text-indigo-800"
                            >
                              {expandedCourse === course.id ? "Collapse" : "Expand"}
                            </button>
                          </div>

                          <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-indigo-600 h-2.5 rounded-full"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1 block">
                              {course.progress}% complete
                            </span>
                          </div>

                          {expandedCourse === course.id && (
                            <div className="mt-6 space-y-4">
                              <h4 className="font-semibold">Course Modules:</h4>
                              <ul className="space-y-3">
                                {course.modules.map((module, index) => (
                                  <li key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                                    <div className="flex-shrink-0">
                                      <CheckCircle size={18} className="text-gray-400" />
                                    </div>
                                    <span>{module}</span>
                                    <button 
                                      onClick={() => {
                                        setActiveView('module');
                                        setActiveModule({courseId: course.id, moduleIndex: index});
                                      }}
                                      className="ml-auto text-indigo-600 hover:text-indigo-800 text-sm"
                                    >
                                      Start
                                    </button>
                                  </li>
                                ))}
                              </ul>
                              <div className="pt-4 flex justify-end">
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
                                  Begin Course
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'community' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Community</h2>
                  <p className="text-gray-600">Connect with other learners and share your Floorbook experiences.</p>
                  <div className="mt-4 p-8 bg-gray-100 rounded-lg text-center">
                    <p className="text-gray-500">Community features will be added in the next iteration.</p>
                  </div>
                </div>
              )}

              {activeTab === 'progress' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Progress</h2>
                  <p className="text-gray-600">Track your learning journey through The Floorbook Approach.</p>
                  <div className="mt-4 p-8 bg-gray-100 rounded-lg text-center">
                    <p className="text-gray-500">Progress tracking features will be added in the next iteration.</p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Settings</h2>
                  <p className="text-gray-600">Customize your learning experience.</p>
                  <div className="mt-4 p-8 bg-gray-100 rounded-lg text-center">
                    <p className="text-gray-500">Settings features will be added in the next iteration.</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            renderModuleContent()
          )}
        </main>
      </div>
    </div>
  );
};

export default LMSDemo;