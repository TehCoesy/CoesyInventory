import React from 'react';
import  './Import.css'

export default function InOut() {
    return (
     <div id="InOut-body">
       
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
<div id="right-box" align="center">
<h1>Import item form </h1>
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
    <div class="button_cont" align="center"><a class="example_e">Import</a></div>
</div>
    </div>
        
    )
}