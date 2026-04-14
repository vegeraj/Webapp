import React, { useState } from 'react'

function ProfileCard({ name, bio, imageUrl }) {
  const [likes, setLikes] = useState(0)

  return (
    <div>
      <img 
        src={imageUrl} 
        alt={`${name}'s profile picture`} 
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button onClick={() => setLikes(likes + 1)}>Like 👍</button>
      <p>Likes: {likes}</p>
    </div>
  )
}
}

export default ProfileCard
