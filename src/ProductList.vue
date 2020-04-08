<template>
	<div>
		<router-link to='/add' class='btn-success btn-lg'>add item</router-link>
		<ProductItem v-for='(product, i) in products' 
		:key='product.id' :product='product'
		:index='(i+1)'></ProductItem>
	</div>
</template>

<script>
import ProductItem from './ProductItem';
import Service from './Service.js';

export default {
	components: {
		ProductItem
	},
	data() {
		return {
			products: Service.products
		}
	},
}

</script>