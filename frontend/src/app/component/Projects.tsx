'use client'
import Link from "next/link"
import Project from "../data/data.json"
import { BackgroundGradient } from "./ui/background-gradient";
import Scroll from "./Scroll";

interface Course
{
    id:number,
            title:string,
            link:string,
            discription:string,
            price:string,
            img:string,
            isFeatured:boolean
}

function Projects(){
   const featuredCourses= Project.courses.filter((course) => course.isFeatured);

  return (
    <div className=" py-12 bg-gradient-to-t from-gray-900 to-black">
       <div>
        
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">project</h2>
            
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">All projects</p>
        </div>
       </div>
       <div className="mt-10 p-4"> 
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course)=>(
      <div key={course.id} className="flex justify-center">
        <BackgroundGradient className="flex  flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
           <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
           <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.discription}</p>
           <Link className="text-blue-200" href={`${course.link}`}> Visit</Link>

          </div>
        </BackgroundGradient>
      </div>
        )
    )}
        </div>
        </div>
       <div className="mt-20 text-center">
        <Link href={"/about"} >
             <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Read More
        </button>
        </Link>
        </div> 
     
    </div>
  )
}

export default Projects
