<template>
  <div class="warp">
    <table border="1px">
      <tr v-for="(item,index,i) in clickRow" :key="index">
        <th>{{columns[i].title}}</th>
        <th>{{item}}</th>
      </tr>
    </table>
    <!-- <a-descriptions v-for="(item,index) in clickRow" :key="index" bordered>
          <a-descriptions-item label=item :span="2">
            {{ 1}}
          </a-descriptions-item>
    </a-descriptions> -->
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
    data() {
      return {
      }
    },
    mounted() {
     
    },
  }
</script>

<style>
</style>
