import React from 'react'

const Draggable: React.FC = () => {
  return (
    <div
      className="draggable"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', 'Hello, World!')
      }}
    >
      Drag me!
    </div>
  )
}

export default Draggable
