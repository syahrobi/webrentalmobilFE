<template>
<div>
    <div class="header-search-form">
        <q-input  v-model="search"
        debounce="500"
        filled
        placeholder="Cari Mobil">
           <template v-slot:append>
          <q-icon name="search" />
        </template>
        </q-input>
      </div>
</div>
</template>



<style lang="stylus" scoped>
.header-search-form {
		width: 50%;
    height: 40px;
	position: absolute;
  top: 80px;
	padding: 0 100px;
    right :350px;
}
</style>