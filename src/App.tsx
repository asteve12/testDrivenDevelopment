import {useState} from "react"
import Rodal from 'rodal';


// FormBx
//styles
import 'rodal/lib/rodal.css';

import './App.css';
import { ModalBx } from "./compoent/formCont";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
   
  const handleModalVisibility = () => {
    if (isModalOpen === false)
      return setIsModalOpen(!isModalOpen)
    setIsModalOpen(isModalOpen);
    }

 
  


  return (
    <div className="w-full pt-[20px] font-bold text-[20px]">
     {isModalOpen && <Rodal visible={false} onClose={()=>{}}  >
       <ModalBx></ModalBx>
      </Rodal>}
      <p className='text-center text-black '>TODO LIST</p>
      <div className="w-[600px] min-h-[100px] ml-auto mr-auto ">
        <section className="flex justify-between w-[600px] ">
          <button onClick={handleModalVisibility} className='w-[100px] h-[50px] bg-[blue] text-white rounded-[5px]'>Add task</button>
          <select name="" id="">
            <option value="">All</option>
            <option value="">incomplete</option>
            <option value="">Completed</option>
          </select>
        </section>

        <section  className="w-[100%] min-h-[150px] bg-[green] mt-[10px]" data-testid="todo-container">
          <p>
             No Todos
          </p>

        </section>

        
         

      </div>

    </div>
  );
}

export default App;
