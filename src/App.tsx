import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-full bg-black">
      <p className='text-center text-black '>TODO LIST</p>
      <div className="w-[600px] min-h-[100px] ">
        <section className="flex justify-between w-[100%]">
          <button className='w-[100px] h-[80px] rounded-[5px]'>Add task</button>
          <select name="" id="">
            <option value="">All</option>
            <option value="">incomplete</option>
            <option value="">Completed</option>
          </select>
        </section>
        
        
         

      </div>

    </div>
  );
}

export default App;
