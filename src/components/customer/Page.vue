<template >

 <div class="q-pa-md">
   <search></search>
<div class="row justify-center">
      <div>
       <img src="../assets/logorental.png" />
      </div>
</div>

  <SiginLabel ></SiginLabel>
 <bar></bar>
 <slide></slide>
  <div  class="login"><img src="../assets/iconlogin.png"/></div>
  <div class="row">
    <card></card>
    <card></card>
  </div>
  <Footer></Footer>  
</div>

</template>

<script>
import Search from "@/components/customer/Search.vue"
import Bar from "@/components/customer/Bar.vue"
import Slide from "@/components/customer/Slide.vue"
import Card from "@/components/customer/Card.vue" 
import SiginLabel from "@/components/customer/SiginLabel.vue"
import Footer from "@/components/customer/Footer.vue"


export default {
  data () {
    return {
    }
  },

  components:{
    Search,
    Bar,
    Slide,
    Card,
    SiginLabel,
    Footer
  }
}


</script>

<style lang="stylus" scoped>


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

