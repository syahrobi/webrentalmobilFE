<template>
    <div class="slidepage">
  <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="http://www.getacarrentals.com/wp-content/uploads/2013/12/toyota-hiace-high-roof-front-view1.jpg" />
      <q-carousel-slide :name="2" img-src="https://www.trzcacak.rs/myfile/full/407-4074282_toyota-vios-e-sedan-vios-2019-malaysia.png" />
      <q-carousel-slide :name="3" img-src="https://www.lautanberlian.co.id/wp-content/uploads/2018/05/Mitsubishi_Xpander_2017_4096x2731.jpg" />
     
    </q-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return{
            slide: 1
        }
    }
}
</script>

<style scoped>
.slidepage{
  position: absolute;
  top: 220px;
  height: 1000px;
  width: 97.5%;
}
</style>