import React from 'react'
import Navbar from '../Nav/Nav'
import Accueil from '../Accueil/Accueil'
import Slider from '../Sliders/Slider'
import Popular from '../Popular/Popular'

export default function Home() {
  return (<>
    <Navbar />
    <Accueil />
    <Slider />
    <Popular/>
  </>
    
  )
}
