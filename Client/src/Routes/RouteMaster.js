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
        exact: true
    },

    ttt: {
        path: '/ttt',
        component: TicTacToe,
        exact: true
    },

    inventory: {
        path: '/inventory',
        component: InventoryManagement,
        exact: true
    },

    sample: {
        path: '/sample',
        component: SamplePage,
        exact: true
    },
    
    home: {
        path: '/home',
        component: Home,
        exact: true
    },
    page1: {
        path: '/page1',
        component: page1,
        exact: true
    },
    test: {
        path: '/test',
        component: page1,
        exact: true
    },
    user: {
        path: '/user',
        component: User,
        exact: true
    }
}