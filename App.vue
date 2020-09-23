<script>
export default {
	onLaunch: function() {
		console.log('App Launch33333');
	},
	onShow: function() {
		console.log('App Show222222');
	},
	onHide: function() {
		console.log('App Hide1111111');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
