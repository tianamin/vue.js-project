
var app=new Vue({

	el:"#app",
	data:{
		list:[
		[{
			id:1,
			category:"电子产品",
			name:"iphone7",
			price:6188,
			count:1,
			checked:true
		},{
			id:2,
			category:"电子产品",
			name:"ipad pro",
			price:5888,
			count:1,
			checked:true
		},
		{
			id:3,
			category:"电子产品",
			name:" macbook pro",
			price:21488,
			count:1,
			checked:true
		}],
		[{
			id:4,
			category:"生活用品",
			name:"pen",
			price:10,
			count:1,
			checked:true
		},{
			id:5,
			category:"生活用品",
			name:"pencil",
			price:50,
			count:1,
			checked:true
		},
		{
			id:6,
			category:"生活用品",
			name:"box",
			price:25,
			count:1,
			checked:true
		}],		
		[{
		
					id:7,
					category:"果蔬",
					name:"tomotos",
					price:8,
					count:1,
					checked:true
		},{
					id:8,
					category:"果蔬",
					name:"poteuo",
					price:6,
					count:1,
					checked:true
		},
		{
					id:9,
					category:"果蔬",
					name:"apple",
					price:3,
					count:1,
					checked:true
		}]
		]
								
	},
	computed:{
		totalPrice:function () {
			var total=0;
			for (var i = 0; i < this.list.length; i++) {
				var item=this.list[i];

				for (var j = 0; j < item.length; j++) {
					
					if (item[j].checked) {
						total+=item[j].price*item[j].count;
					}
				}
			
				
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
			// return total.toString()
		}

	},
	methods:{
		handleReduce:function (index,index2) {

			if (this.list[index][index2].count===1) {return;}
			this.list[index][index2].count--;
		},
		handleAdd:function (index,index2) {
			this.list[index][index2].count++;
			
		},
		handleRemove:function (index,index2) {
			this.list[index].splice(index2,1);
		},
		handleAllClick:function () {
			for (var i = 0; i < this.list.length; i++) {
				var item=this.list[i];
				for (var j = 0; j < item.length; j++) {
					item[j].checked=true;

				}				
								
			}
		},
		handleNoClick:function () {
			for (var i = 0; i < this.list.length; i++) {
				var item=this.list[i];
				for (var j = 0; j < item.length; j++) {
					item[j].checked=false;

				}				
								
			}


		}

	}
});