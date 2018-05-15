<template>
	<div>
		<v-title title="vue组件"></v-title>
		<v-button @click="handlerClick">点击按钮</v-button>
    <p>
      <img :src="img" alt="">
    </p>
    <div>{{list}}</div>
    <div>{{count}}</div>
    <button @click="handleEv"></button>
	</div>  
</template>


<script>
import vTitle from "./title.vue";
import vButton from "./button.vue";
import img from "./images/tokyo.jpg";

export default {
  data(){
    return {
      img:img
    }
  },
  computed:{
    list(){
      return this.$store.state.list;
    },
    count(){
      return this.$store.state.count;
    }
  },
  components:{
  	vTitle,
  	vButton
  },
  methods:{
  	handlerClick(e){
  		console.log("wer");
  	},
    handleEv(){
      this.$store.commit("increment",5);
    }
  }
}
</script>
<style>
  div{
    background-image:url("./images/tokyo.jpg") ;
  }
</style>


