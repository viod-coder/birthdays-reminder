import React, { useState } from 'react'
import './Dashboard.css'
import mydata from '../data'
import Person from './Person'

const Dashboard = () => {
  const [person, SetPerson] = useState(mydata)
  const cleardata = () => SetPerson([])
  return (
    <section>
      <h2>{person && person.length} birthdays today</h2>
      {person.length
        ? mydata.map((pers) => <Person key={pers.id} {...pers}></Person>)
        : null}

      <button onClick={cleardata}>clear all</button>
    </section>
  )
}

export default Dashboard
