'use client'
import React from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

const drivingCategories = [
  {
    title: 'Category A1 and A2',
    image: '/motorcycle.jpg',
    description:
      'Learn how to ride and handle lightweight and regular motorcycles safely. Category A1 covers light motorcycles up to 125cc, while Category A2 includes standard motorcycles as defined by NTSA.',
  },
  {
    title: 'Category A3',
    image: '/tuktuk.jpg',
    description:
      'Learn to operate three-wheeled vehicles (tuk-tuks) confidently and safely. This category covers motorized tricycles used for personal or commercial transport.',
  },
  {
    title: 'Category B1 and B2',
    image: '/saloon_car.webp',
    description:
      'Master driving small light vehicles such as saloon cars and station wagons. Category B covers vehicles up to 3,500 kg and eight passengers.',
  },
  {
    title: 'Category B3',
    image: '/taxi.jpg',
    description:
      'Learn essential skills for operating professional cab and taxi services with emphasis on safety and navigation.',
  },
  {
    title: 'Category C1 and C',
    image: '/truck.jpg',
    description:
      'Build your expertise in handling heavy commercial vehicles and lorries. Learn load management and long-distance driving.',
  },
  {
    title: 'Category D',
    image: '/matatu.png',
    description:
      'Operate public service vehicles such as vans, minibuses, and buses with professionalism and safety.',
  },
]

const computerPackages = [
  { title: '1. Introduction to Computers', image: '/computer-skills.png', description: 'Understand basic computer concepts and essential operations.' },
  { title: '2. Computer Systems & Hardware', image: '/motherboard.png', description: 'Learn how computer components function and interact.' },
  { title: '3. Microsoft Windows', image: '/windows-logo.png', description: 'Navigate and manage files efficiently within Windows.' },
  { title: '4. Microsoft Word', image: '/word.png', description: 'Create and format professional documents with ease.' },
  { title: '5. Microsoft Excel', image: '/excel-file.png', description: 'Master spreadsheets for data analysis and record management.' },
  { title: '6. Microsoft Access', image: '/microsoft-access.png', description: 'Learn to design and manage databases efficiently.' },
  { title: '7. Microsoft Publisher', image: '/microsoft-publisher.png', description: 'Design flyers, brochures, and marketing materials easily.' },
  { title: '8. PowerPoint', image: '/powerpoint.png', description: 'Create engaging presentations with visuals and animations.' },
  { title: '9. Email and Internet', image: '/globe (1).png', description: 'Learn to browse safely and communicate effectively online.' },
  { title: '10. Computer Maintenance', image: '/maintanance.png', description: 'Understand computer care, troubleshooting, and repair basics.' },
]

const aiPackages = [
  {
    title: '1. Introduction to AI & its Basics',
    image: '/presentation.png',
    description: 'Get started with Artificial Intelligence by understanding key concepts, history, and real-world applications.',
  },
  {
    title: '2. Prompt Engineering',
    image: '/gear.png',
    description: 'Learn how to craft powerful prompts to get accurate, creative, and efficient results from AI models.',
  },
  {
    title: '3. Image Generation',
    image: '/image.png',
    description: 'Create stunning visuals using AI tools through guided projects and exercises.',
  },
  {
    title: '4. Video Generation',
    image: '/clapperboard.png',
    description: 'Generate professional-grade videos with AI tools that simplify storytelling, animation, and marketing visuals.',
  },
  {
    title: '5. Research & Writing Assistants',
    image: '/research.png',
    description: 'Discover how to create AI-powered agents that assist in research, writing, and productivity tasks.',
  },
  {
    title: '6. AI Models Overview',
    image: '/ai-cloud.png',
    description: 'Explore popular AI models like ChatGPT, Gemini, Perplexity, Grok, Copilot, Meta AI, and DeepSeek — their strengths and real-world uses.',
  },
]

const Page = () => {
  return (
    <div id="courses" className="scroll-smooth">
      <div className="mt-20">
        <h1 className="flex items-center justify-center mt-5 text-gray-900 font-bold text-3xl">
          COURSES WE OFFER
        </h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 m-10">
          {/* Driving */}
          <div className="flex flex-col bg-gray-900 p-5 space-y-5 items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <Image src="/driving.png" alt="Driving Vector" width={250} height={250} className="mt-4 rounded-xl object-contain w-60 md:w-72 lg:w-80" />
            <h1 className="text-white font-bold text-xl md:text-2xl">Driving Courses</h1>
            <p className="text-gray-300 mb-4 max-w-sm text-center">
              Learn to drive confidently and safely with our professional instructors. We offer flexible classes tailored to your schedule.
            </p>
            <ScrollLink
              to="driving"
              smooth={true}
              duration={600}
              offset={-80}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors font-medium cursor-pointer"
            >
              Learn More
            </ScrollLink>
          </div>

          {/* Computer */}
          <div className="flex flex-col bg-gray-900 p-5 space-y-5 items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <Image src="/computer.jpg" alt="Computer Vector" width={250} height={250} className="mt-4 rounded-xl object-contain w-60 md:w-72 lg:w-80" />
            <h1 className="text-white font-bold text-xl md:text-2xl">Computer Course</h1>
            <p className="text-gray-300 mb-4 max-w-sm text-center">
              Master essential computer skills with hands-on training in Microsoft Office, typing, and computer literacy.
            </p>
            <ScrollLink
              to="computer"
              smooth={true}
              duration={600}
              offset={-80}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors font-medium cursor-pointer"
            >
              Learn More
            </ScrollLink>
          </div>

          {/* AI */}
          <div className="flex flex-col bg-gray-900 p-5 space-y-5 items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <Image src="/ai.jpg" alt="AI Vector" width={250} height={250} className="mt-4 rounded-xl object-contain w-40 md:w-50 lg:w-60" />
            <h1 className="text-white font-bold text-xl md:text-2xl">Artificial Intelligence (AI) Course</h1>
            <p className="text-gray-300 mb-4 max-w-sm text-center">
              Dive into the future of technology by mastering the core AI tools, models, and techniques shaping industries today.
            </p>
            <ScrollLink
              to="AI"
              smooth={true}
              duration={600}
              offset={-80}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors font-medium cursor-pointer"
            >
              Learn More
            </ScrollLink>
          </div>
        </div>

        {/* Driving Section */}
        <section id="driving" className="scroll-mt-28 w-full p-6 bg-gray-900 flex flex-col space-y-5 justify-center items-center">
          <h1 className="text-white font-bold text-xl md:text-3xl">Driving Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drivingCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                <div className="relative w-64 h-40 mb-4">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover rounded-xl" />
                </div>
                <h1 className="text-orange-500 font-extrabold text-xl md:text-2xl mb-2">{cat.title}</h1>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Computer Section */}
        <section id="computer" className="scroll-mt-28 flex flex-col space-y-5 justify-center items-center mt-10 mb-20">
          <h1 className="text-orange-500 font-bold text-xl md:text-3xl">Computer Courses</h1>
          <p className="text-gray-700 max-w-2xl text-center">
            Our computer course equips you with essential digital skills for today’s technology-driven world, covering the following packages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-5">
            {computerPackages.map((pkg, index) => (
              <div key={index} className="bg-blue-100 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <div className="rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4">
                  <Image src={pkg.image} alt={pkg.title} width={50} height={50} />
                </div>
                <h1 className="text-orange-500 font-bold">{pkg.title}</h1>
                <p className="text-gray-900 text-sm mt-2">{pkg.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Section */}
        <section id="AI" className="scroll-mt-28 flex flex-col space-y-5 justify-center items-center mt-10 mb-20">
          <h1 className="text-orange-500 font-bold text-xl md:text-3xl">Artificial Intelligence (AI) Courses</h1>
          <p className="text-gray-700 max-w-2xl text-center">
            Step into the world of Artificial Intelligence — where technology meets creativity. These courses introduce you to the tools and skills that drive innovation in the AI era.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
            {aiPackages.map((pkg, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <div className="rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4">
                  <Image src={pkg.image} alt={pkg.title} width={50} height={50} />
                </div>
                <h1 className="text-orange-500 font-bold">{pkg.title}</h1>
                <p className="text-white text-sm mt-2">{pkg.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
