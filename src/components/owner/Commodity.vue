<template>
  <div>
    <chartjs-bar v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-bar>
  </div>
</template>

<script>
export default {
    name : 'commodity',
  data() {
    return {
      labels: ["Sedans", "MPV", "Mini Bus"],
      datasets: [
        {
          data: [3, 3, 3],
          backgroundColor: ["Red", "Green", "Blue"]
        }
      ],
      option: {
        title: {
          display: true,
          position: "bottom",
          text: "Car Products"
        }
      }
    };
  }
};
</script>

<style scoped>
</style>>

