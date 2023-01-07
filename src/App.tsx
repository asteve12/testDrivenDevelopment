import React, {useState} from "react"
import Rodal from 'rodal';


// FormBx
//styles
import 'rodal/lib/rodal.css';

import './App.css';
import { ModalBx } from "./compoent/formCont";
import { TaskCard } from "./compoent/taskCard";

type todoItems = {
  img: string,
  title: string,
  time:Date
}


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [todoArray, setTodoArray] = useState<todoItems []>();
  const [titleValue, setTitleValue] = useState<string >();
  const [status,setStatus] = useState<string >()
   
  //modal visibility
  const handleModalVisibility = () => {
    if (isModalOpen === false)
      return setIsModalOpen(!isModalOpen)
    setIsModalOpen(!isModalOpen);
  }
  


  const validateFormField = () => {
    
  }
  const handleFormSubmit = (e: React.SyntheticEvent)=>{
    e.preventDefault()
    const formObject = new FormData(e.target as HTMLFormElement);
    
    console.log("entries", formObject.entries())
   
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
        ></ModalBx>
      </Rodal>}
      <p className='text-center text-[#585858] font-bold text-[30px]'>TODO LIST</p>
      <div className="w-[700px]  max-[80%] min-h-[100px] ml-auto mr-auto ">
        <section className="flex justify-between w-[100%]  ">
          <button onClick={handleModalVisibility}
            className='w-[100px] h-[50px]  text-white rounded-[5px] bg-[#646FF0]'>Add task</button>
          <select className="w-[140px] rounded  h-[50px] bg-[#CCCDDE] p-[3px] text-[#909199]" name="" id="">
            <option value="">All</option>
            <option value="">incomplete</option>
            <option value="">Completed</option>
          </select>
        </section>

        <section  className="w-[100%] padding-[10px] rounded h-[100px] bg-[#cccdde] mt-[10px]" data-testid="todo-container">
          {
            todoArray?.length !== 0 ?  <p className=" text-[#585858] flex h-[100%] w-[100%]  items-center justify-center">
            No Todos
         </p>:<TaskCard></TaskCard>

          }
          
         
        </section>

        
         

      </div>

    </div>
  );
}

export default App;
