

import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Cards from './Components/Cards/Cards';

function App() {
   const [credit, setCredit] = useState(0);
   const [price, setPrice] = useState(0);
   const [remingHour, setRemingHour] = useState(0);
   const [cards, setCards] = useState([]);
  

  
  const handleSelect = (time, currentPrice, course) =>{

   //cards name list
   if(course == cards){
    alert()
   }
     const newCards = [...cards, course];
     setCards(newCards);

     
   

    
   //credit count
    const newCredit = credit + time;
    if(newCredit <= 20){
    setCredit(newCredit);
    }
   

    //price
   const newPrice = price + currentPrice;
   setPrice(newPrice);

   //remaining hour
   
   const remingHour = 20 - newCredit;
   if(remingHour >= 0){
   setRemingHour(remingHour);
   }
   else{
    alert('credit limit exceeded. Credit hour cannot be more than 20 hours.');
   }

   

   }

  return (
    <div className='bg-slate-200 p-14'>
      <h1 className="text-3xl font-bold text-center">Course Registration</h1>
      <div className='flex'>
      <Courses handleSelect={handleSelect}></Courses>
      
      <Cards cards={cards} remingHour={remingHour} credit={credit} price={price}></Cards>
      </div>
      

    </div>
      
    
      
    
  )
}

export default App
