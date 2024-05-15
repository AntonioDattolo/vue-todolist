const { createApp } = Vue

const myConfig = {

	data() {

		return {
			toDo : [
				{
					title: 'Fare la spesa',
					done: true,
				},
				{
					title: 'Aggiornare pc',
					done: false,
				},
				{
					title: 'Andare in palestra',
					done: false,
				},
				{
					title: 'Mettere la lavatrice',
					done: true,
				},
				{
					title: 'Dare da mangiare a Pixel',
					done: false,
				}
			
			],
			add : null,
		}

	},
	methods: {
		add_do_func(item){
			this.toDo.push( new Object({title: item, done :false}))
			this.add = ""
		},
		remove(item){
			this.toDo.splice(item,1)
		},
		checked(item){
			return (item == true) ? "green" : "red"
		},
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');