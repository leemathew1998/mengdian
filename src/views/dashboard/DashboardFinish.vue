<template>
  <div class="warp">
    <div class="right">
      <a-button>当月</a-button>
      <a-button type="primary">
        最近7日
      </a-button>
      <a-range-picker :default-value="defaultValue" format="YYYY/MM/DD" />
    </div>
    <Charts :legendData="['待处理', '已处理']" :xAxisData="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :yAxismin="0"
      :yAxismax="50" :seriesData="seriesData" id="main">
    <template>
      <div id='main'></div>
    </template>
    </Charts>
  </div>

</template>

<script>
  import moment from 'moment';
  import Charts from '@/components/charts/Charts'
  // console.log(moment().startOf('month').format('YYYY/MM/DD'))

  export default {
    name: 'DataboardFinish',
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
    mounted() {
      // console.log(this.startOfOneWeek())
    },
    methods: {
      moment,
      startOfMonth() {
        // 从每个月开始到今天的数组日期，作为X轴
        let start = moment().startOf('month')
        const res = []
        while (start.isBefore(moment(), 'days')) {
          res.push(start.format('YYYY/MM/DD'))
          start = start.add(1, 'days')
        }
        res.push(moment().format('YYYY/MM/DD'))
        return res
      },
      startOfOneWeek(){
        // 从一周前开始到今天的数组日期，作为X轴
        let start = moment().add(-6, 'days')
        const res = []
        while (start.isBefore(moment(), 'days')) {
          res.push(start.format('YYYY/MM/DD'))
          start = start.add(1, 'days')
        }
        res.push(moment().format('YYYY/MM/DD'))
        return res
      }
    },

  };
</script>

<style lang="less" scoped>
  .warp {
    display: flex;
    flex-direction: column;
    position: relative;

    .right {
      position: absolute;
      top: -20px;
      right: 0px
    }

    #chart,#main {
      width: 100%;
      height: 400px;
    }
  }
</style>
