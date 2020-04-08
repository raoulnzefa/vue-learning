<template>
	<div class="product">
		<form>
			<div class="form-group">
				<label for='title'>Title</label>
				<input type="text" class="form-control" id='title'
				placeholder="enter title" v-model='item.titile'>
			</div>
			<div class="form-group">
				<label for='price'>Price</label>
				<input type="text" class="form-control" id='price'
				placeholder="enter price" v-model='item.price'>
			</div>
			<div class="form-group">
				<label for='qt'>Quantity</label>
				<input type="text" class="form-control" id='qt'
				placeholder="enter quantitly" v-model='item.qt'>
			</div>
			<button type='submit' class='btn btn-primary' @click.prevent='addItem'>Submit</button>
		</form>
	</div>
</template>

<script>
import Service from './Service';

export default {
	data() {
		return {
			item: {
			// title: '',
			// price: '',
			// qt: ''
			}
		}
	},
	methods: {
		addItem() {
			if (this.item.titile && this.item.price && this.item.qt) {
				Service.addItem(this.item.titile, this.item.price, this.item.qt);
			}
			this.$router.push('/')
		}
	}
}
</script>


<style scoped>
	.product {
		width: 400px;
		border: 2px solid #e2b995;
		border-radius: 10px;
		margin:10px;
		padding: 10px;
}
</style>