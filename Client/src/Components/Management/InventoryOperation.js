import post from '../../Services/expressService';

export function getManagerInventory() {
    post('/inventory/fetchID')
    .then(function(result) {
        return result.inventoryID;
    }, function(error) {
        return null;
    })
}