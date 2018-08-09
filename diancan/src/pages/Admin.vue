<template>
	<div class="row">
		<!-- 添加品种 -->
		<div class="col-sm-12 col-md-7">
			<new-pizza></new-pizza>
		</div>
		<!-- 品种展示 -->
		<div class="col-sm-12 col-md-5">
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table" v-if="getMenuItems.length > 0">
				<thead>
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.id">
					<tr>
						<td>{{item.name}}</td>
						<td>
							<button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times</button>
						</td>
					</tr>
				</tbody>
			</table>
			<p v-else>还没有品种请赶快添加！</p>
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza'
	export default {
		data () {
			return {
				// getMenuItems: []
			}
		},
		components: {
			NewPizza
		},
		computed: {
			getMenuItems: {
				get () {
					// return this.$store.state.menuItems
					return this.$store.getters.getMenuItems
				},
				set () {

				}
			}
		},
		methods: {
			deleteData(item) {
				this.$axios.delete(`/menu/${item.id}/.json`)
					.then(res => {
						// console.log(res)
						// this.$router.push('/menu')
						this.$store.commit('removeMenuItems', item)
					})
					.catch(error => {
						console.log(error)
					})
			}
		},
		created() {
			this.$axios.get('/menu.json')
				.then(res => {
					let menuArray = []

					for (let key in res.data) {
						res.data[key].id = key
						menuArray.push(res.data[key])
					}

					// 数据同步
					this.$store.commit('setMenuItems', menuArray)
				})
				.catch(error => {
					console.log(error)
				})
		}

		// 进入组件之前
		// beforeRouteEnter: (to, from, next) => {
		// 	next 是异步的，所以可以获取到
		// 	next(vm => {
		// 		alert('hello ' + vm.name)
		// 	})
		// }

		// 离开组件之前
		// beforeRouteLeave (to, from, next) {
		// 	if (confirm('确定离开吗？') == true) {
		// 		next()
		// 	} else {
		// 		next(false)
		// 	}
		// }
	};
</script>