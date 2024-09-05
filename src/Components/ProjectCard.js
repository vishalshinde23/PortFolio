import React from 'react'

function ProjectCard({
  data,currentCard,setCurrentCard
}) {
  return (
    <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"  className='bg-orange-200  place-items-center  hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]  w-[300px] h-[300px]     p-4 rounded-md'>
      <div className={` ${currentCard===data?.heading  ? "bg-stone-700 shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-blue-900-800"}`}
          onClick={()=>setCurrentCard(data?.heading)}>

      </div>
     
      
      <div className={`${currentCard===data?.heading ?"text-white":"text-slate-600"}    `}>
       {
        <img src={data?.src} className=' border-[1px] border-yellow-300 rounded-md h-[170px] w-[270px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'/>
       }
      </div>
      <div className={`${currentCard===data?.heading ?"text-white":"text-white"} hover:${data?.heading} text-center text-white  mt-2 bg-blue-900   p-2 rounded-md mb-2  font-bold`}>
     {data?.heading}
      </div>
      
      
      <div className='flex flex-row justify-between px-4 gap-3'>
      
        <div className={`${currentCard===data?.heading ?"text-white":"text-white"} bg-gradient-to-r from-sky-600 to-blue-900    text-xl  px-4 py-2 rounded-md`}>
      <a href={data?.demo} target="_blank">demo</a>
        </div>
        <div className={`${currentCard===data?.heading ?"text-white":"text-white"} bg-gradient-to-r from-sky-600 to-blue-900 border-white text-xl  px-4 p-2 rounded-md`}>
      <a href={data?.code} target="_blank">code</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard
