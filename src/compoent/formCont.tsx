import React, { useState } from "react"



type IModalBx = {
    setTitleValue:React.Dispatch<React.SetStateAction<string | undefined>>,
    setStatus:React.Dispatch<React.SetStateAction<string | undefined>>
    handleFormSubmit:(e:React.SyntheticEvent) => void

}



export const ModalBx = ({ setTitleValue,
    setStatus,
    handleFormSubmit }: IModalBx) => {
   


    return (
        
        <div data-testid="todo-modal" >
            <h5 className="text-[#766881] text-[25px]">Add TODO</h5>
            
            <form action=""  onSubmit={handleFormSubmit}>
                
                <label className="text-[12px] text-[#646681] mb-[7px]" htmlFor="labelField">Title</label><br></br>
                <input name="title" className="w-[100%] h-[40px] rounded-[5px]" onChange={(e) => {
                    const currentElem = e.target as HTMLInputElement
                    setTitleValue(currentElem.value)
                }} type="text" id="labelField" ></input>
               
                
                <label className="text-[12px] text-[#646681] mb-[10px]" htmlFor="status">status:</label><br></br>
                <select name="status" className="w-[100%] h-[40px]  text-[12px] text-[#646681] rounded-[5px] bg-white"  id="status" data-testid="status" onChange={(e) => {
                    
                    const currentElement = e.target as HTMLSelectElement
                    setStatus(currentElement?.value)
                }}>
                    <option value="">incomplete</option>
                    <option value="">completed</option>
                </select>
                
                <button
                    type="submit"
                    data-testid="add-task"
                    className="w-[80px] m-[10px] h-[40px] mt-[20px] rounded bg-[#646ff0] text-white text-[13px]">add Task</button>
                <button
                    type="button"
                    className="w-[80px] m-[10px] h-[40px] mt-[20px] rounded bg-[#646ff0] text-white text-[13px]"  >cancel</button>
            </form>
        </div>
    )
}



