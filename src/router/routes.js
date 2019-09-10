

import MainMenu from '@/components/MainMenu.vue';
import UploadAssesment from '@/components/UploadAssesment.vue';
import UploadBerita from '@/components/UploadBerita.vue';
import History from '@/components/History.vue';
import Page from '@/components/customer/Page.vue';
import Sigin from '@/components/customer/Sigin.vue';
import Regis from '@/components/customer/Regis.vue';
import Calender from '@/components/customer/Calender.vue';


const routes = [
  
    
    { path: '/mainmenu', component: MainMenu, name:'mainmenu'},
    { path: '/history', component: History, name:'history'},
    { path: '/assesment', component: UploadAssesment, name:'uploadassesment'},
    { path: '/berita', component: UploadBerita, name:'uploadberita'},
    { path: '/', component: Page},
    { path: '/customer/sigin', component: Sigin},
    { path: '/customer/regis', component: Regis},
    { path: '/customer/calender', component: Calender},
 
];

export default routes;