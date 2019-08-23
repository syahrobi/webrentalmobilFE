<template>
    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 350px; width:100%;text-align:center;">
        <q-form class="q-gutter-md">
          
            <img src="../assets/ojk.png" alt="Logo Tekno" height="120" width="300" margin="20px" />
          
          <q-input
            filled
            v-model="username"
            label="Username *"
            hint="Your Username"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="password"
            label="Password *"
            hint="Your Password"
            type="password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div>
            <q-btn label="Login" type="submit" color="black" />
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
</template>

<style>
  .q-field__control{
    color: black !important;
  }
</style>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: "",
      password: "",
      roles: ""
    };
  },
}
</script>
