import { useState } from 'react'
import './App.css'
import Form from './Form'
import TodoDisp from "./TodoDisp"


function App() {
  const [list,setList]=useState([])

  return (
    <>
      <Form setList={setList} />
      <TodoDisp list={list}/>

    </>
  )
}

export default App
