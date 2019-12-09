import Login from '../Components/Common/Login';
import InventoryManagement from '../Components/Users/InventoryManagement';
import Home from '../Components/Common/Home';
import User from '../Components/Users/User';

export default {
    login: {
        path: '/login',
        component: Login,
        exact: true,
        requireAuth: false
    },
    inventory: {
        path: '/inventory',
        component: InventoryManagement,
        exact: true,
        requireAuth: true
    },
    home: {
        path: '/home',
        component: Home,
        exact: true,
        requireAuth: false
    },
    user: {
        path: '/user',
        component: User,
        exact: true,
        requireAuth: true
    }
}