const TodoDisp =({list,setList})=>{
    const handleDel=(id)=>{
        setList(curr=>{
           return curr.filter(i=>{
            return  i.id !== id
           })
        })
    }

    const handleCheck=(id)=>{
        setList(curr =>
            curr.map(item =>
              item.id === id ? { ...item, checked: !item.checked } : item
            )
          );
    }
    return (
        <div>
            <h1>Todo list</h1>
            {list.length===0 && <p>NO TO-DOS</p> }
            <div className="container">
                {
                    list.map(
                        obj=>{
                            return <div>
                                <button onClick={()=>handleCheck(obj.id)}>{obj.checked?"✅":"❌"}</button>
                                <div>{obj.newTodo}</div>
                                <button onClick={()=>handleDel(obj.id)}>delete</button>
                                
                            </div>
                        }
                    )
                }
            </div>
            
        </div>
    )
}

export default TodoDisp