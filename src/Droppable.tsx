import React from 'react'

const Droppable: React.FC = () => {
  return (
    <div
      className="droppable"
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDrop={(e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('text/plain')
        console.log(data)
      }}
    >
      Drop here!
    </div>
  )
}

export default Droppable
