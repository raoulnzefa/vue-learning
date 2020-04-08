import Vue from 'vue';

export default new Vue({
	data() {
		return {
			products: [
				{
					id: 1,
					title: 'Mushrooms',
					price: 50,
					qt: 1000
				},
				{
					id: 2,
					title: 'Headphones',
					price: 1800,
					qt: 10,
				},
				{
					id: 3,
					title: 'Beans',
					price: 30,
					qt: 45
				},
				{
					id: 4,
					title: 'Sugar',
					price: 75,
					qt: 70
				},
				{
					id: 5,
					title: 'Candle',
					price: 90,
					qt: 8
				},
				{
					id: 6,
					title: 'Socks',
					price: 40,
					qt: 40
				}
			]
		}
	},
	methods: {
		viewDetails(id) {
			let chosenItem = this.products.find(function(product) {
				if (product.id == id) {
					return product;
				}
			})
			this.$emit('viewDetails', chosenItem);
		},
		addItem(title, price, qt) {
			let id = this.products[this.products.length-1].id + 1;
			this.products.push({
				id,
				title,
				price,
				qt
			})
		}
	}
})