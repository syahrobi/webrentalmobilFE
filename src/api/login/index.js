import VueResource from "vue-resource";
import Vue from "vue";
import { getApiNoAuth } from "../utils.js";

Vue.use(VueResource);

export default {
  // getLogin(window, username, password){
  //     return getApiNoAuth()
  //     .get('DataUsers/findOne?filter=%7B%22where%22%3A%7B%22and%22%3A%5B%7B%22username%22%3A%22'+username+'%22%7D%2C%7B%22password%22%3A%22'+password+'%22%7D%5D%7D%7D')
  //     .then(function (response){
  //         console.log(response)
  //         return response.data
  //     }).catch(function(err){
  //         console.log(err)
  //     })
  // },

  loginUser(window, username, password) {
    let self = this;
    return getApiNoAuth()
      .get("users" + username + "/" + password + "/")
      .then(function(response) {
        console.log(response);
        localStorage.setItem("token", response.data.id);
        localStorage.setItem("userId", response.data.userId);
        return response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
