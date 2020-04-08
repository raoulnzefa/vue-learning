import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import AddItem from './AddItem'

export const routes = [
	{
		path : '/',
		name: 'home',
		component: ProductList
	},
	{
		path: '/add',
		name: 'add',
		component: AddItem
	},
	{
		path: '/detail/:id',
		name: 'product-details',
		component: ProductDetails
	},
	{
		path: '*',
		component: ProductList
	}
]