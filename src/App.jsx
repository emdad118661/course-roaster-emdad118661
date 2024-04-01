

import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Cards from './Components/Cards/Cards';

function App() {
   const [credit, setCredit] = useState(0);
   const [price, setPrice] = useState(0);
   const [remingHour, setRemingHour] = useState(0);
   const [cards, setCards] = useState([]);
  

  
  const handleSelect = (time, currentPrice, course, id) =>{

   //cards name list
  
  if(cards.some(card => card.id === id)){
    const newCards = [...cards];
    setCards(newCards);
    alert('You have already enrolled this course');
  }
  else{

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
  alert('Credit limit exceeded. Credit hour cannot be more than 20 hours. Please finish your enrolled courses first.');
 }
  }

  // const removeCard = cards.filter(card => card.id !== id);
  // setCards(removeCard);
    
   

   
  
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
