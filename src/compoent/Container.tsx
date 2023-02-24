import { useState,useRef} from "react";
import { ModalBx } from "./formCont";
import { TaskCard } from "./taskCard";
import Rodal from 'rodal';



type todoItems = {
    img: string,
    title: string,
    time:Date
  }


type ITodoContainer = {
    todoItems: todoItems []
}





export const TodoContainer = ({todoItems}:ITodoContainer) => {

    const [isModalOpen, setIsModalOpen] = useState(false); 
    //@ts-ignore
    const [todoArray, setTodoArray] = useState<todoItems []>();
    const [titleValue, setTitleValue] = useState<string >();
    const [status, setStatus] = useState<string>();
    const formHtmlContainer = useRef<HTMLFormElement>(null)


   
  //modal visibility
  const handleModalVisibility = () => {
    if (isModalOpen === false)
        return setIsModalOpen(!isModalOpen)
    setIsModalOpen(!isModalOpen);
  }
  


  const validateFormField = () => {
    
  }

  //handle form submission
  const handleFormSubmit = (e: React.SyntheticEvent)=>{
    e.preventDefault()
  
   const unfilledFields: string [] = [];
    const formObject = new FormData(e.target as HTMLFormElement);
    
   //@ts-ignore
    for (const formEntry of formObject) {
      console.log("my-todo23",formEntry[1])
       if(formEntry[1] === "") unfilledFields.push(formEntry[0])
      
    }

    const isAnyFieldEmpty = unfilledFields.length > 0;

  
    //check for empty filed and add error message
    if (isAnyFieldEmpty) {
     
      unfilledFields.map(eachUnfieldsName => {

        const ErrorMessageExist =  document.getElementById(`error-${eachUnfieldsName}`)
          if(ErrorMessageExist)  ErrorMessageExist.remove()
           const inputElement = document.getElementById(`${eachUnfieldsName}`);
          const p = document.createElement("p");
        p.textContent = "required";
        p.style.color = "red"
          p.style.fontSize = "20px"
        p.id = `error-${eachUnfieldsName}`
        p.setAttribute("data-testId","error")
        
          
        
        inputElement?.insertAdjacentElement("afterend", p);

      })
      
       
    }
    else {
      
    const arrayofMarkFild = document.querySelectorAll('[data-error]')
      //remove error message
      arrayofMarkFild?.forEach((errItem) => {
        errItem.remove();
      })

      let arrayOfTodo = JSON.parse(localStorage.getItem("arrayOfTodo") as string);
      
      const formObj = Object.fromEntries(formObject.entries())
      arrayOfTodo = arrayOfTodo?.length > 0 ? [...arrayOfTodo,formObj] :[formObj]


      localStorage.setItem("todo-array", arrayOfTodo)
      handleModalVisibility()
      
     
    }
    
   
   
  }
    

 
    
    return (
        <div className="w-full pt-[20px] font-bold text-[20px] h-screen bg-[#F8F8FF]">
        {isModalOpen && <Rodal
          customStyles={{
            width: "500px",
            height: "350px",
            borderRadius: "5px",
            backgroundColor: "#EFEBF2",
            padding:"30px"
          }}
          visible={isModalOpen}
          onClose={handleModalVisibility}>
          <ModalBx
            setTitleValue={setTitleValue}
            setStatus={setStatus}
            handleFormSubmit={handleFormSubmit}
            formHtmlContainer={formHtmlContainer}
          ></ModalBx>
        </Rodal>}
        <p className='text-center text-[#585858] font-bold text-[30px]'>TODO LIST</p>
        <div className="w-[700px]  max-[80%] min-h-[100px] ml-auto mr-auto ">
          <section className="flex justify-between w-[100%]  ">
            <button onClick={handleModalVisibility}
              className='w-[100px] h-[50px]  text-white rounded-[5px] bg-[#646FF0]'>Add task</button>
            <select className="w-[140px] rounded  h-[50px] bg-[#CCCDDE] p-[3px] text-[#909199]" name="status" id="">
              
              <option >All</option>
              <option >incomplete</option>
              <option >Completed</option>
            </select>
          </section>
  
          <section  className="w-[100%] padding-[10px] rounded h-[100px] bg-[#cccdde] mt-[10px]" data-testid="todo-container">
            {todoItems.length === 0  ?  <p className=" text-[#585858] flex h-[100%] w-[100%]  items-center justify-center">
              No Todos
           </p>:<TaskCard></TaskCard>
  
            }
            
           
          </section>
  
          
           
  
        </div>
  
      </div>
    )
    



}