var app1=new Vue({
	el:"#app",
	data:{
		show:false,
	},
	methods:{
		handleClose:function () {
			this.show=false;
		}
	}
});