import { useState ,useEffect} from 'react'
import './App.css'
import { message } from 'antd';
import Expenses from './components/Expenses';


function App() {
  const [addedBalance,setAddedBalance] =useState(0);
  const [currentBalance,SetCurrentBalance] = useState(0);
  const [expense,setExpenseName] = useState("");
  const [amountSpent,setAmountSpent] =useState(0);
  const [addMoney,setAddMoney] = useState(0);
  const [totalExpenses,setTotatlExpenses] = useState(0);
  const [items,setItems] =useState(()=>{
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

 

  
  
  const expenseName = (e) =>{
   if(e.target.value!=='') setExpenseName(e.target.value);
    
  }
  

  const amountded = (e) =>{
    if(e.target.value) setAmountSpent(e.target.value);
    
    
  }
  const moneyadd =(e) =>{
    if(e.target.value) setAddMoney(e.target.value);
    
    
  }
  useEffect(()=>{
  
  

    const addedbal = items
  .filter(item => item.add === true)  // Properly use the filter function
  .reduce((acc, item) => acc + item.amountSpent, 0);  
    const totalexpenses = items
    .filter(item => item.add === false)  // Properly use the filter function
    .reduce((acc, item) => acc + item.amountSpent, 0);
    const paid = items
    .filter(item => item.checkbox === true)  // Properly use the filter function
    .reduce((acc, item) => acc + item.amountSpent, 0);  
     // Exclude items where add is true

  // let newbal = totalAmountSpent;
  // console.log(newbal,addedbal);
  console.log(items);
  const remainingbalance = addedbal + paid;
  
  // SetCurrentBalance(newbal);
  setAddedBalance(addedbal);
  SetCurrentBalance(remainingbalance);
  setTotatlExpenses(totalexpenses);
  localStorage.setItem('items', JSON.stringify(items));



  



  
    

  },[items])

  

  const logTheExpense =() =>{
    if (expense && amountSpent) {
      // const remainingBalance = currentBalance - amountSpent;
      // const secondcheck = addedBalance - amountSpent;
  
      // if (remainingBalance >= 0 && secondcheck>=0) {
      
        const obj = {
          id:items.length === 0 ? 1:items[items.length - 1].id +1,
          expense: expense,
          amountSpent: Number(-amountSpent),
          add: false,
          checkbox:false
        };
        const newArray = [...items, obj];
  
        setItems(newArray);

        message.success(`${expense} added...`)
  
        // Clear the expense name and amount after adding
        
      // } else {
      //   // Alert if there's not enough balance
      //   alert("Not enough balance to add this expense!");
      // }
    }


    
    

  }
  const addTheMoney = () =>{
    
    if(addMoney){
      
      const obj ={
        id:items.length === 0 ? 1:items[items.length - 1].id +1,
        expense:"money Added",
        amountSpent:Number(addMoney),
        add:true,
        checkbox:false
      }
      const newArray =[...items,obj];
      setItems(newArray);
      const newbal = Number(addMoney) + Number(addedBalance);
      setAddedBalance(newbal);

       


    }

  }
  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id); // Correctly filter by item.id
    setItems(newArray);
  };


  const print = () =>{
    window.print();
  }

  

  return (
    <>
    <h1 className='text-3xl text-center font-bold text-gray-600'>Expense Calculator</h1>
    
    
    
    
    <div className='flex flex-col-reverse  items-center justify-center gap-10 mb-10'>
      
      <div className="left-one basis-full px-5 gap-4 grid grid-cols-1 sm:gap-10 sm:grid-cols-2 ">
      {items.map((item) => (
  <Expenses key={item.id} items={items} item={item} setitems={setItems} deleteItem={deleteItem} /> // Pass deleteItem properly
))}
      
      </div>
      
      
      
      <div className="container  items-center justify-center flex p-2">
        <div className="right-one">
        <div className="balances flex gap-3 items-center justify-center border-black border-2 border-solid p-1 md:p-5 mb-5 rounded-md">
          <div className="left-balance flex flex-col items-center px-2 border-r-2 border-solid border-gray-600">
              <p className='text-lg font-bold'>Added Bal</p>
              <p className='text-lg'>₹{addedBalance}</p>
          </div>
          <div className="right-balance flex flex-col items-center px-2 border-r-2 border-solid border-gray-600">
            <p className='text-lg font-bold'>Curr Bal</p>
            <p className='text-lg'>₹{currentBalance}</p>
          </div>
          <div className="right-balance flex flex-col items-center">
            <p className='text-lg font-bold'>Total Expenses</p>
            <p className='text-lg'>₹{-totalExpenses}</p>
          </div>
        </div>
        
        
        
        <div className="add-expense flex flex-col gap-4">
          <input type="text" placeholder='Add expense name' className='border-green-900 border-solid border-2 p-2 text-lg rounded-md' onChange={expenseName}  />
          <input type='text' placeholder='Enter the amount spent' className='border-green-900 border-solid border-2 p-2 text-lg rounded-md' onChange={amountded} />
          <button className='py-2 px-4 border-2 border-solid border-purple-500 bg-purple-700 text-white text-lg rounded-md' onClick={logTheExpense}>Add Expense</button>
        </div>
        <div className="addmoney flex flex-col gap-4 mt-4">
          <input type="text" placeholder='Add the money you want ' className='border-2 border-black p-2 text-lg rounded-md' onChange={moneyadd} />
          <button className='py-2 px-4 border-2 border-solid border-purple-500 bg-purple-700 text-white text-lg rounded-md' onClick={addTheMoney}>Add Money</button>
          <button className='py-2 px-4 border-2 border-solid border-green-500 bg-green-700 text-white rounded-md text-lg' onClick={print}>Print</button>
          
        </div>
      </div>


        </div>
        
    </div>

    <p className='text-center text-xl text-gray-600 mb-2'>Built using React..</p>
    </>
  )
}

export default App
