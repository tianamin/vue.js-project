



import Vue from  "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";


import Routers from "./router.js"
import App from "./app.vue";
import "./style.css";
import product_data from "./product.js";

Vue.use(VueRouter);
Vue.use(Vuex);

const RouterConfig={
	// mode:'history',
	mode:'hash',
	routes:Routers
};
const router=new VueRouter(RouterConfig);


router.beforeEach((to,from,next)=>{
	window.document.title=to.meta.title;
	next();
});
router.afterEach((to,from,next)=>{
	window.scrollTo(0,0);
});


const store=new Vuex.Store({
	state:{
		productList:[],
		cartList:[]
	},
	getters:{
		brands:state=>{
			const brands=state.productList.map(item=>item.brand);
			return getFilterArray(brands);
		},
		colors:state=>{
			const colors=state.productList.map(item=>item.color);
			return getFilterArray(colors);
		}
	},
	mutations:{
		setProductList(state,data){
			state.productList=data;
		},
		setCartList(state,data){
			state.cartList=data;
		},
		addCart(state,id){
			const isAdded=state.cartList.find(item=>item.id===id);
			if (isAdded) {
				isAdded.count++;
			}else{
				state.cartList.push({
					id:id,
					count:1
				})
			}
		},
		editCartCount(state,payload){
			const product=state.cartList.find(item=>item.id===payload.id);
			product.count+=payload.count;
		},
		deleteCart(state,id){
			const product=state.cartList.findIndex(item=>item.id===id);
			state.cartList.splice(index,1);

		},
		emptyCart(state){
			state.cartList=[];
		}
	},
	actions:{
		getProductList(context){
			setTimeout(function() {
				context.commit("setProductList",product_data);
			}, 500);
		},
		buy(context){
			return new Promise(resolve=>{
				setTimeout(function() {
					context.commit("emptyCart");
					resolve();
				}, 500);
			})
		}
	}
});



window.onload=function(){

 	var data=localStorage.getItem("cart");
 	data=JSON.parse(data);
 	console.log(data);
 	store.commit("setCartList",data);
	   	 		
}
window.onbeforeunload=function () {

	 var data=JSON.stringify(store.state.cartList);
	
	localStorage.setItem("cart",data);
}

new Vue({
	el:"#app",
	router:router,
	store:store,
	render:h=>{
		return h(App);
	}
});



function getFilterArray(array) {
	const res=[];
	const json={};
	for (var i = 0; i < array.length; i++) {
		const _self=array[i];
		if (!json[_self]) {
			res.push(_self);
			json[_self]=1;
		}
	}
	return res;
}










