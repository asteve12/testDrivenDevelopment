import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"




test("adding of task", async () => {
        render(<App />)
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
        const todoStatus = "complete"

        //checking how form behave without a values fulled entered
        await userEvent.click(modalAddTaskBtn);
        const emptyFieldWarningText = screen.getByTestId("errorTest")
        expect(emptyFieldWarningText).toBeInTheDocument()
        

        //checking how form behave when values is included
        await userEvents.type(todoTitleInputBx,todoTitle);
        await userEvent.selectOptions(todoStatusBx,todoStatus);

        expect(todoTitleInputBx).toHaveValue(todoTitle)
        expect(todoStatusBx).toHaveValue(todoStatus)

        await userEvent.click(modalAddTaskBtn);


        expect(todoContainer).toHaveLength(1);

        

        


        
        

        
        // const todoTitleFormBox = screen.getByLabelText(/title/i)
        // const todoStatusBox = screen.getByLabelText(/status/i);
        // const addTaskModalBtn = screen.getByTestId("add-task-modal-btn");
        // const cancelModalBtn = screen.getByText(/cancel/i);







        
        
      

})