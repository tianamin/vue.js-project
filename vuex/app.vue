<template>
	<div>
    <router-view></router-view>
    
		<v-title title="vue组件"></v-title>
		<v-button @click="handlerClick">点击按钮</v-button>
    <p>
      <img src="./images/tokyo.jpg" alt="">
    </p>

	</div>  
</template>


<script>
import vTitle from "./title.vue";
import vButton from "./button.vue";


export default {
  components:{
  	vTitle,
  	vButton
  },
  methods:{
  	handlerClick(e){
  		console.log("wer");
  	}
  }
}
</script>


