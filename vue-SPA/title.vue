<template>
	<h1>
		<a :href="'#'+title">{{title}}</a>
	</h1>
	
</template>
<script>
	export default{
		props:{
			title:{
				type:String
			}
		}
	}
</script>
<style scoped>
	h1 a{
		color: #f00;
		font-size: 50px;
	}
</style>