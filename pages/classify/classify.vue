<template>
	<view class="classify-container">
		<v-tabs v-model="current" :tabs="tabs" @change="changeTab" height="80rpx" :fixed="true" bgColor="#008EFF" activeColor="#FFF" color="#fff"></v-tabs>
		<merchant :fId="classify" :isMenuFix="isMenuFix"></merchant>
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
				isMenuFix: false,
				 current: 0,
				 tabs: ['全部', '面食粥点', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系','','','']
			};
		},
		methods:{
			changeTab(index) {
				console.log('当前选中的项：' + index)
			}
		},
		components:{
			merchant,
			tabs
		},
		onLoad(e){
			this.classify = e.classify;
		},
		onPageScroll(e){
			let currentHeigth = e.scrollTop;
			let scrollHeigth = 200;
			if(currentHeigth > scrollHeigth){
				this.isMenuFix = true;
			}else {
				this.isMenuFix = false;
			}
		},
		async created(){
			// let res = await foodList(1);
			// console.log(res)
		}
	}
</script>

<style lang="scss">
	.classify-container {
		height: 2000rpx;
	}
	
</style>
