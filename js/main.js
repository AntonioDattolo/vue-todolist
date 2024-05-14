const { createApp } = Vue

const myConfig = {
	
	data() {
		
		return {
			toDo : [
				{
					title: 'fare la spesa',
					result: false,
				},
				{
					title: 'Aggiornare pc',
					result: false,
				},
				{
					title: 'Andare in palestra',
					result: false,
				},
				{
					title: 'Mettere la lavatrice',
					result: false,
				},
				{
					title: 'Dare da mangiare a Pixel',
					result: false,
				}
			]
		}
	},
	methods: {
		do_it(index){
			done = this.toDo[index].result
			return done
		}
		
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');