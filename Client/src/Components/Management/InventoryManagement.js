import React, { useState } from 'react';
import  './InventoryManagement.css';
import { addItem, deleteItem } from './InventoryOperation';


export default function InventoryManagement() {
  const [itemID, setItemID] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const [itemDesc, setItemDesc] = useState("");
  const [itemList, setItemList] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  function refresh() {
  
  }

  function addItemE(event) {
    event.preventDefault();
    addItem(itemName, itemCount, itemDesc);
  }

  function deleteItemE(event) {
    event.preventDefault();
    deleteItem(itemID, itemCount);
  }

  return (
    <div id="product-body">
      
           <div id="table">
       <table className="content-table">
 <thead>
   <tr>
     <th>ID</th>
     <th>Name</th>
     <th>Amount</th>
     <th>Description</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>car</td>
     <td>10</td>
     <td>ferrari xxx</td>
   </tr>
   <tr className="active-row">
     <td>2</td>
     <td>laptop</td>
     <td>1000</td>
     <td>Dell xxx</td>
   </tr>
   <tr>
     <td>3</td>
     <td>item 3</td>
     <td>xx</td>
     <td>nothing</td>
   </tr>
   <tr>
     <td>4</td>
     <td>item 4</td>
     <td>xx</td>
     <td>nothing</td>
   </tr>
 </tbody>
</table>
</div>
<div id="right-box">
   <div align="center">
     <div id="search">
     <form id="form-box">
           <input type="text"  placeholder="Item ID/ Item name" />
         
         </form>
         <br/>
        <div className="button_cont" align="center"><button className="example_e">Search item</button></div>
      
       <div className="button_cont" align="center"><button className="example_e">Remove search</button></div>
       </div>
       
   
   
   </div >
   <div align="center">
     <p></p>
     <form id="form-box">
           <input type="number"  placeholder="Item ID" value={itemID} onChange={e => setItemID(e.target.value)}/>
           <br />
           <input type="text" placeholder="Item Name" value={itemName} onChange={e => setItemName(e.target.value)}/>
           <br />
           <input type="number" placeholder="Amount" value={itemCount} onChange={e => setItemCount(e.target.value)}/>
           <br/>
           <input type="text" placeholder="Item Description" value={itemDesc} onChange={e => setItemDesc(e.target.value)}/>
           <br/>
         </form>
   <br></br>
   <br></br>
   </div>
   <div class="button_cont" align="center"><button className="example_e" onClick={e => addItemE(e)}>Add item</button></div>
   <div class="button_cont" align="center"><button className="example_e" onClick={e => deleteItemE(e)}>Delete item</button></div>
   <div class="button_cont" align="center"><button className="example_e">Refresh</button></div>
</div>
   </div>
       
   )
}