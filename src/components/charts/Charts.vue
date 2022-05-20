<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: 'Charts',
    props: {
      legendData: {
        type: Array,

      },
      xAxisData: {
        type: Array,

      },
      yAxismin: {
        type: Number
      },
      yAxismax: {
        type: Number
      },
      seriesData: {
        type: Array,
      },
      id: {
        type: String
      }
    },
    mounted() {
      // console.log(this.id)
      this.initChart()
    },
    methods: {
      initChart() {
        var chartDom = document.getElementById(this.id);
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data: this.legendData
          },
          xAxis: [{
            type: 'category',
            data: this.xAxisData,
            axisPointer: {
              type: 'shadow'
            }
          }],
          yAxis: [{
            type: 'value',
            min: this.yAxismin,
            max: this.yAxismax,
            interval: 10,
            axisLabel: {
              formatter: '{value}'
            }
          }, ],
          series: []
        };
        // 处理series 数据
        this.seriesData.map((item, index) => {
          let temData = {}
          temData.type = 'bar'
          temData.tooltip = {
            valueFormatter: function(value) {
              return value;
            }
          }
          temData.name = this.legendData[index]
          temData.data = item
          option.series.push(temData)

        })
        // 处理series 数据结束
        option && myChart.setOption(option);
      }
    }
  }
</script>

<style>
</style>
