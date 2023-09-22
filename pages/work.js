import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
const Work = () => {

  const projects = [
    {
      id: 'KindCompass',
      projectName: 'Volunteers app',
      about: `A social media that helps users
      find volunteer events depending on their skills. Users can view events in a list and map
      modes, respond to events, create events, check responses to their events.`,
      technologies: ['Javascript', 'React.js', 'CSS', 'Python', 'Django', 'Django REST', 'MySQL'],
      projectPhoto: ['kind-compass', 'kind-compass2', 'kind-compass3']
    },
    {
      id: 'Restaurant',
      projectName: 'Restaurant website',
      about:  `A simple responsive restaurant website. My first project since I had started learning frontend development`,
      technologies: ['HTML', 'CSS', 'Javascript'],
      projectPhoto: ['restaurant-website', 'restaurant-website2']
    },
    // {
    //   id: 'Calculator',
    //   projectName: 'Calculator',
    //   about: 'I made it just for fun :)',
    //   technologies: ['Javascript', 'React.js', 'Tailwind'],
    //   projectPhoto: ['calculator']
    // },
  ];
  return (
    <div className='flex flex-col items-center pt-16 px-8 '>
      {projects.map((project) => (
      <div className='h-[calc(100vh-80px)] flex justify-center  gap-10 '>
        <div className='w-[480px] flex flex-col gap-5  text-gray-700 px-5 mt-20 '>
          <p className='lg:text-2xl text-xl font-medium text-center'>{project.projectName}</p>
          <p className='lg:text-xl text-sm font-normal'>{project.about}</p>
         <div className='lg:text-base text-xs font-normal flex gap-2 flex-wrap'> 
         {project.technologies.map((technology)=>(
         <div className='bg-sky-200 rounded-lg w-fit h-fit break-keep p-1'>
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
        <SwiperSlide>
        <Image src={"/"+projectPhoto +".png"} width={720} height={405} />
        </SwiperSlide>
        ))}
        {/* <SwiperSlide>
        <Image src="/restaurant-website2.png" width={720} height={405} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/kind-compass3.png" width={720} height={405} />
        </SwiperSlide> */}
      </Swiper>
    </div>
      </div>
      ))}
    </div>

  )
}

export default Work
