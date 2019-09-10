<template>
    <div style="margin-left:10px;margin-top:10px">
      <q-card class="my-card">
      <img src="../assets/Xpander.jpg">
        <div class="">
          <div class="text-h6" style="margin-left:10px;">Mobil Mobilan</div>
          <div class="text-subtitle2"></div>
        </div>
      <img>
      <q-card-actions>
       <Calender></Calender><div class="md"  style="margin-left:8px; margin-top:15px;">Rp. {{price}} / Hari</div>
      </q-card-actions>
    </q-card>
    
    </div>
    
</template>

<script>
import Calender from "@/components/customer/Calender.vue"

export default {
  name : "Card",
  data () {
    return {
      price:100000
     
    
    }
  },
  components:{
    Calender
  },
  methods:{
    pesan(){
    
    }
  }
}

</script>

<style scoped>
.my-card{
  width :100%;
  height : 300px;
  max-width: 250px;
}
</style>

