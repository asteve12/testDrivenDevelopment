import React, {useRef, useState,useEffect, useLayoutEffect} from "react"



// FormBx
//styles
import 'rodal/lib/rodal.css';

import './App.css';
import { TodoContainer } from "./compoent/Container";



 type todoItems = {
  img: string,
  title: string,
  time:Date
}


function App() {
 
  const [todoItems,setTodItems] = useState<todoItems []>([])


  useLayoutEffect(() => {
    
  })





  return (
    <TodoContainer  todoItems={todoItems} ></TodoContainer>
  
  );
}

export default App;
