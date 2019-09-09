<template>


    <div class="flex flex-center">
      {{userNoww}}
      <div class="q-mt-xl q-mr-xl">
        <img src="../assets/ojk.png" alt="Logo Tekno" height="120px" width="300px"  margin-right="100"/>
      </div>
      <div class="q-mt-xl q-ml-xl" style="max-width: 450px; width:50%; text-align:center;">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          
            
          
          <q-input
           hint="Your Username"
          v-model="username"
           
            filled
             label="Username *"
            
           
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled :type="isPwd ? 'password' : 'text'"
            v-model="password"
            label="Password *"
            hint="Your Password"
           
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div>
            <q-btn rounded push color="secondary" label="Login2" type="submit" class="q-mr-xl"/>
            <q-btn label="Reset" type="reset" color="black" class="q-ml-xl" />
          </div>
        </q-form>
      </div>
      <div>
        {{dataRoles}}
      </div>
    </div>
</template>

<style>
q-btnkiri{
  margin-right: 100px;
  color: blue;
}

q-field_control{
    color: yellowgreen !important;
    
}
</style>

<script>
import login_api2 from '../api/login2/index';
import roles from '../api/roles/index';
export default{
    name : 'Login2',
    data(){
      return {
         username: "",
         password: "",
         userNow:""
    }; 
      },

      computed:{
          userNoww(){
            this.$ls.get("userNow");
    }
      },

      methods:{
         onSubmit() {
      let self = this;
      let credentials = {
        username : self.username,
        password : self.password
      }

      console.log(credentials)


      login_api2
        .loginUser(credentials,window)  
        .then(function(result) {
          roles
          .getDataRoles(window).then(function(res){
            console.log(res)
            self.dataRoles = res
          })
          if (!result) {
            self.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "fas fa-exclamation-triangle",
              message: "Wrong Username or Password"
            });
          } else {
            self.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "fas fa-check-circle",
              message: "You're Logged In"
            });
            self.$ls.set("userNow", result.id);
            console.log("id nya dia = ", self.$ls.get("userNow"))
            self.$router.push("mainmenu");
          }
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    onReset() {
      this.username = null;
      this.password = null;
    }
  }
      
}
</script>