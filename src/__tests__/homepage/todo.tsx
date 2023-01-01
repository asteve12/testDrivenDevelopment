import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"




test("adding of task", () => {
        render(<App />)
        const addTaskBtn = screen.getByText(/add task/i);
        const todoContainer = screen.getByTestId("todo-container");
        const todoModal = screen.getByTestId("todo-modal")
        const todoTitleFormBox = screen.getByLabelText(/title/i)
        const todoStatusBox = screen.getByLabelText(/status/i);
        const addTaskModalBtn = screen.getByTestId("add-task-modal-btn");
        const cancelModalBtn = screen.getByText(/cancel/i);


        userEvent.click(addTaskBtn)







        
        
      

})