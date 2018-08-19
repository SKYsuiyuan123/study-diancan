<template>
	<div class="row">
		<!-- 菜单 -->
		<div class="col-sm-12 col-md-7">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>单价</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="list in getMenuItems" :key="list.id">
					<tr>
						<td><strong>{{list.name}}</strong></td>
					</tr>
					<tr v-for="option in list.options" :key="option.id">
						<td>{{option.size}} 寸</td>
						<td>{{option.price}} RMB</td>
						<td>
							<button class="btn btn-sm btn-outline-success" @click="addToBasket(list, option)">+</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<!-- 购物车 -->
		<div class="col-md-5 col-sm-12">
			<!-- 不为空 -->
			<div v-if="baskets.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>数量</th>
							<th>品种</th>
							<th>价格</th>
						</tr>
					</thead>
					<tbody v-for="item in baskets" :key="item.id">
						<tr>
							<td>
								<button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
								<span>{{item.quantity}}</span>
								<button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
							</td>
							<td>{{item.name}} {{item.size}} 寸</td>
							<td>{{item.price * item.quantity}} RMB</td>
						</tr>
					</tbody>
				</table>
				<p>总价： {{total}} RMB</p>
				<button class="btn btn-success btn-block">提交</button>
			</div>
			<!-- 为空 -->
			<div v-else>购物空空如也，快去添加吧！</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				baskets: [] // 购物车
				// lists: [
				// {
				// 	name: '榴莲Pizza',
				// 	description: '榴莲Pizza 香味满满',
				// 	options: [
				// 		{
				// 			size: '9',
				// 			price: '38'
				// 		},
				// 		{
				// 			size: '12',
				// 			price: '48'
				// 		}
				// 	]
				// },{
				// 	name: '芝士Pizza',
				// 	description: '芝士Pizza 浓浓的芝士味道，香满四溢',
				// 	options: [
				// 		{
				// 			size: '9',
				// 			price: '48'
				// 		}
				// 	]
				// }]
			}
		},
		computed: {
			total () {
				let totalCost = 0
				for(let index in this.baskets) {
					let individualItem = this.baskets[index]
					totalCost += individualItem.quantity * individualItem.price
				}
				return totalCost
			},
			getMenuItems () {
				// return this.$store.state.getMenuItems
				// 通过getters 获取数据
				return this.$store.getters.getMenuItems
			}
		},
		methods: {
			// 添加进购物车
			addToBasket(list, option) {
				// console.log(list, option)
				let basket = {
					name: list.name,
					size: option.size,
					price: option.price,
					quantity: 1
				}

				if (this.baskets.length > 0) {
					// 过滤
					let result = this.baskets.filter((basket) => {
						return (basket.name === list.name && basket.price === option.price)
					})

					if (result != null && result.length > 0) {
						result[0].quantity++
					} else {
						this.baskets.push(basket)
					}

				} else {
					this.baskets.push(basket)
				}
			},

			// 购物车 数量减少
			decreaseQuantity(item) {
				item.quantity--
				if (item.quantity <= 0) {
					this.removeFromBasket(item)
				}
			},

			// 购物车 数量添加
			increaseQuantity(item) {
				item.quantity++
			},

			removeFromBasket(item) {
				this.baskets.splice(this.baskets.indexOf(item), 1)
			}
		},
		created() {
			// 请求数据  存储到 store
			this.$axios.get('/findMenus', {
				headers: this.$store.state._id
			})
				.then(res => {
					console.log(res.data)
					this.$store.commit('setMenuItems', res.data)
				})
				.catch(error => {
					console.log(error)
				})
		}
	};
</script>