<template>
  <div class="warp">
    <table border="1px">
      <tr v-for="(item,index,i) in clickRow" :key="index">
        <th>{{columns[i].title}}</th>
        <th>{{item}}</th>
      </tr>
    </table>
    <!-- <a-descriptions v-for="(item, index, i) in clickRow" :key="index" bordered>
      <a-descriptions-item :span="2">
        <span slot="label">{{ columns[i].title }}</span>
        {{ item }}
      </a-descriptions-item>
    </a-descriptions> -->
  </div>
</template>

<script>
export default {
  name: "OrderInfo",
  props: {
    clickRow: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.clickRow);
    console.log(this.columns);
  },
};
</script>

<style>
</style>
