import Login from '@/components/Login.vue';
import MainMenu from '@/components/MainMenu.vue';

const routes = [
    { path: '/', component: Login, name:'login'},
    { path: '/mainmenu', component: MainMenu, name:'mainmenu'},

];

export default routes;