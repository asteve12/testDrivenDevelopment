import { render, screen } from "@testing-library/react"
import App from "../../App"




test("test adding of task ", () => {
        render(<App />)
        const addTaskBtn = screen.getByText(/add task/);
      

})