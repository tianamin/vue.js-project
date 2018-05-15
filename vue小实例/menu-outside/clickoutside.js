Vue.directive("clickoutside",{
	bind:function (el,binding,vnode) {

		function documentHandler(e) {
			if (el.contains(e.target)) {
				return false;
			}

			if (binding.expression) {
				binding.value(e);
			}

		}
		
		el.__vueClickOutside__=documentHandler;

		function keydownHandler(e) {
			if (e.keyCode=="27") {
				this.show="false";
			}
		}

		document.addEventListener('click', documentHandler);	
		document.addEventListener('keydown', keydownHandler);	


			

	},
	unbind:function function_name(el,binding) {
		document.removeAttribute('click',el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	}
});