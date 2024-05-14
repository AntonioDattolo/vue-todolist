const { createApp } = Vue

const myConfig = {

	data() {

		return {
			toDo : [
				{
					title: 'fare la spesa',
					done: false,
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
					done: false,
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
		do_it(index){
		 	done = this.toDo[index].done
		 	return done
		},
		add_do_func(item){
			this.toDo.push( new Object({title: item, done :false}))
		},
		remove(x){
				this.toDo.splice(x,1)
		}
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');