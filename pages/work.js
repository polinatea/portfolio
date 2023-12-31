import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
const Work = () => {

  const projects = [
    {
      id: 'LovingHut',
      projectName: 'Loving hut',
      link: 'https://restaurant-nu-five.vercel.app/',
      about: `A website for the restaurant Loving Hut with menu filter by category`,
      technologies: ['Typescript', 'Next.js', 'Tailwind'],
      projectPhoto: ['loving-hut', 'loving-hut2', 'loving-hut3']
    },
    {
      id: 'KindCompass',
      projectName: 'Volunteers app',
      link: 'https://github.com/polinatea/volunteers-app',
      about: `A social media that helps users
      find volunteer events depending on their skills. Users can view events in a list and map
      modes, respond to events, create events, check responses to their events.`,
      technologies: ['Javascript', 'React.js', 'CSS', 'Python', 'Django', 'Django REST', 'MySQL'],
      projectPhoto: ['kind-compass', 'kind-compass2', 'kind-compass3']
    },
    {
      id: 'Restaurant',
      projectName: 'Restaurant website',
      link: 'https://polinatea.github.io/simple-restaurant-website/#',
      about:  `A simple responsive restaurant website. My first project since I had started learning frontend development`,
      technologies: ['HTML', 'CSS', 'Javascript'],
      projectPhoto: ['restaurant-website', 'restaurant-website2']
    },

  ];
  return (
    <div className='flex flex-col h-fit gap-20 sm:gap-0  px-8 pb-10'>
      {projects.map((project) => (
      // <div key={project.id} className='h-[calc(100vh-80px)] flex flex-col items-center lg:flex-row lg:justify-center  gap-10 '>
      <div key={project.id} className=' flex flex-col items-center lg:flex-row lg:justify-center  gap-10 sm:pt-20'>
        <div className='w-[360px]  xl:w-[540px] flex flex-col gap-5  text-gray-700 px-5  '>
          <Link href={project.link}><p className='lg:text-2xl text-xl font-medium text-center underline underline-offset-4'>{project.projectName}</p></Link>
          <p className='lg:text-xl text-sm font-normal'>{project.about}</p>
         <div className='lg:text-base text-xs font-normal flex gap-2 flex-wrap'> 
         {project.technologies.map((technology)=>(
         <div key={technology} className='bg-sky-200 rounded-lg w-fit h-fit break-keep p-1'>
          {technology}
          
         </div>
         ))}
         </div>
        </div>
        <div className=''>
          <Swiper
        pagination={{
        clickable: true,
        }}
        spaceBetween={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {project.projectPhoto.map((projectPhoto)=>(
        <SwiperSlide  key={projectPhoto}>
                  
<div className='relative w-[360px] h-[202.5px] md:w-[540px] md:h-[303.75px] xl:w-[720px] xl:h-[405px]'><Image src={"./"+projectPhoto +".png"} fill /></div>
        {/* <Image src={"/"+projectPhoto +".png"} width={720} height={405} /> */}
        
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
      ))}
    </div>
    

  )
}

export default Work