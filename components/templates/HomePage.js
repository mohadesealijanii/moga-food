import React from 'react'
import Banner from '../modules/Banner'
import Attributes from '../modules/Attributes'
import Definition from '../modules/Definition'
import Instruction from '../modules/Instruction'
import Guide from '../modules/Guide'

function HomePage() {
  return (
    <div>
      <Banner />
      <Attributes />
      <Definition />
      <Instruction />
      <Guide/>
    </div>
  )
}

export default HomePage