<template>
    <div class="bar">
    <q-toolbar class="bg-black text-white shadow-2">
      <q-tabs v-model="tab"  class="text-white shadow-2">
        <q-tab name="sedan" label="SEDAN" class="gesersedan"/>
        <q-tab name="mpv" label="MPV" class="gesermpv"/>
        <q-tab name="bus" label="MINI BUS" class="geserbus"/>
        <q-tab name="minibus"/>
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tab: 'sedan'
        }
    }
}
</script>

<style lang="stylus" scoped>
.bar{
 position: absolute;
 width: 1315px;
 top: 170px;

}
.gesersedan{
 position: absolute;
  left: 300px;
}
.geserbus{
 position: absolute;
  left: 900px;
}
.gesermpv{
 position: absolute;
  left: 600px;
}

</style>