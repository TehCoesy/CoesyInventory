import React from 'react';
import  './InventoryManagement.css'

export default function InventoryManagement() {
    function rowBuider() {
      
    }

    function tableBuilder() {
        
    }

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
        <input id="input-search" placeholder="Enter id/name item here"></input>
        <div class="button_cont" align="center"><a class="example_e">Search item</a></div>
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