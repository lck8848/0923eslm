<template>
	<view class="classify-container">
		<merchant :fId="classify" :isMenuFix="isMenuFix"></merchant>
	</view>
</template>

<script>
	import merchant from '@/components/merchant/merchant.vue';
	export default {
		data() {
			return {
				classify: '',
				isMenuFix: false
			};
		},
		components:{
			merchant
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
		}
	}
</script>

<style lang="scss">
	.classify-container {
		height: 3000rpx;
	}
</style>
