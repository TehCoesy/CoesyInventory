import React, { useState, useEffect } from 'react';
import  './InventoryManagement.css';
import { addItem, deleteItem, refresh, searchItem } from './InventoryOperation';


export default function InventoryManagement() {
  const [searchName, setSearchName] = useState("");
  const [itemID, setItemID] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const [itemDesc, setItemDesc] = useState("");
  const [itemList, setItemList] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    refresh()
    .then(function(result) {
      setCurrentList(result);
      setItemList(result);
    })
  }, [])

  function refreshC() {
    refresh()
    .then(function(result) {
      setCurrentList(result);
      setItemList(result);
    }, function(error) {

    })
  }

  function refreshE(event) {
    event.preventDefault();
    refresh()
    .then(function(result) {
      setCurrentList(result);
      setItemList(result);
    }, function(error) {

    })
  }

  function addItemE(event) {
    event.preventDefault();
    addItem(itemName, itemCount, itemDesc);
    refreshC();
  }

  function deleteItemE(event) {
    event.preventDefault();
    deleteItem(itemID, itemCount);
    refreshC();
  }

  function searchItemE(event) {
    event.preventDefault();
    setCurrentList(searchItem(itemList, searchName))
  }

  function clearSearchE(event) {
    event.preventDefault();
    setCurrentList(itemList);
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
   {currentList.map((row, i) => (
      <tr key={i}>
        <td>{row.itemID}</td>
        <td>{row.itemName}</td>
        <td>{row.itemCount}</td>
        <td>{row.itemDescription}</td>
      </tr>
   ))}
 </tbody>
</table>
</div>
<div id="right-box">
   <div align="center">
     <div id="search">
     <form id="form-box">
           <input type="text"  placeholder="Item ID/ Item name" value={searchName} onChange={e => setSearchName(e.target.value)}/>
         
         </form>
         <br/>
        <div className="button_cont" align="center"><button className="example_e" onClick={e => searchItemE(e)}>Search item</button></div>
      
       <div className="button_cont" align="center"><button className="example_e" onClick={e => clearSearchE(e)}>Remove search</button></div>
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
   <div class="button_cont" align="center"><button className="example_e" onClick={e => refreshE(e)}>Refresh</button></div>
</div>
   </div>
       
   )
}