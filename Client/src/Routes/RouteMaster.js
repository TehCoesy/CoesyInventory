import Login from '../Components/Common/Login';
import InventoryManagement from '../Components/Management/InventoryManagement';
import CreateNewInventory from '../Components/Users/CreateNewInventory';
import UserHome from '../Components/Users/UserHome';
import User from '../Components/Users/User';
import Import from '../Components/Management/Import';
import Export from '../Components/Management/Export';

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

    userHome: {
        path: '/userHome',
        component: UserHome,
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

    import: {
        path: '/import',
        component: Import,
        exact: true,
        requireAuth: true
    },

    export: {
        path: '/export',
        component: Export,
        exact: true,
        requireAuth: true
    },
    
}