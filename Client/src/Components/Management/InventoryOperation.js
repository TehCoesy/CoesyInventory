import post from '../../Services/expressService';
import { getAuthToken } from '../../Services/authToken';

export function addItem(_itemName, _itemCount, _itemDesc) {
    post('/inventory/addItem', { name: _itemName, count: _itemCount, desc: _itemDesc, authToken: getAuthToken()})
    .then(function(result) {
        alert(result.message);
    }, function(error) {
        alert(error.message);
    })
}

export function deleteItem(_itemID, _itemCount) {
    post('/inventory/deleteItem', { id: _itemID, count: _itemCount, authToken: getAuthToken()})
    .then(function(result) {
        alert(result.message);
    }, function(error) {
        alert(error.message);
    })
}

export function searchItem(_itemList, _key) {
    
}