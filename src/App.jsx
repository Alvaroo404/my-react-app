import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    
  return (
    <section className='App'>
      <TwitterFollowCard initialIsFollowing={true} userName="midudev"> 
        Álvaro
      </TwitterFollowCard>
      
      <TwitterFollowCard isFollowing={false} userName="midudev">
        Midu
      </TwitterFollowCard>

    
    </section>
  )
}
