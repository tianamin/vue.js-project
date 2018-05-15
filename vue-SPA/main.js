import Vue from 'vue';
import Vuex from 'vuex';

import App from './app.vue';


Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		count:0,		
		list:[1,5,8,10,30,50]
	},
	getters:{
		filteredList:state=>{
			return state.list.filter(item=>item<10);
		},
		listCount:(state,getters)=>{
			return getters.filteredList.length;
		}
	},
	mutations:{
		increment(state,n=1){
			state.count+=n;
		},
		decrease(state){
			state.count--;
		}
	},
	actions:{
		increment(context){
			context.commit("increment");
		},
		asyncIncrement(context){
			return new Promise(resolve=>{
				setTimeout(function() {
					context.commit("increment");
					resolve();
				}, 1000);
			})
		}
	}

});


new Vue({
  el: '#app',
  store:store,
  template: '<App/>',  
  components: { App }   
});
