import React, { useState } from 'react'

function ProfileCard() {
  const [likes, setLikes] = useState(0)

  return (
    <div>
      <img 
        src="https://picsum.photos/200" 
        alt="Profile picture" 
      />
      <h2>John Doe</h2>
      <p>A passionate web developer with a love for creating beautiful and functional user interfaces. Always learning and exploring new technologies.</p>
      <button onClick={() => setLikes(likes + 1)}>Like 👍</button>
      <p>Likes: {likes}</p>
    </div>
  )
}

export default ProfileCard
