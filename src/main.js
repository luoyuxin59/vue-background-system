import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'element-ui/lib/theme-chalk/base.css';
import './assets/css/common.scss'
import './assets/css/global.css'
import './mockjs/index'

// iconfont
import './assets/iconfont/iconfont.css'
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(ElementUI, { size: 'mini'});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
