<template>

  <a-modal v-model="modalVisible" @ok="handleOk" @cancel="handleCancel" :title="modalName" :okText="modalName">
    <div class="modalwarp">
      <div class='top'>
        <slot name="topSlot"></slot>
      </div>
      <div class="main">
        <slot name="mainSlot"></slot>
      </div>
      <div class="footer">
        <slot name="footerSlot"></slot>
      </div>
    </div>
  </a-modal>

</template>
<script>
  export default {
    name: 'Modal',
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      selectItem: {
        required: true
      },
	  modalName:{
		  type:String,
		  default:''
	  }
    },
    data() {
      return {
        modalVisible: false
      }
    },

    watch: {
      visible(val, valOld) {
        this.modalVisible = val
      }
    },
    methods: {
      handleCancel() {
        this.modalVisible = !this.modalVisible
        this.$emit("changeModal", false)
      },
      handleOk(e) {
        this.modalVisible = !this.modalVisible
        this.$emit("changeModal", false)
      },
    },
  };
</script>

