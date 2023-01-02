import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"




test("adding of task", async () => {
        render(<App />)
        const userEvents = userEvent.setup()
        const addTaskBtn = screen.getByText(/add task/i);
        const todoContainer = screen.getByTestId("todo-container");
        expect(screen.getByText(/no todos/i)).toBeInTheDocument()
       
        
        await userEvents.click(addTaskBtn);
        const todoModal = screen.getByTestId("todo-modal")
        expect(todoModal).toBeInTheDocument()
        const todoTitleInputBx = screen.getByLabelText(/title/i);
        const todoStatusBx = screen.getByLabelText(/status/i);
        await userEvents.type(todoTitleInputBx)
        
        

        
        // const todoTitleFormBox = screen.getByLabelText(/title/i)
        // const todoStatusBox = screen.getByLabelText(/status/i);
        // const addTaskModalBtn = screen.getByTestId("add-task-modal-btn");
        // const cancelModalBtn = screen.getByText(/cancel/i);







        
        
      

})