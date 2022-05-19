<template>
  <div class="warp">
    <table border="1px">
      <tr v-for="(item,index,i) in clickRow" :key="index">
        <th>{{columns[i].title}}</th>
        <th>{{item}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'OrderInfo',
    props: {
      clickRow: {
        type: Object,
        required: true
      },
      columns: {
        type: Array,
        required: true
      }
    },

  }
</script>

<style>
</style>
