import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import AboutInfo from '../components/aboutInfo';
import {FaAngleRight} from 'react-icons/fa';

const About = () => {
  const [activeSection, setActiveSection] = React.useState();
  const sections = [
    {
      id: 'studies',
      label: 'Studies',
      text: `My degree is Information System and technologies. <br> <br> Degree focuses on the study of how technology can be used to manage and process information within organizations.<br> 
      It covers a range of topics including database management, software development, cybersecurity, and data analysis. `,
    },
    {
      id: 'hobby',
      label: 'Hobby',
      text:  `I really like sport. It helps me to handle stress, increases my mood and of course keeps body fit.<br>
       I\'m a professional table tennis and volleyball player`,
    },
    {
      id: 'interestingFacts',
      label: 'Interesting Facts',
      text: 'Here are some interesting facts about me.',
    },
  ];
  const toggleSection = (sectionId) => {
    setActiveSection(sectionId === activeSection ? null : sectionId);
  };

  return (
    <div className='px-8 text-gray-700 '>
      <div className='mt-6 sm:mt-16 mb-16 flex justify-center '>
      
       <h1 className='w-3/6 lg:text-5xl text-4xl font-medium'>
       <Typewriter options={{delay:10}}
        onInit={(typewriter) => {
          typewriter.typeString('Here you can know bit more about me!')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
        </h1> 
      </div>
      <div className='flex flex-col gap-5 h-screen'>
      {sections.map((section) => (
          <div className='lg:text-3xl text-2xl font-normal' key={section.id}>
            <div className='flex  cursor-pointer items-center' onClick={() => toggleSection(section.id)}>{section.label} <FaAngleRight className='mt-1 hover:rotate-[360deg] duration-700' size={28} style={{ alignSelf: 'center'}}/> </div>
            
            {activeSection === section.id && <AboutInfo dangerouslySetInnerHTML={{ __html: section.text }}   />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
