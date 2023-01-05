

export const ModalBx = () => {
    


    return (
        
        <div data-testid="todo-modal" style={{
            backgroundColor:"#A9A5D5"
        }} >
            
            <form action="">
                <label htmlFor="labelField">Title</label>
                <input type="text" id="labelField" ></input>
               
                
                <label htmlFor="status">status:</label>
                <select name="" id="status" data-testid="status">
                    <option value="">incomplete</option>
                    <option value="">completed</option>
                   </select>
            </form>
        </div>
    )
}



