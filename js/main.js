const { createApp } = Vue

const myConfig = {
	
	data() {
		
		return {
			message: 'Welcome to VueJS!'
		}
	},
	methods: {
		stampaMsg() {
			
		}
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');