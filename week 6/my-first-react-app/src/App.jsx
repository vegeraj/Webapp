import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      bio: "Frontend developer specializing in React and modern web technologies. Passionate about creating accessible and user-friendly interfaces.",
      imageUrl: "https://picsum.photos/200?random=1"
    },
    {
      id: 2,
      name: "Michael Chen",
      bio: "Full-stack engineer with expertise in Node.js and database design. Loves solving complex problems and optimizing performance.",
      imageUrl: "https://picsum.photos/200?random=2"
    },
    {
      id: 3,
      name: "Emma Williams",
      bio: "UX/UI designer turned developer. Focused on bridging the gap between design and code to create beautiful digital experiences.",
      imageUrl: "https://picsum.photos/200?random=3"
    },
    {
      id: 4,
      name: "David Rodriguez",
      bio: "Backend specialist with a passion for cloud architecture and DevOps. Always looking for ways to improve system reliability.",
      imageUrl: "https://picsum.photos/200?random=4"
    }
  ]

  return (
    <>
      <h1>Our Team</h1>
      <div>
        {teamMembers.map((member) => (
          <ProfileCard 
            key={member.id}
            name={member.name}
            bio={member.bio}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </>
  )
}

export default App
