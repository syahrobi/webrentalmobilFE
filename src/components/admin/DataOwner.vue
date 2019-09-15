<template>
  <div class="q-pa-sm">
      <div><h5 style="text-align: center;">Data Owner</h5></div>
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-right">Username</th>
          <th class="text-right">Password</th>
          <th class="text-right">Email</th>
          <th class="text-right">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">1</td>
          <td class="text-right">Syahrul</td>
          <td class="text-right">syahrl123</td>
          <td class="text-right">syahrul@gmail.com</td>
          <td class="text-right">Edit</td>
          <td class="text-right">Delete</td>
        </tr>
        <tr>
           <td class="text-left">2</td>
          <td class="text-right">Adam</td>
          <td class="text-right">adaml123</td>
          <td class="text-right">Adam@gmail.com</td>
          <td class="text-right">Edit</td>
          <td class="text-right">Delete</td>
        </tr>
        
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      separator: 'cell'
    }
  }
}
</script>