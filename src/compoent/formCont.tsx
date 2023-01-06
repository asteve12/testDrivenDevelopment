import React, { useState } from "react"



type IModalBx = {
    setTitleValue:React.Dispatch<React.SetStateAction<string | undefined>>,
    setStatus:React.Dispatch<React.SetStateAction<string | undefined>>
}



export const ModalBx = ({setTitleValue,setStatus}:IModalBx) => {
   


    return (
        
        <div data-testid="todo-modal" style={{
            backgroundColor:"#A9A5D5"
        }} >
            
            <form action="">
                <label htmlFor="labelField">Title</label>
                <input onChange={(e) => {
                    const currentElem = e.target as HTMLInputElement
                    setTitleValue(currentElem.value)
                }} type="text" id="labelField" ></input>
               
                
                <label htmlFor="status">status:</label>
                <select name="" id="status" data-testid="status" onChange={(e) => {
                    
                    const currentElement = e.target as HTMLSelectElement
                    setStatus(currentElement?.value)
                }}>
                    <option value="">incomplete</option>
                    <option value="">completed</option>
                </select>
                
                <button  data-testid="add-task">add Task</button>
                <button>cancel</button>
            </form>
        </div>
    )
}



