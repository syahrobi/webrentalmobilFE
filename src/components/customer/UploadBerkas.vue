<template>
  <div class="q-pa-md">
    
    <q-btn flat label="Lanjut" color="primary" @click="confirm = true" />

    <q-dialog v-model="confirm" persistent>
      <q-card>
       <div class="q-pa-sm" align="center">Pilih Tanggal Pemesanan</div>
        <q-card-section class="">
          
          <span class="" >
              <div class="q-gutter-md row items-start">
      <div>
        <div class="q-pb-sm">
          <q-badge color="teal">
            Mulai Tanggal Pemesanan: {{ model1 }}
          </q-badge>
        </div>
        <div class="q-pb-sm">
          <q-badge color="purple" text-color="white">
            
          </q-badge>
        </div>

        <q-date v-model="model1" mask="dddd, MMM D, YYYY" />
      </div>

      <div>
        <div class="q-pb-sm">
          <q-badge color="teal">
           Sampai Tanggal Pemesanan: {{ model1 }}
          </q-badge>
        </div>
        <div class="q-pb-sm">
          <q-badge color="purple" text-color="white">
            
          </q-badge>
        </div>

        <q-date v-model="model2" mask="dddd, MMM D, YYYY" />
      </div>
    </div>
          </span>
        </q-card-section>
        
        <q-card-actions align="right">
          <q-btn flat label="Batal" color="primary" v-close-popup />
          <q-btn flat label="Lanjut" color="primary" v-close-popup="2" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>


<script>
export default {
  data () {
    return {
        
        date: '209/03/02',
       events: ['209/03/02'],
       confirm: false,
        model1: 'Sunday, Apr 28, 2019',
        model2: 'Sunday, Apr 28, 2019'
    
    }
  },
  

 methods: {
  
  }
}
</script>

