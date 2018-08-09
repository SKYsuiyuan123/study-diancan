<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img src="../assets/img/icon.png" height="256" width="256" alt="" class="mx-auto d-block">
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" v-model="user.email" class="form-control">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" v-model="user.password" class="form-control">
						</div>
						<button class="btn btn-block btn-success" type="submit">登录</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				user: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			onSubmit () {
				if (this.user.email != '' && this.user.password != '') {
					this.$axios.get('/users.json')
					  .then(res => {
					  	const data = res.data
					  	const users = []
					  	for(let key in data) {
					  		const user = data[key]
					  		users.push(user)
					  	}

					  	// 实现过滤
					  	let result = users.filter((user) => {
					  		return user.email === this.user.email && user.password === this.user.password
					  	})
					  	console.log(result)
					  	
					  	if (result.length > 0 && result != null) {
					  		this.$store.dispatch('setUser', result[0].email)
					  		this.$router.push('/home')
					  	} else {
					  		alert('账号或密码错误')
					  		this.$store.dispatch('setUser', null)
					  	}

					  })
					  .catch(error => {
					  	console.log(error)
					  })
				} else {
					alert('账号或密码不可以为空！')
				}
			}
		},
		// 组件内的守卫
		beforeRouteEnter(to, from, next) {
			// 点击退出后 重新进入该页面，清空用户信息
			next(vm => {
				vm.$store.dispatch('setUser', null)
			})
		}
	};
</script>