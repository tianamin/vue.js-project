<template>
	<div>
		{{$route.params.id}}

		<!-- {{$route.params}} -->
		<!-- {{$route}} -->
		
		<!-- {{this.$route.params.id}} -->
		<button @click="handleGo">gogoog</button>

	</div>
</template>

<script>
	export default{
		mounted(){
			// console.log(this.$route.params.id);
			console.log(this.$route);
			// console.log($route.params.id);

		},
		methods:{
			handleGo:function () {
				this.$router.go(-1)
			}
		}
	}
</script>