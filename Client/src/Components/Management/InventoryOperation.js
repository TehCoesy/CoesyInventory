import post from '../../Services/expressService';

export function getManagerInventory() {
    post('/inventory/getInventoryID')
    .then(function(result) {
        return result.inventoryID;
    }, function(error) {
        return null;
    })
}

export function refresh(id) {
    post('/inventory/fetchAll', { inventoryID: id})
    .then(function(result) {

    }, function(error) {
        
    }) 
}