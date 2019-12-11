import Login from '../Components/Common/Login';
import InventoryManagement from '../Components/Management/InventoryManagement';
import CreateNewInventory from '../Components/Users/CreateNewInventory';
import UserHome from '../Components/Users/UserHome';
import User from '../Components/Users/User';

export default {
    login: {
        path: '/login',
        component: Login,
        exact: true,
        requireAuth: false
    },

    user: {
        path: '/user',
        component: User,
        exact: true,
        requireAuth: true
    },
    newInventory: {
        path: '/newInventory',
        component: CreateNewInventory,
        exact: true,
        requireAuth: true
    },
    inventory: {
        path: '/inventory',
        component: InventoryManagement,
        exact: true,
        requireAuth: true
    },
    userHome: {
        path: '/userHome',
        component: UserHome,
        exact: true,
        requireAuth: true
    },
}