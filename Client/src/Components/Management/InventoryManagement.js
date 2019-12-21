import React, { useState } from 'react';
import  './InventoryManagement.css'

export default function InventoryManagement() {
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const [itemDesc, setItemDesc] = useState("");

  return (
    <div id="product-body">
      
           <div id="table">
       <table class="content-table">
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
   <tr class="active-row">
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
        <div class="button_cont" align="center"><a class="example_e">Search item</a></div>
      
       <div class="button_cont" align="center"><a class="example_e">Remove search</a></div>
       </div>
       
   
   
   </div >
   <div align="center">
     <p></p>
     <form id="form-box">
           <input type="number"  placeholder="Item ID" />
           <br />
           <input type="text" placeholder="Item Name" />
           <br />
           <input type="number" placeholder="Amount" />
           <br/>
           <input type="text" placeholder="Item Description" />
           <br/>
         </form>
   <br></br>
   <br></br>
   </div>
   <div class="button_cont" align="center"><a class="example_e">Add item</a></div>
   <div class="button_cont" align="center"><a class="example_e">Delete item</a></div>
   <div class="button_cont" align="center"><a class="example_e">Refresh</a></div>
</div>
   </div>
       
   )
}