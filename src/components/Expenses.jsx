

// const Expenses = ({items,item,setitems,deleteItem}) => {
  

//   const handleCheckboxChange = (item.id) = (e) => {
//       const newItems = items.map(itemz =>{
//         itemz.id === item.id ? {...items,checkbox:e.target.checked}:item
//       });
//       setitems(newItems);

      



//   }
//   console.log(item);



//   return (
    
    

//     item.add ? <div className="expense-list flex items-center justify-between border-2 border-gray-500 border-solid gap-5 w-auto p-2 border-r-8 border-r-green-500 border-r-solid">
//           <p className="text-lg uppercase font-bold">{item.expense}</p>
//           <p className="text-lg">₹{item.amountSpent}</p>
//           <button className="border-2 border-gray-400 border-solid px-4 py-2 font-semibold rounded-md" onClick={()=>deleteItem(item.id)}>Delete</button>
//           {/* <input type="checkbox" className="size-5"/> */}
          
//         </div> : <div className="expense-list flex items-center justify-around border-2 border-gray-500 border-solid gap-2 md:gap-10 w-auto p-2 border-r-8 border-r-red-500 border-r-solid">
//           <p className="text-lg uppercase font-bold">{item.expense}</p>
//           <p className="text-lg">₹{-(item.amountSpent)}</p>
//           <button className="border-2 border-gray-400 border-solid px-4 py-2 rounded-md font-semibold" onClick={()=>deleteItem(item.id)}>Delete</button>
//           <input type="checkbox" className="md:size-5" onChange={(e) =>handleCheckboxChange(item.id)}/>
          
//         </div>  
    






    
    
    
    
    
        
//   )
// }

// export default Expenses



const Expenses = ({ items, item, setitems, deleteItem }) => {
  
  const handleCheckboxChange = (id) => (e) => {
    const newItems = items.map(itemz =>
      itemz.id === id ? { ...itemz, checkbox: e.target.checked } : itemz
    );
    setitems(newItems);
  }

  return (
    item.add ? 
    <div className="expense-list flex items-center justify-between border-2 border-gray-500 border-solid gap-5 w-auto p-2 border-r-8 border-r-green-500 border-r-solid">
      <p className="text-lg uppercase font-bold">{item.expense}</p>
      <p className="text-lg">₹{item.amountSpent}</p>
      <button className="border-2 border-gray-400 border-solid px-4 py-2 font-semibold rounded-md" onClick={() => deleteItem(item.id)}>Delete</button>
    </div> 
    : 
    <div className={`expense-list flex items-center justify-around border-2 border-gray-500 border-solid gap-2 md:gap-10 w-auto p-2 border-r-8 border-r-red-500 border-r-solid ${item.checkbox ? 'bg-yellow-500' : ''}`}>
      <p className="text-lg uppercase font-bold">{item.expense}</p>
      <p className="text-lg">₹{-(item.amountSpent)}</p>
      <button className="border-2 border-gray-400 border-solid px-4 py-2 rounded-md font-semibold" onClick={() => deleteItem(item.id)}>Delete</button>
      <input type="checkbox" className="md:size-5" checked={item.checkbox} onChange={handleCheckboxChange(item.id)} />
    </div>
  );
}

export default Expenses;


