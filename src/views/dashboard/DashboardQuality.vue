<template>
  <div class="warp">
    <div class="header">
      <div class="left">
        <a-select default-value="lucy" style="width: 120px" @change="handleChange">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
          <a-select-option value="disabled" disabled>
            Disabled
          </a-select-option>
          <a-select-option value="Yiminghe">
            yiminghe
          </a-select-option>
        </a-select>
        <a-select default-value="lucy" style="width: 120px" disabled>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
        </a-select>
        <a-select default-value="lucy" style="width: 120px" loading>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
        </a-select>
      </div>
      <div class="right">
        <a-button>周</a-button>
        <a-button>月</a-button>
        <a-button>年</a-button>

        <a-range-picker :default-value="defaultValue" format="YYYY/MM/DD" />
      </div>
    </div>
    <Charts :legendData="['待处理啊', '已处理啦']" :xAxisData="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :yAxismin="0"
      :yAxismax="50" :seriesData="seriesData" id="chart">
      <template>
        <div id='chart'></div>
      </template>
    </Charts>
  </div>

</template>

<script>
  import moment from 'moment';
  import Charts from '@/components/charts/Charts'
  export default {
    name: 'DashboardQuality',
    data() {
      return {
        defaultValue: [moment(moment().add(-6, 'days').format('YYYY/MM/DD'), "YYYY/MM/DD"), moment(moment().format(
          'YYYY/MM/DD'), "YYYY/MM/DD")],
        seriesData: [
          [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3],
          [2.6, 5.9, 9.0, 26.4, 28.7, 7.7, 15.6, 18.2, 48.7, 18.8, 6.0, 2.3]
        ]
      };
    },
    components: {
      Charts
    },

    methods: {
      moment,
      handleChange(value) {
        console.log(`selected ${value}`);
      },
    },
  };
</script>

<style lang="less" scoped>
  .warp {
    display: flex;
    flex-direction: column;
    padding: 10px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #chart,
    #main {
      width: 100%;
      height: 400px;
    }
  }
</style>
