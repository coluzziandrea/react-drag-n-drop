import React from 'react'

import './App.css'
import Draggable from './Draggable'
import Droppable from './Droppable'

const App: React.FC = () => {
  return (
    <div className="container">
      <Draggable />
      <Droppable />
    </div>
  )
}

export default App
