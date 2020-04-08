<template>
	<div class="card">
		<div class="card-body">
			<h4 class="card-title">{{index}} {{product.title}}</h4>
			<p class="card-text">{{product.qt}} items for ${{product.price}}</p>
			<button href="#" class='btn btn-primary' v-on:click='viewDetailsClick'>View Details</button>
		</div>
	</div>
</template>

<script>
import Service from './Service.js';

export default {
	props: {
		product: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},
	methods: {
		viewDetailsClick() {
			//Service.viewDetails(this.product.id);
			this.$router.push({name: 'product-details', params:{id:this.product.id}})
		}
	}
}
</script>

<style>
div.card {
	width: 400px;
	border: 2px solid  #d3e0ce;
	border-radius: 10px;
	margin: 10px;
	padding: 10px;
}
</style>