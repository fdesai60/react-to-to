const TodoDisp =({list})=>{
    return (
        <div>
            <h1>Todo list</h1>
            <div>
                {
                    list.map(
                        obj=>{
                            return <div>
                                {obj}
                            </div>
                        }
                    )
                }
            </div>
            
        </div>
    )
}

export default TodoDisp