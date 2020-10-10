<template>
	<view class="classify-container">
		<v-tabs v-model="current" :tabs="tabs" @change="changeTab" height="80rpx" :fixed="true" bgColor="#008EFF" activeColor="#FFF" color="#fff"></v-tabs>
		<view class="" v-if="isShow">
			<merchant :fId="classify"></merchant> 
		</view>
		<view class="filex" v-if="isMenuFix" @click="getTop">
			<image class="filexImg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+" mode=""></image>
		</view>
	</view>
</template>

<script>
	import merchant from '@/components/merchant/merchant.vue';
	import tabs from '@/components/v-tabs/v-tabs.vue';
	import { foodList } from '@/api/shopApi.js';
	export default {
		data() {
			return {
				classify: '',
				isShow: false,
				isMenuFix: false,
				 current: 0,
				 tabs: ['全部', '面食粥点', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系','','','']
			};
		},
		methods:{
			changeTab(index) {
				console.log('当前选中的项：' + index)
			},
			getTop(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200
				});
			},
		},
		components:{
			merchant,
			tabs
		},
		
		onLoad(e){
			this.classify = e.classify;
			this.isShow = true;
			// console.log(this.classify)
		},
		onPageScroll(e){
			console.log('111');
			let currentHeigth = e.scrollTop;
			let scrollHeigth = 200;
			if(currentHeigth > scrollHeigth){
				this.isMenuFix = true;
			}else {
				this.isMenuFix = false;
			}
		},
		async created(){
			
		}
	}
</script>

<style lang="scss">
	.classify-container {
		height: 2000rpx;
		
		.filex {
			display: flex;
			position: fixed;
			bottom: 160rpx;
			right: 30rpx;
			align-items: center;
			justify-content: center;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			border: 1px solid #ccc;
			background-color: #fff;
			z-index: 10;
			.filexImg {
				width: 55rpx;
				height: 55rpx;
			}
		}
	}
	
</style>
