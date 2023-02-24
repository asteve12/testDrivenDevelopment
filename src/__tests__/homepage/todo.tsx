import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"
import { TodoContainer } from "../../compoent/Container"




test("adding of task", async () => {
        render(<TodoContainer  todoItems={[]} />)
        const userEvents = userEvent.setup()
        const addTaskBtn = screen.getByText(/add task/i);
        const todoContainer = screen.getByTestId("todo-container");
        
        expect(screen.getByText(/no todos/i)).toBeInTheDocument()
       
        
        await userEvents.click(addTaskBtn)
        const todoModal = screen.getByTestId("todo-modal")
        expect(todoModal).toBeInTheDocument()

        const todoTitleInputBx = screen.getByLabelText(/title/i);
        const todoStatusBx = screen.getByTestId(/status/i);
        const modalAddTaskBtn = screen.getByTestId("add-task")
        const modalCancelTaskBtn = screen.getByText(/cancel/i);
        
        const todoTitle = "work on my ebook"
        const todoStatus = "completed"
        

        //checking how form behave without a values filled entered
        await userEvent.click(modalAddTaskBtn);

        
        await waitFor(() => {
        expect(screen.getByTestId("todo-modal")).toBeInTheDocument()            
        })

        await userEvent.click(screen.getByTestId("add-task"))

        const emptyFieldWarningText = screen.getByTestId("error")
        expect(emptyFieldWarningText).toBeInTheDocument() 
    
        

        //checking how form behave when values is included
        await userEvents.type(todoTitleInputBx,todoTitle);
        await userEvent.selectOptions(todoStatusBx,todoStatus);

        expect(todoTitleInputBx).toHaveValue(todoTitle)
        expect(todoStatusBx).toHaveValue(todoStatus)

        await userEvent.click(modalAddTaskBtn);


        expect(todoContainer.children).toHaveLength(1);

        

        


        
        

        
        // const todoTitleFormBox = screen.getByLabelText(/title/i)
        // const todoStatusBox = screen.getByLabelText(/status/i);
        // const addTaskModalBtn = screen.getByTestId("add-task-modal-btn");
        // const cancelModalBtn = screen.getByText(/cancel/i);







        
        
      

})