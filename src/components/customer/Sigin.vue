<template>
   <div class="flex flex-center" >
       <div class="q-pa-md" style="max-width: 350px; width:100%;text-align:center;">
           <img style="width : 300px; margin-top:150px;" src="../assets/logorental.png" />
          <form style="margin-top:50px;">
              
               <q-input
                filled
                v-model="username"
                label="Username *"
               
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

              <q-input
               filled
               v-model="password"
               label="Password *"
              
               type="password"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
          <div >
            <q-btn style="position:absolute; bottom:200px; left:540px;" label="Login" type="submit" color="black" />
            <q-btn @click="signup" style="position:absolute; bottom:200px; right:540px;" label="Sign up" color="black"  />
          </div>
          </form> 
       </div>
   </div>
</template>

<script>
export default {
   data () {
    return {
    }
  },

  methods:{
    signup(){
       let self= this;
      self.$router.push("/customer/regis");
    }
  }
}
  </script>