<template>
	<div class="warp">
		<div class="wrap-left"></div>
		<div class="wrap-center"></div>
		<div class="wrap-right"></div>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.warp {
		display: flex;
		width: 100%;
		height: 100vh;
		.wrap-left{
			flex: 2;
			background-color: aqua;
		}
		.wrap-center{
			flex: 5;
			background-color: yellow;
		}
		.wrap-right{
			flex: 3;
			background-color: pink;
		}
	}
</style>
