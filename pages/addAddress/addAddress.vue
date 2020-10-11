<template>
	<view class="addr-container">
		<van-cell-group>
			<van-field label="联系人" :value="value1" placeholder="姓名" :border="false" @change="onChange1" />
			<view class="sex">
				<van-tag type="primary" @click="setCol" size="large" plain color="#ccc" >先生</van-tag>
				<view class="nbsp"></view>
				<van-tag type="primary" size="large" plain color="#ccc">女士</van-tag>
			</view>
			<van-field label="电话" :value="value2" placeholder="手机号码" :border="false" @change="onChange2" />
			<van-field label="地址" :value="value3" :readonly="true" placeholder="小区/写字楼/学校等" :border="false" @change="onChange3" @click-icon="onclick3" :is-link="true"/>
			<van-field label="门牌号" :value="value3" placeholder="10号楼5层501室222" :border="false" @change="onChange3" @click-icon="onclick3" right-icon="edit"/>
			<view class="home">
				<view class="title">
					标签
				</view>
				<van-tag type="primary" size="large" plain color="#ccc" >家</van-tag>
				<view class="nbsp"></view>
				<van-tag type="primary" size="large" plain color="#ccc">学校</van-tag>
				<view class="nbsp"></view>
				<van-tag type="primary" size="large" plain color="#ccc">公司</van-tag>
			</view>
		</van-cell-group>
		
		<view class="btn">
			<button type="primary">确定</button>
		</view>
	</view>
</template>
<script>
	import tag from '../../components/uni-tag/uni-tag.vue';
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: ''
		};
	},
	components:{
		"uni-tag":tag
	},
	methods: {
		setCol(){
			console.log('event');
		},
		onChange1(event) {
			// event.detail 为当前输入的值
			console.log(event.detail);
		},
		onChange2(event) {
			// event.detail 为当前输入的值
			console.log(event.detail);
		},
		onChange3(event) {
			// event.detail 为当前输入的值
			console.log(event.detail);
		},
		onClick3(event) {
			// event.detail 为当前输入的值
			console.log(1);
			console.log(event.detail);
		}
	}
};
</script>
<style lang="scss" scoped>
	.addr-container {
		background-color: #e9e9e9;
		height: 800px;
		.sex {
			padding-left: 220rpx;
		}
		.nbsp {
			display: inline-block;
			width: 20rpx;
		}
		.home {
			display: flex;
			padding: 20rpx 0;
			.title {
				font-size: 28rpx;
				margin-left: 30rpx;
				margin-right: 150rpx;
			}
		}
		.btn {
			margin-top: 30rpx;
			padding: 0 20rpx;
		}
	}
	
</style>
