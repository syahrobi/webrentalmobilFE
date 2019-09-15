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

               <q-input filled v-model="email" type="email" suffix="@gmail.com">
               <template v-slot:before>
               <q-icon name="mail" />
               </template>
               </q-input>

          <div >
            <q-btn style="position:absolute; bottom:160px; left:540px; width:280px;" label="creat" type="submit" color="black" />
          </div>
          </form> 
       </div>
   </div>
</template>

<script>

export default {
   name:'regis',
  data () {
    return {
      email: ''
    }
  }
}

</script>

