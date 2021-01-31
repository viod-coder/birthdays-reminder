import React from 'react'

const Person = ({ name, age, image }) => {
  return (
    <article className='mycard'>
      <img src={image} alt={name} />
      <div className='details'>
        <h3>{name}</h3>
        <span>{age}</span>
      </div>
    </article>
  )
}

export default Person
