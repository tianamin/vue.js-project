var app=new Vue({
	el:"#app",
	data:{
		value:5,
		step:1
	},
	methods:{
		incrementupdate:function (val) {
			this.value=val;
		}
	}
});