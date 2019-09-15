<template >
 <div class="q-pa-md">
  
<div class="row justify-center">
      <div>
       <img src="../assets/logorental.png" />
      </div>
</div>
  
  <SiginLabel />
 <bar/>
 <slide/>
  <div  class="login"><img src="../assets/iconlogin.png"/></div>
  <div class="row">
  
    <!-- <div id="tes">{{mesage}}</div> -->
    <div class="row " style="margin-top:570px;" ><card/><card/><card/><card/><card/><card/> </div>
  
  </div>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Footer/>
    </q-page-container>
  </q-layout>
  
  
</div>

</template>



<script>

import Bar from "@/components/customer/Bar.vue"
import Slide from "@/components/customer/Slide.vue"
 import Card from "@/components/customer/Card.vue" 
import SiginLabel from "@/components/customer/SiginLabel.vue"
import Footer from "@/components/customer/Footer.vue"


export default {
  name : 'page',
   data () {
    return {
    }
  },

  components:{
    Card,
    Bar,
    Slide,
    Card,
    SiginLabel,
    Footer
  }
}


</script>

<style lang="stylus" scoped>
.header-search-form {
		width: 50%;
    height: 40px;
	position: absolute;
  top: 80px;
	padding: 0 100px;
    right :350px;
}

.login{
  
  position: absolute;
  top: 40px;
  right  : 211px;
  height: 4px;
  width: 4px;
}


/*------------------
  Header section
---------------------*/



.colorr {
  background-color: aqua;
}
.user-panel .up-item {
	display: inline-block;
	font-size: 14px;
}
.user-panel .up-item i {
	font-size: 22px;
}
</style>