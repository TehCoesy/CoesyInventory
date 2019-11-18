import Login from '../Components/Common/Login';
import InventoryManagement from '../Components/Users/InventoryManagement';
import TicTacToe from '../Components/Extra/TicTacToe';
import SamplePage from '../Components/Extra/SamplePage';
import Home from '../Components/Common/Home';
import page1 from '../Components/Users/page1';
import User from '../Components/Users/User';

export default {
    login: {
        path: '/login',
        component: Login,
        exact: true,
        requireAuth: false
    },

    ttt: {
        path: '/ttt',
        component: TicTacToe,
        exact: true,
        requireAuth: false
    },

    inventory: {
        path: '/inventory',
        component: InventoryManagement,
        exact: true,
        requireAuth: true
    },

    sample: {
        path: '/sample',
        component: SamplePage,
        exact: true,
        requireAuth: false
    },
    
    home: {
        path: '/home',
        component: Home,
        exact: true,
        requireAuth: false
    },
    page1: {
        path: '/page1',
        component: page1,
        exact: true,
        requireAuth: false
    },
    test: {
        path: '/test',
        component: page1,
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