import React from 'react'
import Fireworksitem from './fireworksitem'

const Fireworkslist = ({fireworks}) => (
  <div className="container">
    <h1>All Fireworks</h1>
    {fireworks.map(e => <Fireworksitem key={e.id} firework={e.name} />)}
  </div>
)

export default Fireworkslist