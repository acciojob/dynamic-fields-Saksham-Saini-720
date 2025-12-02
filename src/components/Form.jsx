import React, { useState } from "react";

const Form = ()=>{
    let [field, setField] = useState([
        {id : 1, name : "", age : ""}
    ])

    let [nextId, setNextId] = useState(2)
    // let [flag, setFlag] = useState(false)

    function newField(e){
        e.preventDefault()
        setField([...field, {id : nextId, name : "", age : ""}])
        setNextId(nextId+1)
    }

    function submitDetails(e){
        e.preventDefault();                 
        console.log(field); 
    }

    function handleChange(id, key, value){
        let updated = field.map(col => col.id == id ? {...col, [key] : value} : col)
        setField(updated)
    }

    function removeField(id){
        let newArr = field.filter(col => col.id != id)
        setField(newArr)
    }
    return(
        <div>
            <form>
                {field.map((col) => {
                   return <div key={col.id}>
                        <input type="text" name="name" placeholder="Name" onChange={(e)=> handleChange(col.id, "name", e.target.value)}/>
                        <input type="number" name="age" placeholder="Age" onChange={(e)=> handleChange(col.id, "age", e.target.value)}/>
                        <button onClick={() => removeField(col.id)}>Remove</button>
                    </div>
                }) }
                
                <button onClick={newField}>Add More..</button>
                <button onClick={submitDetails}>Submit</button>
                <h1>After clicking submit check console for data</h1>
            </form>
        </div>
    )
}

export default Form