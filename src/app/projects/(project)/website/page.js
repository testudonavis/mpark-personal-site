import Image from 'next/image';

import websitePic from 'pub/website.png';

const gitHubLink = "https://github.com/testudonavis/mpark-personal-site"
const sketchesLink = "https://drive.google.com/drive/folders/1AS-DVTbEN7xme3h_qWRyDPyIrOS53zQf?usp=drive_link"

const skills = [
  "ReactJs",
  "NextJs",
  "TailwindCSS",
  "Component Architecture",
  "HTML",
  "CSS",
  "Frontend",
  "Dynamic Routing",
]

const textSections = [
  "Built with React, Tailwind CSS, and Next.js. Deployed on Vercel. Check out the github link.",
  <>
    Areas to improve:
    <ul className="pl-5 list-disc">
      <li>Site Speed/Image optimization</li>
      <li>Advanced analytics</li>
      <li>Code lint</li>
    </ul>
  </>,
  "Started: Nov 2003"
]


function Skills() {
  const colors = [
    'bg-pinwheel-blue',
    'bg-pinwheel-green',
    'bg-pinwheel-red',
    'bg-pinwheel-teal',
    'bg-pinwheel-purp',
    'bg-pinwheel-oj',
    'bg-pinwheel-green',
    'bg-pinwheel-slate',
  ]
  return (
    <div className="flex flex-row flex-wrap w-80 pl-5">
      {skills.map((skill, index) => {
        let color = colors[index % colors.length];
        return (
          <div key={skill} className={`${color} rounded text-xs text-offset-text p-1 m-0.5`}>
            {skill}
          </div>
        );
      })}
    </div>
  )
}


export default function Website() {
  return (
    <>
      <div className="flex flex-row justify-center items-center p-2">
        <div className="text-lg text-prim-text-2 p-4">
          Personal Website
        </div>
        <Image 
          src={websitePic}
          quality={75}
          className= "border-4 border-pic-frame w-2/5"
          alt="website"
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col text-secondary-text w-80 md:w-96 mx-auto pt-10">
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="text-sm p-2 underline">
          Github
        </a>
        <a href={sketchesLink} target="_blank" rel="noopener noreferrer" className="text-sm p-2 underline">
          Sketches
        </a>
        <div className="text-sm p-2">
          Skills:
        </div>
        <Skills />
        <div className="text-xs mt-5">
          {textSections.map(textSection => {
            return (
              <div className="mb-5">
                {textSection}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
