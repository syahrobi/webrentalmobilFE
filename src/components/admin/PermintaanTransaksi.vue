<template>
  <div class="q-pa-sm">
      <div><h5 style="text-align: center;">Permintaan Transaksi</h5></div>
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr class="text-center">
          <th class="text-right">Username</th>
          <th class="text-right">No. Telp</th>
          <th class="text-right">Nama Mobil</th>
          <th class="text-right">No Polisi</th>
          <th class="text-right">Tgl Pinjam</th>
          <th class="text-right">KTP</th>
          <th class="text-right">SIM</th>
          <th class="text-right">No Rekening</th>
          <th class="text-right">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id"  class="text-center">
          <td>{{post.idUSer}}</td>
          <td>{{post.phone}}</td>
          <td>{{post.qHari1}}</td>
          <td>{{post.qHari2}}</td>
          <td>{{post.totalPayment}}</td>
          <td>{{post.ktp}}</td>
          <td>{{post.sim}}</td>
          <td>{{post.rekening}}</td>
          <td class="text-center">
              <q-btn label="Ok" color="black"/><q-btn label="Batal" color="black" style="margin-left : 5px;"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      separator: 'cell',
      posts:[]
    }
  },

   methods:{
       load(){
           axios.get('http://localhost:3000/api/Transactions')
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