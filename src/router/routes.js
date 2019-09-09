import Login from '@/components/Login.vue';
import Login2 from '@/components/Login2.vue';
import MainMenu from '@/components/MainMenu.vue';
import UploadAssesment from '@/components/UploadAssesment.vue';
import UploadBerita from '@/components/UploadBerita.vue';
import History from '@/components/History.vue';
import Page from '@/components/customer/Page.vue';
import Sigin from '@/components/customer/Sigin.vue';
import Regis from '@/components/customer/Regis.vue';

const routes = [
    { path: '/', component: Login, name:'login'},
    
    { path: '/mainmenu', component: MainMenu, name:'mainmenu'},
    { path: '/history', component: History, name:'history'},
    { path: '/assesment', component: UploadAssesment, name:'uploadassesment'},
    { path: '/berita', component: UploadBerita, name:'uploadberita'},
    { path: '/login2', component: Login2, name:'login2'},
    { path: '/customer/page', component: Page},
    { path: '/customer/sigin', component: Sigin},
    { path: '/customer/regis', component: Regis},
];

export default routes;