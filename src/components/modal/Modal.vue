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
			modalName: {
				type: String,
				default: ''
			},
			modalRadioOptions: {
				type: String,
				default: '通过'
			}
		},
		data() {
			return {
				modalVisible: false,

			}
		},

		watch: {
			visible(val, valOld) {
				this.modalVisible = val
			}
		},
		created() {
			console.log(this.toggle)
		},
		methods: {

			handleCancel() {
				this.modalVisible = !this.modalVisible
				this.$emit("changeModal", false)
			},


			handleOk(e) {
				if(this.modalRadioOptions=="通过"){
					this.$message.success(
						'此工单审核已通过，将自动归档',
						3,
					);
				}else{
					this.$message.error(
						'此工单审核未通过，将派发给台区经理王飞',
						3,
					);
				}

				this.modalVisible = !this.modalVisible
				this.$emit("changeModal", false)
			},
		},
	};
</script>
