import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import "./main.scss"
const app = new Vue({
	...App
})
app.$mount()
