<template>
	<div class="warp">
		<div class="header">
			工单类型：
			<span>主动运维</span>
		</div>
		<div class="form">
			<SearchForm>
				<template slot="import">
					<a-upload name="file" action="http://10.168.4.233:8888/excel/upload">
						<a-button :loading="uploadButtonIsLoading">
							<a-icon type="upload" /> {{ uploadButtonIsLoading ? '上传中...' : '上传文件' }}
						</a-button>
					</a-upload>
				</template>
			</SearchForm>
		</div>
		<div class="table">
			<!-- 		<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="temColumns"
				:data="temData.data" operationName="">
							<template v-slot="slotProps">
					<a-button @click.stop="operation(slotProps.table_key)">转派</a-button>
				</template>
			</Tables> -->
		</div>
		<div class="drawer">
			<Drawer :visible="drawerVisible" @changeDrawer="drawerVisible = !drawerVisible" :clickRow="clickRow"
				:columns="columns" />
		</div>
	</div>
</template>

<script>
	import SearchForm from '@/components/searchform/SearchForm'
	import Tables from "@/components/tables/Tables";
	import Drawer from "@/components/drawer/Drawer";
	import axios from 'axios'
	import {
		uploadFile
	} from '@api/DFZT'
	import {postAction} from '@api/manage'
	const columns = [{
			title: "生成时间",
			dataIndex: "a",
		},
		{
			title: "检修编号",
			dataIndex: "b",
		},
		{
			title: "台区经理",
			dataIndex: "c",
		},
		{
			title: "缺陷个数",
			dataIndex: "d",
		},
		{
			title: "消缺个数",
			dataIndex: "e",
		},
		{
			title: "处理人",
			dataIndex: "f",
		},
		{
			title: "完成时间",
			dataIndex: "k",
		},
	];

	const data = [];
	for (let i = 0; i < 46; i++) {
		data.push({
			key: i,
			a: `Edward King ${i}`,
			b: 32,
			c: `London, Park Lane no. ${i}`,
			d: `Edward King ${i}`,
			e: 32,
			f: `London, Park Lane no. ${i}`,
			g: `Edward King ${i}`,
			orderStatus: 32,
			i: `London, Park Lane no. ${i}`,
			j: `Edward King ${i}`,
			k: 32,
			l: `i`,
			m: `rd King ${i}`
		});
	}
	var XLSX = require('xlsx');
	export default {
		data() {
			return {
				data,
				columns,
				selectedRowKeys: [],
				drawerVisible: false,
				selectItem: {},
				clickRow: {},
				uploadButtonIsLoading: false,
				temData: [],
				temColumns: [{
						title: "姓名",
						dataIndex: "username",
					},
					{
						title: "年龄",
						dataIndex: "age",
					},
					{
						title: "密码",
						dataIndex: "password",
					},
				]
			};
		},
		components: {
			Tables,
			Drawer,
			SearchForm
		},
		created() {},
		methods: {
			async fileHandleChange(info) {
				this.uploadButtonIsLoading = true;
				console.log(info.file.status)
				let formData = new FormData()
				
				formData.append('file', info.file.originFileObj)
				// console.log(formData)
				const res = await postAction('/excel/upload',formData)
				console.log(res);
				if (info.file.status !== 'uploading') {
					// console.log(info.file, info.fileList);
					let formData = new FormData()
					
					formData.append('file', info.file.originFileObj)
					// console.log(formData)
					const res = await uploadFile(formData)
					console.log(res);
					// var config = {
					// 	method: 'post',
					// 	url: 'http://10.168.4.233:8888/excel/upload',
					// 	data: formData
					// };

					// axios(config)
					// 	.then(function(response) {
					// 		console.log(JSON.stringify(response.data));
					// 	})
					// 	.catch(function(error) {
					// 		console.log(error);
					// 	});
					this.uploadButtonIsLoading = false
					
				}
				if (info.file.status === 'done') {
					this.$message.success(`${info.file.name} file uploaded successfully`);
				} else if (info.file.status === 'error') {
					this.$message.error(`${info.file.name} file upload failed.`);
				}
			},

			changeSelectedRowKeys(e) {
				this.selectedRowKeys = e;
			},
			clickRows(e) {
				console.log(e);
				this.clickRow = e;
				this.drawerVisible = true;
			},

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

		.form {
			// width: 90%;
			margin: 10px 0;
		}
	}
</style>
