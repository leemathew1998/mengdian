<template>
  <div class="warp">
    <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" :columns="columns"
      :data-source="data" bordered @change="pagechange" :customRow="handleClickRow">
      <template slot="orderStatus" slot-scope="text, record">
        <div class='orderStatus'> {{text}}</div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div>
          <slot :table_key="record"></slot>
        </div>
      </template>
    </a-table>

  </div>
</template>

<script>
  export default {
    name: 'Tables',
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      operationName: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        selectedRowKeys: []
      }
    },
    created() {
      if (this.operationName !== '' && this.columns[this.columns.length - 1].dataIndex !== 'operation') {
        this.columns.push({
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: {
            customRender: 'operation'
          },
        })
      }
      // console.log('created')
    },
    updated() {
      // console.log('update')
    },

    mounted() {
      let status = document.getElementsByClassName('orderStatus')
      for (var i = 0; i < status.length; i++) {
        status[i].parentNode.style['backgroundColor'] = '#149BD5'
      }
    },
    methods: {
      onSelectChange(selectedRowKeys) {
        this.selectedRowKeys = selectedRowKeys;
        this.$emit('changeSelectedRowKeys', this.selectedRowKeys)
      },
      pagechange(e) {
        console.log(e)
      },
      handleClickRow(record, index) {
        return {
          on: {
            click: () => {
              this.$emit('clickRow',record)
            }
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .warp {
    width: 100%;

    .orderStatus {}

    .parentNode {
      width: 200px;
      padding: 0;
    }
  }
</style>
