<template>
  <div class="warp">
    <table border="1px">
      <tr>
        <th></th>
        <th>处理前</th>
        <th>处理后</th>
      </tr>
      <tr v-for="item in columns" :key="item.title">
        <th>{{item.title}}</th>
        <th></th>
        <th></th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Source',
    props: {
      columns: {
        type: Array,
        required: true
      }
    },

  }
</script>

<style>
</style>
