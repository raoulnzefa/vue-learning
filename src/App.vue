<template>
	<div id="app">
		<Header/>

		<div class="container">
			<router-view></router-view>

		</div>
	</div>
</template>

<script>

import Header from './Header';

export default {
	components: {
		Header
	},
	data() {
		return {
			mode: 'ProductDetails'
		}
	},
	methods: {
		changeMode() {
			this.mode = (this.mode == 'AddItem')? 'ProductDetails' : 'AddItem';
		}
	}
}
</script>

<style>
	.container {
		display: flex;
		align-items: flex-start;
	}
</style>
