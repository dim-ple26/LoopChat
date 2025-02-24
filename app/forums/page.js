import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "/python.jpg",
    desc: "Let's discuss everything related to Python",
    slug:"python-discuss"
  },
  {
    text: "JavaScript",
    img: "/js.png",
    desc: "All about JavaScript, from basics to advanced topics",
    slug:"js-discuss"
  },
  {
    text: "Machine Learning",
    img: "/ml.png",
    desc: "Discuss ML algorithms, models, and real-world applications",
    slug:"ml-discuss"
  },
  {
    text: "Web Development",
    img: "/webdev.png",
    desc: "Front-end, back-end, and full-stack development discussions",
    slug:"web-discuss"
  },
  {
    text: "Cyber Security",
    img: "/cybersecur.webp",
    desc: "Explore security practices, ethical hacking, and network safety",
    slug:"cyber-discuss"
  },
  {
    text: "DevOps",
    img: "/devops.png",
    desc: "CI/CD, cloud computing, automation, and infrastructure as code",
    slug:"devops-discuss"
  }
];

const Forums = () => {
  return (
    <div className='container  mx-auto  bg-gradient-to-r from-rose-200 to-purple-400'>
    <h1 className='text-5xl text-center font-semibold flex gap-2 justify-center mb-10'>Discussion Forums</h1>
    <div className='flex flex-wrap justify-center'>
      {topics.map((topic)=>{
        return <div key={topic.img} className='shadow-md hover:shadow-lg transition-shadow duration-300 bg-white w-1/4 m-4 flex justify-center flex-col items-center py-12 rounded-xl gap-6 cursor-pointer' >
          <Image src={topic.img} width={74} height={74} className=''></Image>
          <h2 className='text-2xl font-semibold'>{topic.text}</h2>
          <p className='px-5 text-center text-gray-600'>{topic.desc}</p>
          <Link href={`/forum/${topic.slug}`}>
          <Button className='px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full  transition-colors duration-200'>Discuss Now</Button>
          </Link>
               </div>
      })}
    </div>
    </div>
  )
}

export default Forums