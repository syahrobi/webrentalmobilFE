<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
       
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>
     
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>  <img style="" src="../assets/logorental.png" /></q-item-label>
        
        <q-item clickable tag="a" rel="noopener" @click="panel='daftar'"> 
          <q-item-section avatar>
            <q-icon name="directions_car" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Daftar Mobil</q-item-label>
            <!-- <q-item-label caption>https://quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="panel='tambah'">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tambah Mobil</q-item-label>
            <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="panel='transaksi'">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Permintaan Transaksi</q-item-label>
            <!-- <q-item-label caption>https://chat.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="panel='owner'">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Owner</q-item-label>
            <!-- <q-item-label caption>https://forum.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="panel='customer'">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Customer </q-item-label>
            <!-- <q-item-label caption>https://forum.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container >
       <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="daftar">
         <Daftarmobil/>
        </q-tab-panel>
     
        <q-tab-panel name="tambah"> 
         <Tambahmobil/>
        </q-tab-panel>

         <q-tab-panel name="transaksi"> 
         <PermintaanTransaksi/>
        </q-tab-panel>

        <q-tab-panel name="owner"> 
         <DataOwner/>
        </q-tab-panel>

         <q-tab-panel name="customer"> 
         <DataCustomer/>
        </q-tab-panel>
      
       </q-tab-panels>
    </q-page-container>

  </q-layout>
</template>

<script>
import Daftarmobil from "@/components/admin/Daftarmobil.vue"
import Tambahmobil from "@/components/admin/Tambahmobil.vue"
import PermintaanTransaksi from "@/components/admin/PermintaanTransaksi.vue"
import DataOwner from "@/components/admin/DataOwner.vue"
import DataCustomer from "@/components/admin/DataCustomer.vue"

export default {
   name : 'menu',

  components: {
   Daftarmobil,
   Tambahmobil,
   PermintaanTransaksi,
   DataOwner,
   DataCustomer
  },

  data () {
    return {
       panel: 'daftar'
    }
  }
}
</script>

<style>
</style>
