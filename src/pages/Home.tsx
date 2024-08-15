import React from 'react'
import { Collaborator, Community, Footer, Hero, Member, TalentPool } from '../components'

const Home: React.FC = () => {
  return (
    <div className='space-y-10'>
      <Hero />
      <Community />
      <TalentPool />
      <Collaborator />
      <Member />
      <Footer />
    </div>
  )
}

export default Home