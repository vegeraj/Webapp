import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      bio: "Frontend developer",
      imageUrl: "https://picsum.photos/200?random=1"
    },
    {
      id: 2,
      name: "Michael Smith",
      bio: "Full-stack engineer",
      imageUrl: "https://picsum.photos/200?random=2"
    },
    {
      id: 3,
      name: "Emma Williams",
      bio: "UI designer",
      imageUrl: "https://picsum.photos/200?random=3"
    },
    {
      id: 4,
      name: "David Spark",
      bio: "Backend developer",
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
