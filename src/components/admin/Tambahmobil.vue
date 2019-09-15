<template>

    <q-card class="q-pa-md" style="width:50%;  left : 210px;">
       
        <div style="text-align: center;"><h5 >Form Tambah Mobil</h5></div>
        <div class="row"  style="margin-left : 50px;">
                    <div class="row"> <br>Mobil :  
                    <q-input style="margin-left : 64px;"
                      filled
                      v-model="namamobil"
                    />
                    </div>
                   
                    <div class="row"><br>Kategori : <q-input style="margin-left : 45px; margin-top : 11px;"
                      filled
                      v-model="kategori"
                    /></div>

                     <div class="row"><br>No Polisi :  <q-input style="margin-left : 42px; margin-top : 11px;"
                      filled
                      v-model="noPolisi"
                    /></div>

                     <div class="row"><br>Harga perhari :  <q-input style="margin-left : 11px; margin-top : 11px;"
                      filled
                      v-model="harga"
                    /></div>

                     <div class="row"><q-uploader 
                       url="http://localhost:4444/upload"
                       label="Gambar Mobil"
                       multiple
                       accept=".jpg,png, image/*"
                       style="max-width: 300px; margin-top : 11px;" 
                     />
                   </div>
                 
                      <div class="row"><br><br><q-btn label="Add" color="black" style="margin-left : 105px; margin-top : 11px;"/></div>
        </div>
    </q-card>
</template>
<style lang="stylus" scoped>
 .mycard{
    
 }
</style>