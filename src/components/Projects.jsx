import { Card } from './Card'
import { SimpleLayout } from './SimpleLayout'
import {
  GitHubIcon,
} from './SocialIcons'
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

// const projects = [
//   {
//     name: 'Planetaria',
//     description:
//       'Creating technology to empower civilians to explore space on their own terms.',
//     link: { href: 'http://planetaria.tech' },
//   },
//   {
//     name: 'Animaginary',
//     description:
//       'High performance web animation library, hand-written in optimized WASM.',
//     link: { href: '#' },
//   },
//   {
//     name: 'HelioStream',
//     description:
//       'Real-time video streaming library, optimized for interstellar transmission.',
//     link: { href: '#' },
//   },
//   {
//     name: 'cosmOS',
//     description:
//       'The operating system that powers our Planetaria space shuttles.',
//     link: { href: '#' },
//   },
//   {
//     name: 'OpenShuttle',
//     description:
//       'The schematics for the first rocket I designed that successfully made it to orbit.',
//     link: { href: '#' },
//   },
// ]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

export default function Projects() {

  const getProjects = async () =>{
    await getDocs(collection(db, 'projects'))
              .then(querySnapshot => {
                  const data = querySnapshot.docs.map(doc => {
                      return {
                          ...doc.data(),
                          id: doc.id
                      }
                  })
                  setProjects(data)
              })
  }
  
  useEffect(()=>{
    getProjects()
  },[])
  
  const [projects,setProjects] = useState([])



  return (
    <SimpleLayout
      title="Embarking on My Digital Odyssey: Showcasing Projects That Left a Mark on the Code Canvas"
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <SocialLink
                href={project.link.href}
                target="_blank"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <a href={project.link.href} target="_blank"><span className="ml-2">{project.link.label || 'github.com'}</span></a>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
