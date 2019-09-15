

//import MainMenu from '@/components/MainMenu.vue';
//import UploadAssesment from '@/components/UploadAssesment.vue';
//import UploadBerita from '@/components/UploadBerita.vue';
//import History from '@/components/History.vue';
import Page from '@/components/customer/Page.vue';
import Login from '@/components/customer/Login.vue';
import Regis from '@/components/customer/Regis.vue';
import Calender from '@/components/customer/Calender.vue';
import Menu from '@/components/admin/Menu.vue';
import Daftarmobil from '@/components/admin/Daftarmobil.vue';
import Commodity from '@/components/owner/Commodity.vue';

const routes = [
  
    
    //{ path: '/mainmenu', component: MainMenu, name:'mainmenu'},
   // { path: '/history', component: History, name:'history'},
   // { path: '/assesment', component: UploadAssesment, name:'uploadassesment'},
   // { path: '/berita', component: UploadBerita, name:'uploadberita'},
    { path: '/', component: Page, name:'page'},
    { path: '/owner/commodity', component: Commodity, name:'commodity'},
    { path: '/customer/login', component: Login, name:'login'},
    { path: '/customer/regis', component: Regis, name:'regis'},
    { path: '/customer/calender', component: Calender, name:'calender'},
    { path: '/admin/menu', component: Menu, name:'menu'},
    { path: '/admin/daftarmobil', component: Daftarmobil, name: 'daftarmobil' },
];

export default routes;