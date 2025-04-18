import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
export default function Form({setList}){
    const [newTodo,setNewTodo]=useState("")
    
    const handleAdd=(e)=>{
        setNewTodo(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setList(
            curr=>{
              return [...curr,{newTodo,id:uuidv4(),checked:false}]

            }
        )
        setNewTodo("")
    }
    return (
        <div >
            <form className='form' onSubmit={handleSubmit} action="">
                <label htmlFor="new-todo">New item</label>
                <input onChange={handleAdd} value= {newTodo} type="text" id="new-todo" />
                <button>Add</button>
            </form>
        </div>
    )
}
