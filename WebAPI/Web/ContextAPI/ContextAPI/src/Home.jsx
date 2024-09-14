import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context';



function Home() {

  let {state, dispatch} = useContext(GlobalContext);
  console.log(state);

  let {age, username} = state;

function changeAge(){
    dispatch({
    type: 'CHANGE_AGE',
    payload: 567
  })
}

useEffect(()=>{
  changeAge()
},[])

  

  return (
    <>
    <h1>User Name: {username}</h1>
    <h1>Age: {age}</h1>
     
    </>
  )
}

export default Home
