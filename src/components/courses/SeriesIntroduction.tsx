import React, { useState } from 'react';

const SeriesIntroduction: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hierarchy' | 'structure' | 'scoring'>('hierarchy');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Organised Curiosity with the Floorbook Approach</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Inside, outside and beyond
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('hierarchy')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'hierarchy'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Training Hierarchy
        </button>
        <button
          onClick={() => setActiveTab('structure')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'structure'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Learning Structure
        </button>
        <button
          onClick={() => setActiveTab('scoring')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'scoring'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Reflection Scoring Guide
        </button>
      </div>

      {/* Content Sections */}
      <div className="overflow-x-auto">
        {activeTab === 'hierarchy' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Training Hierarchy</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive Organised Curiosity Series is structured in four progressive levels, each building upon the previous one to develop your expertise in Inquiry-Based Learning.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[1200px] border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-1 text-center w-64">Course & Level</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-96">Focus</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-96">Key Outcomes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Foundation</span>
                      <br />
                      Foundations of IBL
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Core</span> Understanding IBL principles
                      <br />
                      • Transition from traditional teaching to IBL approach
                      <br />
                      • Develop fundamental IBL educator beliefs and mindset
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Practice</span> Basic implementation
                      <br />
                      • Master seven essential IBL skills
                      <br />
                      • Create practical implementation strategies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Knowledge</span> Deep understanding of IBL
                      <br />
                      • Confidently explain IBL vs Me-BL differences to colleagues and parents
                      <br />
                      • Apply IBL principles in daily teaching practice
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mt-2">Skills</span> Basic implementation
                      <br />
                      • Create and maintain an IBL portfolio demonstrating growth
                      <br />
                      • Implement basic IBL techniques in classroom settings
                      <br />
                      • Document learning using initial IBL approaches
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Beginner</span>
                      <br />
                      My First Floorbook & Talking Tub
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Documentation</span> Basic Floorbook creation
                      <br />
                      • Master basic Floorbook creation and maintenance
                      <br />
                      • Implement effective Talking Tub sessions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Planning</span> Initial Talking Tubs
                      <br />
                      • Capture and document child voice
                      <br />
                      • Plan and structure learning documentation
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Knowledge</span> Documentation techniques
                      <br />
                      • Create comprehensive Floorbooks that effectively document learning
                      <br />
                      • Conduct engaging Talking Tub sessions that promote rich discussions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mt-2">Skills</span> Basic planning
                      <br />
                      • Capture and incorporate child voice in documentation
                      <br />
                      • Use documentation to inform planning and assessment
                      <br />
                      • Share learning stories with parents and colleagues
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Intermediate</span>
                      <br />
                      Advanced Documentation
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Advanced</span> Documentation techniques
                      <br />
                      • Integrate digital tools into documentation
                      <br />
                      • Create sophisticated learning stories
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Digital</span> Tools integration
                      <br />
                      • Develop advanced analysis skills
                      <br />
                      • Master multiple documentation methods
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Knowledge</span> Advanced techniques
                      <br />
                      • Effectively use digital tools for documentation and sharing
                      <br />
                      • Create detailed learning stories that capture learning journeys
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mt-2">Skills</span> Digital implementation
                      <br />
                      • Analyze and interpret documentation to inform practice
                      <br />
                      • Integrate multiple documentation methods seamlessly
                      <br />
                      • Use documentation to demonstrate learning outcomes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Advanced</span>
                      <br />
                      Mastering the Floorbook Approach
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Mentoring</span> Leadership development
                      <br />
                      • Develop mentoring and coaching skills
                      <br />
                      • Contribute to IBL research and innovation
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Innovation</span> Research & development
                      <br />
                      • Create training materials and resources
                      <br />
                      • Lead IBL implementation in educational settings
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Knowledge</span> Expert understanding
                      <br />
                      • Successfully mentor colleagues in IBL implementation
                      <br />
                      • Contribute to IBL research and development
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mt-2">Skills</span> Mentoring & innovation
                      <br />
                      • Create and deliver effective training programs
                      <br />
                      • Lead IBL initiatives in educational settings
                      <br />
                      • Innovate and adapt IBL approaches for different contexts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Learning Structure</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Each course is carefully structured with comprehensive modules that include various learning activities, resources, and assessment opportunities to ensure a complete learning experience.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[1200px] border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-1 text-center w-64">Course & Module</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Introduction</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Key Concepts</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Case Study</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Activity</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Reflection</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Curriculum Links</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-48">Additional Resources</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Foundation Level */}
                  <tr className="bg-blue-50">
                    <td colSpan={8} className="border border-gray-200 px-4 py-1 font-bold text-center">
                      Foundations of IBL
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 1: IBL vs Me-BL
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Welcome to IBL with Dr. Warden
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Core principles and philosophy
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Compare IBL and Me-BL approaches
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Expert explanations of key differences
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Teacher's journey from traditional to IBL
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Success stories and challenges
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Practice basic IBL techniques
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Create first IBL portfolio entry
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Daily journal tracking understanding
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Weekly discussion sharing insights
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">National</span> Curriculum alignment guide
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Outcomes mapping tool
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Essential IBL books and articles
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert interviews and demonstrations
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> IBL planning templates
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 2: IBL Beliefs
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Core beliefs of IBL educators
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Understanding belief systems
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Explore beliefs through exercises
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Belief systems in practice
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Teacher's belief implementation journey
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Review implementation challenges
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Practice belief-based teaching
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Create belief system portfolio
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Belief reflection journal
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Weekly belief discussion
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Belief system alignment
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Outcomes mapping
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Belief-based teaching resources
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert interviews on beliefs
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Belief system templates
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 3: IBL Skills
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Essential IBL educator skills
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Skills development framework
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Skill assessment exercises
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Skills in action demonstrations
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Skills development journey
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Skills implementation review
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Practice essential skills
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Skills portfolio development
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Skills reflection journal
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Skills practice discussion
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Skills alignment guide
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Skills outcomes mapping
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Skills development resources
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert skill demonstrations
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Skills assessment templates
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 4: Practical Implementation
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> IBL implementation overview
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Implementation strategies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Implementation planning
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Context-specific strategies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Implementation success stories
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Context-specific challenges
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Practice implementation strategies
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Create implementation plan
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Implementation reflection
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Strategy sharing discussion
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Implementation alignment
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Implementation outcomes
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Implementation resources
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert implementation guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Implementation templates
                    </td>
                  </tr>

                  {/* Beginner Level */}
                  <tr className="bg-blue-50">
                    <td colSpan={8} className="border border-gray-200 px-4 py-1 font-bold text-center">
                      My First Floorbook & Talking Tub
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 1: Introduction to Floorbooks
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> What is a Floorbook?
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Floorbook basics and benefits
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Explore Floorbook examples
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Key components demonstration
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> First Floorbook journey
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Common challenges and solutions
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Create sample pages
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Plan first Floorbook
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Document learning process
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Share experiences
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Documentation requirements
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Evidence collection
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Floorbook guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert tips
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Templates and examples
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 2: Talking Tubs
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Introduction to Talking Tubs
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Purpose and benefits
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Plan Talking Tub sessions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Effective questioning techniques
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Successful Talking Tub examples
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Discussion strategies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Practice sessions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Create first Talking Tub
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Session reflections
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Share outcomes
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Communication goals
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Language development
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Questioning guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Best practices
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Planning templates
                    </td>
                  </tr>

                  {/* Intermediate Level */}
                  <tr className="bg-blue-50">
                    <td colSpan={8} className="border border-gray-200 px-4 py-1 font-bold text-center">
                      Advanced Documentation
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 1: Digital Documentation
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Digital tools overview
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Technology integration
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Tool exploration
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Software tutorials
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Digital transformation
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Implementation strategies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Tool practice
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Create digital portfolio
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Tool effectiveness
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Share experiences
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Digital literacy
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Technology outcomes
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Digital guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert tutorials
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Software resources
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 2: Learning Stories
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Storytelling in education
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Narrative approaches
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Story structure
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Writing techniques
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Story examples
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Impact assessment
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Story writing
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Create first story
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Writing process
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Peer review
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Writing goals
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Communication skills
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Writing guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert examples
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Story templates
                    </td>
                  </tr>

                  {/* Advanced Level */}
                  <tr className="bg-blue-50">
                    <td colSpan={8} className="border border-gray-200 px-4 py-1 font-bold text-center">
                      Mastering the Floorbook Approach
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 1: Mentoring Skills
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Mentoring fundamentals
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Coaching strategies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Role-play scenarios
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Expert mentoring
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Mentoring journeys
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Success factors
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Practice sessions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Mentoring plan
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Progress tracking
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Share experiences
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Leadership goals
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Professional development
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Mentoring guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert advice
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Planning resources
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      Module 2: Research & Innovation
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Research methods
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Reading</span> Innovation in education
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">Interactive</span> Research planning
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Video</span> Case studies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Real-world</span> Research projects
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Analysis</span> Impact studies
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1">Group</span> Project development
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Individual</span> Research proposal
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1">Individual</span> Research journal
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Group</span> Findings discussion
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-1">Standards</span> Research goals
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Learning</span> Innovation outcomes
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Reading</span> Research guides
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1">Video</span> Expert insights
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Tools</span> Research templates
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'scoring' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Reflection Scoring Guide</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our Olympic medal-based scoring system recognizes achievement at each level, with specific criteria for Gold, Silver, and Bronze medals based on the depth of understanding and application of IBL principles.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[1200px] border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-1 text-center w-64">Level & Course</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-96">Gold Medal</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-96">Silver Medal</th>
                    <th className="border border-gray-200 px-4 py-1 text-center w-96">Bronze Medal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Foundation</span>
                      <br />
                      Foundations of IBL
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Mastery</span> Deep understanding of IBL principles
                      <br />
                      • Demonstrates deep understanding of IBL vs Me-BL differences
                      <br />
                      • Shows clear evidence of belief system transformation
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Application</span> Confident implementation
                      <br />
                      • Masterfully applies all seven essential IBL skills
                      <br />
                      • Creates comprehensive implementation plans
                      <br />
                      • Provides detailed, insightful reflections with examples
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-1">Understanding</span> Good grasp of principles
                      <br />
                      • Shows good understanding of IBL vs Me-BL differences
                      <br />
                      • Demonstrates belief system awareness
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">Application</span> Basic implementation
                      <br />
                      • Applies most essential IBL skills effectively
                      <br />
                      • Creates practical implementation plans
                      <br />
                      • Provides thoughtful reflections with some examples
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-1">Understanding</span> Basic understanding
                      <br />
                      • Shows basic understanding of IBL vs Me-BL differences
                      <br />
                      • Beginning to develop belief system awareness
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">Application</span> Needs support
                      <br />
                      • Demonstrates some essential IBL skills
                      <br />
                      • Creates basic implementation plans
                      <br />
                      • Provides simple reflections
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Beginner</span>
                      <br />
                      My First Floorbook & Talking Tub
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Mastery</span> Comprehensive Floorbooks
                      <br />
                      • Creates detailed, child-centered Floorbooks
                      <br />
                      • Effectively implements Talking Tubs with rich discussions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Application</span> Independent implementation
                      <br />
                      • Shows excellent documentation skills
                      <br />
                      • Demonstrates strong child voice capture
                      <br />
                      • Provides comprehensive planning evidence
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-1">Understanding</span> Good Floorbook creation
                      <br />
                      • Creates good Floorbooks with some child input
                      <br />
                      • Implements Talking Tubs with basic discussions
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">Application</span> Needs some guidance
                      <br />
                      • Shows adequate documentation skills
                      <br />
                      • Captures some child voice
                      <br />
                      • Provides basic planning evidence
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-1">Understanding</span> Basic Floorbooks
                      <br />
                      • Creates simple Floorbooks
                      <br />
                      • Needs support with Talking Tubs
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">Application</span> Needs significant support
                      <br />
                      • Shows basic documentation skills
                      <br />
                      • Beginning to capture child voice
                      <br />
                      • Provides minimal planning evidence
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Intermediate</span>
                      <br />
                      Advanced Documentation
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Mastery</span> Advanced techniques
                      <br />
                      • Masters digital documentation tools
                      <br />
                      • Creates sophisticated learning stories
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Application</span> Digital integration
                      <br />
                      • Shows excellent integration of multiple documentation methods
                      <br />
                      • Demonstrates strong analysis skills
                      <br />
                      • Provides comprehensive evidence of learning
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-1">Understanding</span> Good technique use
                      <br />
                      • Uses digital tools effectively
                      <br />
                      • Creates good learning stories
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">Application</span> Needs practice
                      <br />
                      • Shows good integration of documentation methods
                      <br />
                      • Demonstrates basic analysis skills
                      <br />
                      • Provides adequate evidence of learning
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-1">Understanding</span> Basic techniques
                      <br />
                      • Uses basic digital tools
                      <br />
                      • Creates simple learning stories
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">Application</span> Needs more practice
                      <br />
                      • Shows basic documentation integration
                      <br />
                      • Beginning to develop analysis skills
                      <br />
                      • Provides minimal evidence of learning
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-1 font-medium">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">Advanced</span>
                      <br />
                      Mastering the Floorbook Approach
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">Mastery</span> Expert mentoring
                      <br />
                      • Successfully mentors multiple colleagues
                      <br />
                      • Contributes to research and innovation
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">Application</span> Research leadership
                      <br />
                      • Creates comprehensive training materials
                      <br />
                      • Demonstrates leadership in IBL implementation
                      <br />
                      • Provides evidence of impact on practice
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-1">Understanding</span> Good mentoring
                      <br />
                      • Mentors colleagues effectively
                      <br />
                      • Participates in research activities
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">Application</span> Needs experience
                      <br />
                      • Creates good training materials
                      <br />
                      • Shows leadership potential
                      <br />
                      • Provides some evidence of impact
                    </td>
                    <td className="border border-gray-200 px-4 py-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-1">Understanding</span> Basic mentoring
                      <br />
                      • Beginning to mentor others
                      <br />
                      • Shows interest in research
                      <br />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">Application</span> Needs development
                      <br />
                      • Creates basic training materials
                      <br />
                      • Demonstrates potential for leadership
                      <br />
                      • Provides limited evidence of impact
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesIntroduction; 