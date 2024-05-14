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
			
			],
			add : null,
			add_do :[]
		}

	},
	methods: {
		do_it(index){
		 	done = this.toDo[index].result
		 	return done

		},
		add_do_func(item){
			this.add_do.push(item)
			console.log(this.add_do)
			return item
		},
		remove(x){
				this.toDo.splice(x,1)
		}
		
			
			
			


		

	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');