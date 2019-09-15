<template>
    <div class="sigin-create">
      <a href="#" @click="sigin()">Sign </a>In or <a href="#" @click="regis()">Create Account</a>
    </div>
</template>
<script>
export default {
   data () {
    return {
    }
  },


  methods:{
    sigin(){
       let self= this;
      self.$router.push("/customer/login");
    },
    regis(){
       let self= this;
      self.$router.push("/customer/regis");
    }
  }
}
</script>


<style scoped>
.sigin-create {
	position: absolute;
  top: 50px;
  right: 20px;
	padding: 0 10px;
}
</style>