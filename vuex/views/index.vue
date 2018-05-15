<template>
	<div>
		<div>首页</div>
		<div>{{count}}</div>
		<div>{{list}}</div>
		<div>{{listCount}}</div>
		

		<button @click="handleIncrement">+1</button>
		<button @click="handleDecrease">-1</button>

		<!-- <button @click="handleAsyncIncrement">async+1</button> -->
		<!-- <button @click="handleActionIncrement">action+1</button> -->

		<router-link to="/about">跳转about</router-link>
	
	</div>
	
</template>
<script>
	export default{
		computed:{
			count(){
				return this.$store.state.count;
			},
			list(){
				return this.$store.getters.filteredList;
				// return this.$store.getters.list;
			},
			listCount(){
				return this.$store.getters.listCount;
			}
		},
		methods:{
			handleDecrease(){
				this.$store.commit('decrease');
			},
			handleIncrement(){
				this.$store.commit("increment");
			},
			handleActionIncrement(){
				this.$store.dispatch("increment");
			},
			handleAsyncIncrement(){
				this.$store.dispatch("asyncIncrement").then(()=>{
					console.log(this.$store.state.count);
				});
			}
		}
	}
</script>
