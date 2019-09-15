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
            <q-btn @click="onSubmit" style="position:absolute; bottom:200px; left:540px;" label="Login" type="submit" color="black" />
            <q-btn @click="signup" style="position:absolute; bottom:200px; right:540px;" label="Sign up" color="black"  />
          </div>
          </form>  
          <div>
     
      </div>
       </div>
   </div>
</template>

<script>
import axios from "axios";
import login_api from '../../api/login/index.js';

//   methods:{
//     signup(){
//        let self= this;
//       self.$router.push("/customer/regis");
//     }
// }
export default{
    name:'login',

    data(){
        return {
            
            username:'',
            password:'',
             role: ""
        };
    },


    methods:{
      signup(){        
      let self= this;
      self.$router.push("/customer/regis");
     },
        onSubmit(){
             let self = this;
             var data = {
               username: self.username,
               password: self.password,
                role: self.role
                };

            login
        .loginUser(window, self.username, self.password, self.role)
        .then(function(result) {
          console.log(result);
          if (!result) {
            self.$router.push("/register");
          } else {
            console.log(result.roles);
            if (result.role == "owner") {
              self.$router.push("/register");
            } else if (result.role == "admin") {
              self.$router.push("/admindashboard");
            } else {
              self.$router.push("/customer/login");
            }
          }
          return result;
        })
                .catch(function(err) {
                console.log(err);
                });





              login_api
                .loginUserSpringBoot(credentials, self.password)
                .then(function(result) {
                console.log(result)





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
                    self.$ls.set("userNow", result.full_name);
                    console.log("id nya dia = ", self.$ls.get("userNow"))
                    // self.$router.push("mainmenu");
                    
                    if(result.roles === 'admin'){
                      self.$router.push("/admin/menu");
                    }else if(result.roles === 'customer'){
                      self.$router.push("/customer/page");
                    }else{
                      self.$router.push("/customer/login");
                    }
                }
                return result;
                })
               .catch(function(err) {
                console.log(err);
               });
        }
    }

}
  </script>

  