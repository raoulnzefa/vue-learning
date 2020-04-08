<template>
	<div>
		<router-link :to='{name: "home"}' class='btn-success btn-lg'>back to list</router-link>
		<div class='product'>
			<h2>Product details:</h2>
			<div>
				<p>Title: <span>{{chosenItem.title}}</span></p>
				<p>Price: <span>${{chosenItem.price}}</span></p>
				<p>Quantity: <span>{{chosenItem.qt}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
import Service from './Service.js';

export default {
	data() {
		return {
			chosenItem: {}
		}
	},
	created() {
		Service.$on('viewDetails', chosenItem => {
			this.chosenItem = chosenItem;
		})
	},
	mounted() {
		Service.viewDetails(this.$route.params.id);
	},
	watch: {
		'$route.params.id'(id) {
			Service.viewDetails(id);
		}
	}
}
</script>

<style>
.product {
	width: 400px;
	border: 2px solid #e2b995;
	border-radius: 10px;
	margin:10px;
	padding: 10px;
}
</style>