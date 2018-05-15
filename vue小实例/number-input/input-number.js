function isValueNumber(value) {
	return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+"");
}

Vue.component('input-number',{
	template:'\
	<div class="input-number">\
	<input type="text" v-bind:value="currentValue" v-on:change="handleChange" v-on:keyup.up="handleUp($event)" v-on:keyup.down="handleDown">\
	<button v-on:click="handleDown" v-bind:disabled="currentValue<=min">-</button>\
	<button v-on:click="handleUp" v-bind:disabled="currentValue>=max">+</button>\
	</div>',
	
	props:{
		max:{
			type:Number,
			dafault:Infinity
		},
		min:{
			type:Number,
			dafault:-Infinity
		},
		value:{
			type:Number,
			default:0
		},
		step:{
			type:Number,
			default:1
		}
	},
	data:function () {
		return {
			currentValue:this.value
		}
	},
	watch:{
		currentValue:function (val) {
			// this.$emit("input",val);
			 //this.$emit("on-change",val);
			// console.log(this.currentValue);
			// console.log(val);
			this.$emit("increment",val);

		},
		value:function (val) {
			console.log(val);
			this.updataValue(val);
		}
	},
	methods:{
		updataValue:function (val) {
			if (val>this.max) { val=this.max}
			if (val<this.min) { val=this.min}

			this.currentValue=val;
		},
		handleDown:function (event) {
			event.preventDefault();
			if (this.currentValue<=this.min) { return}
				
			this.currentValue-=this.step;
			
		},
		handleUp:function (event) {
			event.preventDefault();
			if (this.currentValue>=this.max) {return}

			this.currentValue+=this.step;		
		},
		handleChange:function (event) {
				var val=event.target.value.trim();
				var max=this.max;
				var min=this.min;				
				// console.log(isValueNumber(val));

				val=Number(val);

				if (val>max) {
				 	this.currentValue=max;
				}else if(val<min){
				 	this.currentValue=min;
				}

				this.currentValue=val;

              
				// if (isValueNumber(val)) {
					
				// 	if (val>max) {
				// 		this.currentValue=max;
				// 	}else if(val<min){
				// 		this.currentValue=min;
				// 	}
				// }else{
				// 	event.target.value=this.currentValue;
				// }

				// console.log(this.currentValue);
		}
		
	},
	mounter:function () {
		this.updataValue(this.value)
	}

});
