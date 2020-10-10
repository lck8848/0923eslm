<template>
	<view class="container">
		<!--pages/home/home.wxml-->
		<view class="home-container">
			<!-- tab -->
			<view class="tab" id="menu">
				<van-tabs :active="active" @click="changeActive">
					<van-tab title="综合排序"></van-tab>
					<van-tab title="距离最近"></van-tab>
					<van-tab title="销量最高"></van-tab>
					<van-tab title="筛选"></van-tab>
				</van-tabs>
				<image class="screenImg" src="/static/icon/screen.png" mode=""></image>
			</view>
			
			<view class="merchant-container">
				<view class="item" v-for="item in merchantList" :key="item.m_id" @click="getShopPage(item)">
					<view class="left">
						<image class="food_img" :src="item.m_img" mode=""></image>
					</view>
					<view class="right">
						<view class="title">{{ item.m_name }}</view>
						<view class="sales">
							<uni-rate size="13" class="rateAbsu" allow-half :value="item.grade" />{{ item.grade }} 月售{{ item.sales_number }}单
						</view>
						<view class="footer">
							<view class="distribution">
								￥{{ item.start_money }}起送 | {{ getDistribution(item.distribution) }}
							</view>
							<view class="distance">
								{{ getDistance(item.distance) }} | {{ item.time }}分钟
							</view>
						</view>
						<view class="specialty">
							{{item.signboard}}
						</view>
					</view>
					
				</view>
			</view>
			</view>
			

	</view>
</template>

<script>
	import { merchantList } from '../../api/homeApi.js';
	export default {
		props:['fId'],
		data() {
			return {
				 merchantList:[],
				 active: 0,
				
				
			}
		},
		
		methods: {
			getShopPage(item){
				let itemStr = JSON.stringify(item);
				uni.navigateTo({
				    url: `/pages/shop/shop?item=${itemStr}`
				});
			},
			getTop(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200
				});
			},
			// 根据距离显示
			getDistance(distance){
				return distance > 1 ? distance + "km" : distance * 1000 + "m";
			},
			// 根据配送费显示
			getDistribution(distribution){
				return distribution <= 0 ? "免配送费" : "配送￥" + distribution;
			},
			// 根据指定字段给数组进行排序
			sortMerList(filed,bool){
				this.merchantList.sort((x,y)=>{
					// 升序
					let a = parseFloat(x[filed]);
					let b = parseFloat(y[filed]);
					if(bool){
						if(a > b){
							return 1;
						}else {
							return -1;
						}
					}else {
						// 降序
						if(a < b){
							return 1;
						}else {
							return -1;
						}
					}
					
				})
			},
			changeActive(event){
				this.active = event.detail.index;
				switch(this.active){
					case 0:
						//距离最近排序 
						this.sortMerList("m_id",false);
						break;
					case 1:
						//距离最近排序 
						this.sortMerList("distance",true);
						break;
					case 2:
						// 销量最高排序
						this.sortMerList("sales_number",false);
						break;
					default:
						break;
				}
			},
			// 获取商家所有商家
			async getMerchantList(){
				let params = {};
				if(this.fId){
					params.f_id = this.fId;
				}
				
				let res = await merchantList(params);
				
				this.merchantList = res.merchantList;
				console.log(this.merchantList);
				// 默认第一个加载对距离最近排序
				this.sortMerList("m_id",false);
			}
		},
		
		onReady(){
			
		},
		components: {
		},
		created(){
			// 初始化加载，获取商家信息
			this.getMerchantList();
			console.log(123,this.fId);
		}
	}
</script>

<style lang="scss" scoped>
	#menu {
		position: fixed;
		top: 82px;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 15;
	}

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
	.home-container .merchant-container {
		margin-top: 80rpx;
	}
	.home-container .merchant-container .item {
		display: flex;
		padding: 10rpx 20rpx 10rpx;
		.left {
			width: 180rpx;
			height: 180rpx;
			margin-right: 20rpx;
			.food_img {
				width: 100%;
				height: 100%;
			}
		}
		.sales {
			display: flex;
			margin: 10rpx 0;
			margin-left: 140rpx;
			.rateAbsu {
				position: absolute;
				top: 37%;
				left: 0;
			}
		}
		.right {
			flex: 1;
			font-size: 24rpx;
			color: #666;
			position: relative;
			.title {
				font-size: 32rpx;
				font-weight: 900;
				color: #000;
			}
			.footer {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;
				.distribution {
				}
				.distance {
					color: #999;
				}
			}
		}
	}
	
	.home-container .tab {
		position: relative;
		.screenImg {
			position: absolute;
			top: 34rpx;
			right: 5%;
			width: 24rpx;
			height: 24rpx;
			z-index: 5;
		}
	}
	
	.home-container .van-grid .text {
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #666;
	}

</style>
