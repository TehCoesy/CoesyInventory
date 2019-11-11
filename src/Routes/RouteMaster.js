import Login from '../Components/Login';
import InventoryManagement from '../Components/InventoryManagement';
import TicTacToe from '../Components/TicTacToe';
import SamplePage from '../Components/SamplePage';
import Home from '../Components/Home';
import page1 from '../Components/page1';
import User from '../Components/User';


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
    user:
    {
        path: '/user',
        component: user,
        exact: true
    },
    test: {
        path: '/test',
        component: page1,
        exact: true
    },
}