import React from 'react'

const AboutInfo = (props) => {
  return (
    // <div  className='border-2 border-zinc-100 text-xl p-5 mx-5 my-5 rounded-xl bg-stone-50'> 
    //    <div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} />
    // </div>
    <div  className='border-2 border-sky-900 text-xl p-5 mx-5 my-5 rounded-xl bg-sky-100  text-gray-700 font-base h-fit'> 
    <div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} />
 </div>
  )
}

export default AboutInfo
