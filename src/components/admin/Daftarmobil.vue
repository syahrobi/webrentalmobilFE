<template>
  <div class="q-pa-sm">
      <div><h5 style="text-align: center;">Daftar Mobil</h5></div>
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr class="text-center">
          <th>Nama Mobil</th>
          <th>Kateori</th>
          <th>Picture</th>
          <th>No Pol</th>
          <th>Hara Perhari</th>
          <th>Status Mobil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id"  class="text-center">
          <td>{{post.nameProduct}}</td>
           <td>{{post.category}}</td>
          <td>{{post.pic}}</td>
          <td>{{post.noPol}}</td>
          <td>{{post.daysPrice}}</td>
          <td>{{post.status}}</td>
         
        </tr>
      
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'daftarmobil',
  data () {
    return {
      separator: 'cell',
      posts:[]
    }
  },
   methods:{
       load(){
           axios.get('http://localhost:3000/api/Commodities')
           .then((res)=>{
               this.posts = res.data;
           })
           .catch(()=>{
               alert('Error load data');
           })
       }
   },
   mounted(){
       this.load()
   }
}
</script>