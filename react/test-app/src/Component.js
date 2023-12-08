import React from 'react'
import { useState } from 'react'
const Component = () => {
  const [name,setName]=useState("earn")
  function handleNameChange(e) {
    e.preventDefault()
    const names =["earn","buy","sell"]
    const int =Math.floor(Math.random()*3)
    setName(names[int])
    console.log(names[int])
  }
  return (  
    <main>
      <p>let {name} money</p>
      <button onClick={handleNameChange}>subscribe</button>
    </main>
  )
}

export default Component