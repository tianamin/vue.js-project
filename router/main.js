import Vue from 'vue';
import App from './app.vue';
import Indev from "./views/index.vue";
import Inuse from "./views/user.vue";
import Inabout from "./views/about.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
 // component:Indev
// component:Inabout
// component:Inuse
const Routers=[
		{
			path:"/index",
			meta:{
				title:"首页"
			},
			 component:(resolve)=>require(['./views/index.vue'],resolve),
			

		},

		{
			path:"/about",
			meta:{
				title:"关于"
			},
			 component:(resolve)=>require(['./views/about.vue'],resolve)			
			
		},
		{
			path:"/user/:id",
			meta:{
				title:"个人主页"
			},
			 component:(resolve)=>require(['./views/user.vue'],resolve)			
			
		},
		{
			path:"*",
			redirect:"/index"
		}		
];


const RouterConfig={
	 //mode:'history',
	 mode: 'hash',           //模式：为hash时，打包后依然可用。而且在
	routes:Routers                 //webpack-dev-server 下，浏览器直接输入和跳转到user，都可得到结果
};

const router=new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
	window.document.title=to.meta.title;
	next();
});


new Vue({
  el: '#app',
  router:router,
  template: '<App/>',  
  components: { App }   
});

