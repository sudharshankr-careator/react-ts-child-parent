import React, {Component, useState} from 'react';

export default function Hello({name}) {
  const [changeName, setChangeName] = useState('');
  const change=(e)=> {
    e.preventDefault(e)
    name(changeName)
  }
  return (

    <div>
      <form onSubmit={(e)=>change(e)} >
      <input type="text" placeholder='Enter Name' onChange={(e)=> setChangeName(e.target.value)} />
      <button type='submit'>Change Name</button>
      </form>
    </div>
  )

}
