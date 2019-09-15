<template>
  <div class="q-pa-md">
    
  <q-btn label="Pesan" color="primary" @click="dialog = true" />

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Tentukan Tanggal Pemesanan</div>

           <div>
        <div class="q-pb-sm">
          <q-badge color="teal">
            Dari Tanggal : {{ model1 }}
          </q-badge>
        </div>
        <div class="q-pb-sm">
          <q-badge color="purple" text-color="white">
        
          </q-badge>
        </div>

        <q-date v-model="model1" mask="dddd, MMM D, YYYY" />
      </div>

      <div>
        <div style="margin-top:50px">
          <q-badge color="teal" >
            Sampai Tanggal : {{ model2 }}
          </q-badge>
        </div>
        <div class="q-pb-sm">
          <q-badge color="purple" text-color="white">
           
          </q-badge>
        </div>

        <q-date v-model="model2" mask="dddd, MMM D, YYYY" />
      </div>

        </q-card-section>
        <q-card-section class="row items-center q-gutter-sm">
          
          <q-btn v-close-popup label="Batal" color="primary" />
          <q-btn  style="margin-left:130px" label="Lanjut" color="primary" @click="dialog2 = true" />

          <q-dialog v-model="dialog2">
            <q-card>
              <q-card-section>
                <div class="text-h6">Upload Berkas</div>
                
                 <q-uploader
                  url="http://localhost:4444/upload"
                  label="SIM"
                  multiple
                  accept=".jpg,png, image/*"
                  style="max-width: 300px" 
             />
              </q-card-section>

               <q-card-section>
                 <q-uploader
                  url="http://localhost:4444/upload"
                  label="KTP"
                  multiple
                  accept=".jpg,png, image/*"
                  style="max-width: 300px" 
             />
              </q-card-section>
              <q-card-section>
                   <q-input
                     filled
                     v-model="rekening"
                     label="No Rekening"
                     mask="######################"
                     hint="*Hanya angka"
                    />
              </q-card-section>
              <q-card-section>
                 <q-input
                    filled
                    v-model="phone"
                    label="No Hp"
                    mask="############"
                    hint="*Hanya angka"
                  />
              </q-card-section>
              <q-card-section class="row items-center q-gutter-sm">
                <div></div>
                <q-btn v-close-popup label="Kembali" color="accent" />
                <q-btn @click="dialog=false;dialog2=false;" label="Ok" color="accent" />
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>

  
</template>


<script>

export default {
  name : 'calender',
  data () {
    return {
       rekening:null,
       phone : null,
        date: '209/03/02',
       events: ['209/03/02'],
      dialog: false,
      dialog2: false,
        model1: 'Sunday, Apr 28, 2019',
      model2: 'Sunday, Apr 28, 2019'
    
    }
  },
  

  components:{

  }

 
}
</script>

<style lang="stylus" scoped>
.close{
  position: absolute;
  rigth:20px;
  top:1000px;
}
</style>

