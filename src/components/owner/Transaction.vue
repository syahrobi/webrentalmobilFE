<template>
  <div>
    <chartjs-line v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-line>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ["feb 2019", "Apr 2019", "June 2019", "Agt 2019"],
      datasets: [
        {
          data: [20, 30, 60, 80],
          backgroundColor: ["Red", "Green", "Blue"]
        }
      ],
      option: {
        title: {
          display: true,
          position: "bottom",
          text: "Transaction Summary"
        }
      }
    };
  }
};
</script>

<style scoped>
</style>>

