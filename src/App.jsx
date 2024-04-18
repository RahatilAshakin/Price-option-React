import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar2/Navbar2';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
     {/* <Navbar></Navbar> */}
     <Navbar2></Navbar2>
      
      <h1 className='text-5xl bg-rose-500'>Vite + React</h1>
   

     
   
    </>
  );
}

export default App;
