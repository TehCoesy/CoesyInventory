import post from '../../Services/expressService';

export function addItem(itemName, itemCount, itemDesc) {
    post('/inventory/additem', { name: itemName, count: itemCount, desc: itemDesc})
    .then(function(result) {
        alert(result.message);
    }, function(error) {
        alert(error.message);
    })
}

export function deleteItem() {
    post('/inventory/deleteitem', { name: itemName, count: itemCount})
    .then(function(result) {
        alert(result.message);
    }, function(error) {
        alert(error.message);
    })
}